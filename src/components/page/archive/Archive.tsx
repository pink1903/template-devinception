import React from 'react';
import Link from 'next/link';

import { Button, Col, Container, Pagination, Row } from 'react-bootstrap';
import Image from 'next/image';

import InnerPageHeader from '@/components/header/InnerPageHeader';
import Breadcrumb from '@/components/nav/Breadcrumb';
import Footer from '@/components/footer/Footer';
import BreadcrumbItem from '@/components/nav/Breadcrumb/BreadcrumbItem';
import BenefitsWidget from '@/components/section/sidebar/BenefitsWidget';
import PostsListWidget from '@/components/section/sidebar/PostsListWidget';
import SearchWidget from '@/components/section/sidebar/SearchWidget';
import SocialWidget from '@/components/section/sidebar/SocialWidget';

import { latestArticles, tags } from '@/resources/demo-data';
import TagsWidget from '@/components/section/sidebar/TagsWidget';

export default function Archive() {
  return (
    <>
      <InnerPageHeader headline="Blog">
        <Breadcrumb>
          <BreadcrumbItem href="/about">Blog</BreadcrumbItem>
        </Breadcrumb>
      </InnerPageHeader>
      <section className="my-lg-5 py-5">
        <Container>
          <Row>
            <Col lg={8} className="pe-lg-5 mt-5 mt-lg-0">
              <Row>
                {latestArticles.length > 0 &&
                  latestArticles.map((article) => (
                    <Col key={article.path} md={6} lg={12}>
                      <div className="archive-snippet d-block d-lg-flex mb-5">
                        <div className="me-lg-3 archive-snippet-featured-img-wrapper">
                          <Link href={article.path}>
                            <a href={article.path}>
                              <Image
                                src={article.image.src}
                                layout="responsive"
                                width={300}
                                height={200}
                                objectFit="cover"
                                className="pointer"
                              />
                            </a>
                          </Link>
                          <Link href={article.path}>
                            <Button
                              variant="secondary"
                              className="d-none d-lg-block mt-2 w-100"
                              href={article.path}
                            >
                              Read More
                            </Button>
                          </Link>
                        </div>
                        <div className="mt-4 mt-lg-0">
                          <header>
                            <Link href={article.path}>
                              <a href={article.path}>
                                <h2 className="h4 text-capitalize">
                                  {article.headline}
                                </h2>
                              </a>
                            </Link>
                            <small className="text-muted">
                              October 14, 2020 / {article.category} / by{' '}
                              {article.author}
                            </small>
                            <hr />
                          </header>
                          <p>{article.excerpt}</p>

                          <Button
                            variant="secondary"
                            className="d-block d-lg-none mt-2 w-100"
                            href={article.path}
                          >
                            Read More
                          </Button>
                        </div>
                      </div>
                    </Col>
                  ))}
              </Row>

              {latestArticles.length < 1 && (
                <p className="h5">Sorry, there are no blog posts...</p>
              )}

              <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </Col>
            <Col lg={4} className="d-none d-lg-block">
              <SearchWidget />
              <SocialWidget className="my-5" />
              <PostsListWidget
                title="Most Popular"
                posts={latestArticles.slice(2, 5)}
              />
              <BenefitsWidget className="my-5" />
              <TagsWidget tags={tags} />
            </Col>
          </Row>
          <Row />
        </Container>
      </section>

      <Footer />
    </>
  );
}
