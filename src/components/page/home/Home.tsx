import React from 'react';

import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

import HomeHeader from '@/components/header/HomeHeader';
import Footer from '@/components/footer/Footer';
import { feedback, latestArticles } from '@/resources/demo-data';

import SimpleTestimonials from '@/components/section/testimonials/SimpleTestimonials';
import Testimonial from '@/components/section/testimonials/Testimonial';
import Benefits from '@/components/section/blurps/Benefits';
import SnippetCard from '@/components/section/snippets/SnippetCard';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <Benefits className="header-blurp" />
      <section className="my-5">
        <Container>
          <Row>
            <Col>
              <h2 className="h4 text-uppercase d-flex flex-column align-items-center mb-5">
                <span className="mr-2 ti-comments-smiley mb-2 font-weight-bold text-danger" />
                Let me introduce myself
              </h2>
            </Col>
          </Row>
          <Row className="gx-0">
            <Col lg={6}>
              <Image
                layout="responsive"
                src="/images/annie-spratt-AkftcHujUmk-unsplash-resize.jpg"
                className="d-block flex-grow-0"
                objectFit="cover"
                loading="lazy"
                width={1920}
                height={1281}
                alt="Freelance Web Developer"
              />
            </Col>
            <Col lg={6}>
              <Card className="d-flex justify-content-start border-0 bg-transparent">
                <Card.Body className="flex-grow-0 px-4 ">
                  <Card.Text>Hello,</Card.Text>

                  <Card.Text>
                    My name is Sashe Vuchkov and I&apos;m a web developer with a
                    strong interest in direct response marketing.
                  </Card.Text>

                  <Card.Text>
                    I like to create web assets that generate profits (or
                    miserably fail fast) as soon as they are online. I think
                    it&apos;s painful to wait weeks or months to find out if a
                    business idea or a product has potential, so I always strive
                    to get &quot;the numbers&quot; fast.
                  </Card.Text>

                  <Card.Text>
                    Everything I do must align with your business goals, so
                    there is no &quot;code fluff,&quot; &quot;bloat&quot; or
                    whatever that looks or sounds good but has ZERO contribution
                    to your bottom line.
                  </Card.Text>
                  <Card.Text>
                    I created this blog to share what I&apos;ve learned by
                    working on my projects.
                  </Card.Text>
                  <Card.Text>
                    <small className="font-italic">
                      Note: The pic is a stock photo and this is a demo text
                    </small>
                  </Card.Text>
                  <Link href="/about">
                    <Button
                      href="/about"
                      variant="danger"
                      className="text-uppercase fw-bold text-white"
                    >
                      Learn more
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row />
        </Container>
      </section>

      <section className="coming-soon">
        <div className="container py-5">
          <div className="row align-items-center justify-content-between pb-5">
            <div className="col-md-8">
              <div className="text-white pb-100 text-center text-lg-start">
                <Badge bg="danger" pill className="mb-2">
                  Coming Soon
                </Badge>
                <h2 className="text-white">
                  Profitable Web: Shortcuts for creating a winning website that
                  sells and looks awesome
                </h2>
                <p className="lead">
                  Making a website is not rocket science, but there are some
                  little details that can greatly impact the business aspects of
                  the project. Let&apos;s dive in and explore them.
                </p>

                <div className="mb-4">
                  <Button
                    href="#"
                    variant="outline-light"
                    className="rounded-pill"
                  >
                    <span className="ti-email" /> Get Notified
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-end justify-content-lg-end justify-content-center me-lg-0 me-5 text-center">
                <Image
                  width={400}
                  height={600}
                  src="/images/winning-websites-smartphone.png"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        {feedback && (
          <SimpleTestimonials className="pt-5 bg-white shadow-sm">
            {feedback.map(({ photo, text, author }) => (
              <Testimonial
                key={author}
                photo={photo}
                feedback={text}
                author={author}
              />
            ))}
          </SimpleTestimonials>
        )}
      </section>

      <section className="my-5">
        <Container>
          <Row>
            <Col>
              <h2 className="h4 text-uppercase d-flex flex-column align-items-center mb-5">
                <span className="mr-2 ti-pin-alt mb-2 font-weight-bold text-danger" />
                Latest from the Blog
              </h2>
            </Col>
          </Row>
          <Row>
            {latestArticles.map((snippet) => (
              <Col key={snippet.path} md={6} lg={4}>
                <SnippetCard {...snippet} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}
