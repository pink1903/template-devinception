import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import React from 'react';
import { latestArticles } from '@/resources/demo-data';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <Container className="py-5">
        <Row>
          <Col
            lg={4}
            className="d-flex align-items-center justify-content-center justify-content-lg-start"
          >
            <Navbar.Brand className="d-flex align-items-center">
              <img
                src="/images/logo.png"
                alt="DevInception"
                style={{ width: '25px' }}
              />
              <span>DevInception</span>
            </Navbar.Brand>
          </Col>
          <Col
            lg={3}
            className="mt-5 mt-lg-0 text-center text-lg-start px-lg-0 px-4 pe-lg-3"
          >
            <h6 className="text-uppercase">Recent Articles</h6>
            {latestArticles.slice(0, 2).map((article) => (
              <div key={article.headline} className="mt-2">
                <Link href={article.path}>
                  <a href={article.path} className="d-block mb-1">
                    {article.headline}
                  </a>
                </Link>
                <span>
                  <small className="fst-italic">{article.date}</small>
                </span>
              </div>
            ))}
          </Col>
          <Col lg={2} className="text-center text-lg-start">
            <h6 className="mt-5 mt-lg-0">Menu</h6>
            <Nav className="d-flex flex-row justify-content-center flex-lg-column">
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col
            lg={3}
            className="d-flex justify-content-lg-end justify-content-center align-items-center mt-5 mt-lg-0"
          >
            <Nav className="social-channels">
              <Nav.Item>
                <Nav.Link>
                  <span className="ti-twitter" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <span className="ti-github" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <span className="ti-linkedin" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <span className="ti-facebook" />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <hr className="my-5 bg-white" />
          </Col>
          <Col sm={6} className="text-lg-start text-center">
            © Copyright Message
          </Col>
          <Col sm={6} className="d-flex justify-content-center justify-lg-end">
            <Nav className="legal">
              <Nav.Item>
                <Nav.Link>Privacy Policy</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Terms Of Service</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
