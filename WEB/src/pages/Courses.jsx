import React from "react";
import SeacrhCourses from "../components/SearchCourses/SeacrhCourses";
import { motion } from "framer-motion";
export const Courses = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <SeacrhCourses />
    </motion.div>
  );
};
