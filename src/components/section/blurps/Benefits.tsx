import { Card, Col, Container, Row } from 'react-bootstrap';
import React from 'react';

export type Props = {
  className?: string;
};

export default function Benefits(props: Props) {
  const { className } = props;
  return (
    <div className={`blurp-benefits ${className}`}>
      <Container className="d-flex justify-content-center align-items-start">
        <Row className="wrapper-col shadow-sm bg-white gx-0">
          <Col lg={4} className="d-flex border-0">
            <Card
              bg="secondary"
              className="d-flex flex-row align-items-center w-100"
            >
              <Card.Body>
                <Card.Title>Use Cases</Card.Title>
                <Card.Text className="pe-3">
                  Discover what you can achieve with JavaScript, React, and your
                  bright mind?
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <span className="ti-settings display-4" />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="d-flex">
            <Card
              bg="dark"
              className="d-flex flex-row align-items-center w-100"
            >
              <Card.Body>
                <Card.Title>Tips & Tricks</Card.Title>
                <Card.Text className="pe-3">
                  Get shortcuts to writing slick, faster and secure code (and
                  make more money)
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <span className="ti-star display-4" />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="d-flex">
            <Card
              bg="primary"
              className="d-flex flex-row align-items-center w-100"
            >
              <Card.Body>
                <Card.Title>Endless Fun</Card.Title>
                <Card.Text className="pe-3">
                  How to be more innovative and write new code poetry
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <span className="ti-crown display-4" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
