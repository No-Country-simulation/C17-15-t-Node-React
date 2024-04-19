import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CourseDetail } from "./CourseDetail.jsx";

export const CourseDetailContainer = () => {
  const [courseInfo, setCourseInfo] = useState();
  const { cid } = useParams();

  useEffect(() => {
    const getCouseInfo = async () => {
      try {
        const response = await axios.get(
          `https://c17-15-t-node-react.onrender.com/api/courses/${cid}`
        );
        setCourseInfo(response.data.response);
        console.log(response.data.response);
      } catch (error) {
        console.log(error);
      }
    };
    getCouseInfo();
  }, [cid]);

  return <CourseDetail courseInfo={courseInfo} />;
};
