import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import Tutor from './Tutor.jsx';

const TutorComponent = () => {
  const [tutor, setTutor] = useState(null);
  const [loading, setLoading] = useState(true);
  const { tutorId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://c17-15-t-node-react.onrender.com/api/users/"
        );
        const data = response.data.response.docs;
        // Encuentra el tutor por ID
        const selectedTutor = data.find(tutor => tutor._id === tutorId);
        setTutor(selectedTutor);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tutorId]);

  return <Tutor tutorInfo={tutor} loading={loading}></Tutor>;
};

export default TutorComponent;
