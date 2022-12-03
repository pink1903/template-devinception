import React from 'react';
import { ListGroup } from 'react-bootstrap';
import NextLink from 'next/link';
import Ad from '@/components/section/blurps/Ad';

export type Link = {
  id: number;
  headline: string;
  desc: string;
  href: string;
};

export type SupportData = {
  headline: string;
  desc: string;
  links: Link[];
};

export default function Support() {
  const links: Link[] = [
    {
      id: 1,
      headline: 'Checkout my pricing',
      desc: 'Only price ranges are disclosed because every project is unique',
      href: '#',
    },
    {
      id: 2,
      headline: 'See my work process',
      desc: 'Our journey together is planned well for best results',
      href: '#',
    },
    {
      id: 3,
      headline: 'Read some of my articles',
      desc: 'I write on topics like how to build profitable websites',
      href: '#',
    },
    {
      id: 4,
      headline: 'Book me for a consultation',
      desc: "Don't sure where to start with your project? Let's do a free consultation...",
      href: '#',
    },
  ];

  const data: SupportData = {
    headline: 'How Can I Help?',
    desc: "Please select a topic below related to your inquiry. If you don't find what you need, fill out the contact form and then send it.",
    links,
  };

  const { headline, desc } = data;

  return (
    <>
      <div>
        <h2 className="h2">{headline}</h2>
        <p>{desc}</p>
        <ListGroup className="support">
          {links.map((link: Link) => (
            <NextLink key={link.id} href={link.href}>
              <ListGroup.Item className="d-flex justify-content-between align-items-center pointer">
                <div>
                  <h5 className="mb-1">{link.headline}</h5>
                  <p className="m-0">{link.desc}</p>
                </div>
                <span className="ms-2 ti-angle-right" />
              </ListGroup.Item>
            </NextLink>
          ))}
        </ListGroup>
      </div>
      <Ad />
    </>
  );
}
