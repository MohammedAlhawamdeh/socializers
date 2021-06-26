import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Course from '../Components/Course'
import courses from '../courses'

const HomePage = () => {
    return (
      <>
        <h1>Latest Courses</h1>
        <Row>
          {courses.map((course) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Course course={course} />
            </Col>
          ))}
        </Row>
      </>
    )
  }
  
  export default HomePage


