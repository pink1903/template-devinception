import InnerPageHeader from '@/components/header/InnerPageHeader';
import { Col, Container, Row } from 'react-bootstrap';
import ContactsForm from '@/components/form/ContactsForm';
import Support from '@/components/section/lists/Support';
import Footer from '@/components/footer/Footer';
import React from 'react';
import Breadcrumb from '@/components/nav/Breadcrumb';
import BreadcrumbItem from '@/components/nav/Breadcrumb/BreadcrumbItem';
import { latestArticlesContacts } from '@/resources/demo-data';
import SnippetCard from '@/components/section/snippets/SnippetCard';
import SectionTitle from '@/components/section/SectionTitle';

export default function Contacts() {
  return (
    <>
      <InnerPageHeader headline="Contact Me">
        <Breadcrumb>
          <BreadcrumbItem href="/contacts">Contacts</BreadcrumbItem>
        </Breadcrumb>
      </InnerPageHeader>
      <main className="flex-grow-1 my-lg-5 py-lg-5">
        <Container>
          <Row>
            <Col lg={6} className="order-1 order-lg-0 mt-5 mt-lg-0">
              <ContactsForm />
            </Col>
            <Col
              lg={6}
              className="order-0 order-lg-1 mb-5 mb-md-0 mt-5 mt-lg-0"
            >
              <Support />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col sm={12}>
              <SectionTitle>Latest Articles</SectionTitle>
            </Col>
            <Col sm={12} className="d-flex flex-wrap">
              <Row>
                {latestArticlesContacts.length > 0 &&
                  latestArticlesContacts.map((snippet) => (
                    <Col key={snippet.path} md={6} lg={3}>
                      <SnippetCard {...snippet} />
                    </Col>
                  ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
