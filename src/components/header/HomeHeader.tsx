import { Button, Container } from 'react-bootstrap';
import React from 'react';

export default function HomeHeader() {
  return (
    <header className="header">
      <div className="d-flex flex-column">
        <Container className="flex-grow-1 d-flex flex-column justify-content-center align-items-start">
          <h1 className="display-4 text-white fw-normal mb-0 text-capitalize">
            Web development with
            <span className="d-block text-danger mx-2 mx-lg-0 clearfix">
              cutting-edge technology
            </span>
            at your disposal
          </h1>
          <Button
            variant="outline-primary"
            className="border-0 px-0 px-lg-1 btn-header-cta"
          >
            <span className="h4 fw-normal text-uppercase text-white">
              Join my Newsletter
              <span className="ms-3 icon ti-arrow-right" />
            </span>
          </Button>
        </Container>
      </div>
    </header>
  );
}
