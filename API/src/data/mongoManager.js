import Admin from "./model/admin.model.js";
import Student from "./model/student.model.js";
import Tutor from "./model/tutor.model.js";
import Rating from "./model/rating.model.js";
import Subject from "./model/subject.model.js";
import Session from "./model/session.model.js";
import User from "./model/user.model.js";

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
  async read() {
    try {
      const one = await this.model.find({});
      return one;
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

export const admin = new MongoManager(Admin);
export const student = new MongoManager(Student);
export const tutor = new MongoManager(Tutor);
export const rating = new MongoManager(Rating);
export const subject = new MongoManager(Subject);
export const session = new MongoManager(Session);
export const users = new MongoManager(User)
