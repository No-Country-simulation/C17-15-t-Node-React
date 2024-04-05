import Admin from "./model/admin.model.js";

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
      const one = await this.model.find({})
      return one
    } catch (error) {
      throw error
    }
  }
  async readOne(id) {
    try {
      const one = await this.model.findById(id)
      if(!one) {
        const error = new Error('admin not found')
        error.statusCode = 404
        throw error
      }
      return one
    } catch (error) {
      throw error
    }
  }
  async update(id, data) {
    try {
      const opts = { new: true }
      const one = await this.model.findByIdAndUpdate(id, data, opts)
      return one
    } catch (error) {
      throw error
    }
  }
  async delete(id) {
    try {
      const one = await this.model.findByIdAndDelete(id)
      return one
    } catch (error) {
      throw error
    }
  }
}

export const admin = new MongoManager(Admin);

