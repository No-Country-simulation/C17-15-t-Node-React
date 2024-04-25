import { course } from "../data/mongoManager.js";
class CourseController {
  constructor() {
    this.controller = course;
  }

  create = async (req, res, next) => {
    try {
      const data = req.body;
      data.tutor_id = req.user._id
      const response = await this.controller.create(data);
      res.json({
        statusCode: 201,
        response,
      });
    } catch (error) {
      next(error);
    }
  };
  readByTutor = async (req, res, next) => {
    try {
      const options = {
        limit: req.query.limit || 4,
        page: req.query.page || 1,
        sort: { name: 1 },
      };

      const filter = {
        tutor_id: req.user._id
      };

      if (req.query.title) {
        filter.title = new RegExp(req.query.title.trim(), "i");
      }

      const response = await this.controller.read(filter, options);
      if (response.docs.length > 0) {
        return res.json({
          statusCode: 200,
          response,
        });
      } else {
        const error = new Error("not found documents");
        error.statusCode = 404;
        throw error;
      }
    } catch (error) {
      next(error);
    }
  };
  
  read = async (req, res, next) => {
    try {
      console.log(req.user)
      const options = {
        limit: req.query.limit || 4,
        page: req.query.page || 1,
        sort: { name: 1 },
      };

      const filter = {};
      if (req.query.title) {
        filter.title = new RegExp(req.query.title.trim(), "i");
      }

      if (req.query.tutor_id) {
        filter.tutor_id = req.query.tutor_id
      }

      const response = await this.controller.read(filter, options);
      if (response.docs.length > 0) {
        return res.json({
          statusCode: 200,
          response,
        });
      } else {
        const error = new Error("not found documents");
        error.statusCode = 404;
        throw error;
      }
    } catch (error) {
      next(error);
    }
  };
  readOne = async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await this.controller.readOne(id);
      return res.json({
        statusCode: 200,
        response,
      });
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const opts = { new: true };
      const response = await this.controller.update(id, data, opts);
      return res.json({
        statusCode: 200,
        response,
      });
    } catch (error) {
      next(error);
    }
  };

  destroy = async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await this.controller.delete(id);
      return res.json({
        statusCode: response ? 200 : 404,
        response: response || "not found document",
      });
    } catch (error) {
      next(error);
    }
  };

  addStudent = async (req, res, next) => {
    try {
      const { cid } = req.params;
      const user = req.user;
      const existsCourse = await this.controller.readOne(cid);
      if (!existsCourse) {
        return res.json({
          statusCode: 404,
          message: "El curso no existe"
        });
      }
      if (existsCourse.enrolled_students.some(student => student.user_id === user._id)) {
        return res.json({
          statusCode: 400,
          message: "El usuario ya está registrado en este curso"
        });
      }
      const { name, lastName, email } = user;
      await this.controller.update(cid, { 
        $push: { 
          enrolled_students: { 
            user_id: user._id,
            name,
            lastName,
            email
          } 
        } 
      });
      return res.json({
        statusCode: 200,
        message: "Usuario registrado correctamente en el curso"
      });
    } catch (error) {
      next(error);
    }
  };
  rateCourse = async(req, res, next) => {
    try {
      const { cid } = req.params
      const {rating, comment} = req.body
      const userId = req.user._id

      const course = await this.controller.readOne(cid)

      if(!course) {
        return res.json({
          statusCode: 404,
          message: "El curso no existe"
        }) 
      }
      const existingRating = course.ratings.find((r) => r.user.toString() === userId.toString());
      if(existingRating) {
        existingRating.rating = rating
        existingRating.comment = comment
      } else {
        course.ratings.push({ user: userId, rating, comment });
      }
      const totalRatings = course.ratings.length;
      let sumRatings = 0;
      course.ratings.forEach((r) => {
        sumRatings += r.rating;
      });
      course.avg_rating = totalRatings > 0 ? sumRatings / totalRatings : 0;
  
      await course.save();
      return res.json({
        statusCode: 200,
        message: "curso valorado correctamente"
      })
    } catch (error) {
      next(error)
    }
  }

}

const controller = new CourseController(course);
export const {
  create,
  read,
  readOne,
  destroy,
  update,
  addStudent,
  readByTutor,
  rateCourse
} = controller;
