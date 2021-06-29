import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../Components/Rating";
import axios from "axios";

const CoursePage = ({ match }) => {
  const [course, setCourse] = useState({});
  useEffect(() => {
    const fetchCourse = async () => {
      const { data } = await axios.get(`/api/courses/${match.params.id}`);
      setCourse(data);
    };
    fetchCourse();
  }, []);
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={course.image} alt={course.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{course.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={course.rating}
                text={`${course.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${course.price}</ListGroup.Item>
            <ListGroup.Item>Description: {course.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${course.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={course.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default CoursePage;
