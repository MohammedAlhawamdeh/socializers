import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Course from "../Components/Course";
import axios from "axios";

const HomePage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data } = await axios.get("/api/courses");
      setCourses(data);
    };

    fetchCourses();
  }, [match]);
  return (
    <>
      <h1>Latest Courses</h1>
      <Row>
        {courses.map((course) => (
          <Col key={course._id} sm={12} md={6} lg={4} xl={3}>
            <Course course={course} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
