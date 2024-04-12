import Rating from "./model/rating.model.js";
import Subject from "./model/subject.model.js";
import Session from "./model/session.model.js";
import User from "./model/user.model.js";
import Course from "./model/course.model.js";
import CourseRating from "./model/courseRating.model.js"; // Added import for CourseRating

class MongoManager {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const one = await this.model.create(data);
      return one;
    } catch (error) {
      throw error;
    }
  }
  async read(query = {}) {
    try {
      const results = await this.model.find(query);
      return results;
    } catch (error) {
      throw error;
    }
  }
  async readOne(id) {
    try {
      const one = await this.model.findById(id);
      if (!one) {
        const error = new Error("document not found");
        error.statusCode = 404;
        throw error;
      }
      return one;
    } catch (error) {
      throw error;
    }
  }

  async readByEmail(email) {
    try {
      const one = await this.model.findOne({ email: email });
      return one;
    } catch (error) {
      throw error;
    }
  }

  async update(id, data) {
    try {
      const opts = { new: true };
      const one = await this.model.findByIdAndUpdate(id, data, opts);
      return one;
    } catch (error) {
      throw error;
    }
  }
  async delete(id) {
    try {
      const one = await this.model.findByIdAndDelete(id);
      return one;
    } catch (error) {
      throw error;
    }
  }
}

export const rating = new MongoManager(Rating);
export const subject = new MongoManager(Subject);
export const session = new MongoManager(Session);
export const users = new MongoManager(User);
export const course = new MongoManager(Course);
export const courseRating = new MongoManager(CourseRating);
