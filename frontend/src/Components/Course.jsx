import React from "react";
import { Card } from "react-bootstrap";

const Course = ({ course }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/course/${course._id}`}>
        <Card.Img src={course.image} variant="top" />
      </a>

      <Card.Body>
        <a href={`/course/${course._id}`}>
          <Card.Title as="div">
            <strong>{course.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="div">
          <div className="my-3">
            {course.rating} from {course.numReviews} reviews
          </div>
        </Card.Text>

        <Card.Text as="h3">${course.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Course;
