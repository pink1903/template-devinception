import React from 'react';
import { Button, Col, Container, ProgressBar, Row } from 'react-bootstrap';
import Image from 'next/image';

import InnerPageHeader from '@/components/header/InnerPageHeader';
import Footer from '@/components/footer/Footer';
import BenefitsWidget from '@/components/section/sidebar/BenefitsWidget';
import PostsListWidget from '@/components/section/sidebar/PostsListWidget';
import PostsListExpanded from '@/components/section/sidebar/PostsListExpanded';
import Breadcrumb from '@/components/nav/Breadcrumb';
import BreadcrumbItem from '@/components/nav/Breadcrumb/BreadcrumbItem';
import {
  latestArticles,
  popularArticles,
  projects,
} from '@/resources/demo-data';
import AsideTitle from '@/components/section/sidebar/AsideTitle';
import Link from 'next/link';

export default function About() {
  const frontend = [
    { name: 'React + Redux', value: 75 },
    { name: 'TypeScript', value: 70 },
    { name: 'HTML5', value: 80 },
    { name: 'CSS3', value: 80 },
    { name: 'JavaScript (ES6)', value: 75 },
    { name: 'jQuery', value: 70 },
    { name: 'Bootstrap 4', value: 80 },
  ];

  const backend = [
    { name: 'TypeScript', value: 70 },
    { name: 'Node Js', value: 70 },
    { name: 'Express.js', value: 80 },
    { name: 'MySQL', value: 70 },
    { name: 'Mongo', value: 70 },
    { name: 'OOP / Design Patterns', value: 60 },
  ];

  return (
    <>
      <InnerPageHeader headline="About">
        <Breadcrumb>
          <BreadcrumbItem href="/about">About</BreadcrumbItem>
        </Breadcrumb>
      </InnerPageHeader>

      <section className="my-5">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="shadow-sm bg-white">
                <Image
                  width={1366}
                  height={768}
                  layout="responsive"
                  src="/images/annie-spratt-AkftcHujUmk-unsplash-resize.jpg"
                  objectFit="cover"
                  loading="lazy"
                />
                <div className="px-3 py-3">
                  <p>Hello,</p>
                  <p>
                    My name is Sashe Vuchkov and I&apos;m a web developer with a
                    strong interest in direct response marketing.
                  </p>
                  <p>
                    I like to create web assets that generate profits (or
                    miserably fail fast) as soon as they are online. I think
                    it&apos;s painful to wait weeks or months to find out if a
                    business idea or a product has potential, so I always strive
                    to get &quot;the numbers&quot; fast.
                  </p>
                  <h3 className="h4 mb-3">From a marketing standpoint...</h3>
                  <p>
                    It&apos;s essential for me my websites, landing pages, and
                    other assets be planned out for conversions and sales from
                    the beginning. I like to write sales copy and I like to run
                    my ads, so I have some understating of specialties like
                    copywriting, advertising, and online marketing.
                  </p>
                  <p>
                    All this helps me to deliver web assets suitable for direct
                    response campaigns.
                  </p>
                  <p>
                    My passion for digital marketing has been with me for a
                    decade, and it drives me to always lookout for opportunities
                    to apply my knowledge and skills.
                  </p>
                  <h3 className="h4 mb-3">
                    From a web development standpoint...
                  </h3>
                  <p>
                    I&apos;m a &quot;web resident&quot; since the year 2000 with
                    a coding experience dating back to 2006, and I love almost
                    everything related to the World Wide Web. I adore most web
                    technologies and every minute spent writing code is a sweet
                    pleasure for me.
                  </p>
                  <p>
                    My code is clean and looks beautiful on the screen. Or at
                    least I think so... Of course, there is always room for
                    improvement, but I&apos;m not a perfectionist, so I produce
                    &quot;good enough&quot; stuff that brings results. After all
                    - we are not here to win academy awards for algorithm
                    efficiency or something like that.
                  </p>
                  <p>
                    My strongest advantage is my business-oriented style of web
                    development. Everything I do must align with your business
                    goals, so there is no &quot;code fluff,&quot;
                    &quot;bloat&quot; or whatever that looks or sounds good but
                    has ZERO contribution to your bottom line.
                  </p>
                  <p>Everything should serve your business profitably.</p>

                  <h3 className="h4 mb-4">
                    Checkout some of my latest projects
                  </h3>

                  <Row className="mt-5 past-projects">
                    <Col className="d-flex justify-content-center">
                      <Row>
                        {projects.map((project) => (
                          <Col key={project.id} md={6} lg={4} className="mb-5">
                            <Link href={project.slug}>
                              <a className="image" href={project.slug}>
                                <img
                                  width="250"
                                  src={project.image}
                                  className="attachment-medium size-medium wp-post-image"
                                  alt=""
                                  loading="lazy"
                                />
                              </a>
                            </Link>
                            <Link href={project.slug}>
                              <a className="title" href={project.slug}>
                                {project.name}
                              </a>
                            </Link>
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col className="d-flex justify-content-center">
                      <Link href="/projects">
                        <Button
                          role="link"
                          variant="danger"
                          className="text-white text-uppercase"
                        >
                          See All Projects
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={4} className="ps-lg-4 mt-5 mt-lg-0">
              <BenefitsWidget />
              <div className="skills mt-4">
                <AsideTitle>My Front-end Skills</AsideTitle>

                {frontend.map((skill) => (
                  <ProgressBar
                    key={skill.name}
                    variant="dark"
                    now={skill.value}
                    label={skill.name}
                  />
                ))}

                <AsideTitle className="mt-4"> My Back-end Skills</AsideTitle>
                {backend.map((skill) => (
                  <ProgressBar
                    key={skill.name}
                    variant="primary"
                    now={skill.value}
                    label={skill.name}
                  />
                ))}
              </div>

              <PostsListExpanded
                title="Popular Today"
                posts={popularArticles}
                className="my-4"
              />

              <PostsListWidget title="Latest Articles" posts={latestArticles} />
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}
