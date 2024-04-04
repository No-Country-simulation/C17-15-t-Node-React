import { Tutor } from "../data/model/index.js";

// Obtener todos los tutores
export const getAllTutors = async (req, res) => {
  try {
    const tutors = await Tutor.find();
    res.status(200).json(tutors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Obtener un tutor específico por ID
export const getTutorById = async (req, res) => {
  try {
    const tutor = await Tutor.findById(req.params.id);
    if (!tutor) {
      return res.status(404).json({ message: "Tutor not found" });
    }
    res.status(200).json(tutor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo tutor
export const createTutor = async (req, res) => {
  try {
    const newTutor = new Tutor(req.body);
    const savedTutor = await newTutor.save();
    res.status(201).json(savedTutor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// Editar un tutor
export const updateTutor = async (req, res) => {
  try {
    const updatedTutor = await Tutor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTutor) {
      return res.status(404).json({ message: "Tutor not found" });
    }
    res.status(200).json(updatedTutor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Borrar un tutor
export const deleteTutor = async (req, res) => {
  try {
    const deletedTutor = await Tutor.findByIdAndDelete(req.params.id);
    if (!deletedTutor) {
      return res.status(404).json({ message: "Tutor not found" });
    }
    res.status(200).json({ message: "Tutor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
