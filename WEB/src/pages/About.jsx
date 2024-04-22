import React from "react";
import { AboutComponent } from "../components/About/AboutComponent";
import { motion } from "framer-motion";
export const About = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <AboutComponent />
    </motion.div>
  );
};
