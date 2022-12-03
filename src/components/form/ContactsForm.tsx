import React from 'react';
import { Button, Col, ListGroup, Row, Form } from 'react-bootstrap';

export default function ContactsForm() {
  return (
    <div className="py-4 px-3 contacts-form shadow-sm">
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>First Name *</Form.Label>
              <Form.Control type="text" size="sm" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Last Name *</Form.Label>
              <Form.Control type="text" size="sm" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Email *</Form.Label>
          <Form.Control type="email" size="sm" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Message *</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
        <Button
          variant="secondary"
          type="submit"
          className="w-100 mt-3 bg-dark text-uppercase"
        >
          Send me a message
        </Button>
      </Form>
      <hr className="mt-4" />
      <div>
        <h6 className="mb-3 mt-2">Contact Information</h6>
        <ListGroup horizontal="md">
          <ListGroup.Item className="border-0 bg-transparent p-0 mb-3 me-5 d-flex align-items-center">
            <span className="ti-location-pin me-3 font-weight-bold" />
            <p className="d-inline-block p-0 m-0 text-secondary text">
              1000 Sofia, Bulgaria
            </p>
          </ListGroup.Item>
          <ListGroup.Item className="border-0 bg-transparent p-0">
            <span className="ti-email me-3 font-weight-bold" />
            <span className="text-secondary">hello@example.com</span>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}
