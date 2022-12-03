import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/DropdownItem';

export default function SiteNav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const threshold = 150;
    let prevTop = 0;
    let prevHidden = false;
    let currentHidden = false;
    let prevScrolled = false;

    const listener = () => {
      const currentScrollTop =
        (window.pageYOffset || document.documentElement.scrollTop) -
        (document.documentElement.clientTop || 0);

      if (currentScrollTop > prevTop + threshold) {
        currentHidden = true;
        prevTop = currentScrollTop;

        const toggler: HTMLButtonElement | null = document.querySelector(
          '.site-navigation .navbar-toggler'
        );
        if (toggler && !toggler.getAttribute('class')?.includes('collapsed')) {
          toggler.click();
        }
      }

      if (prevTop - currentScrollTop > threshold) {
        currentHidden = false;
        prevTop = currentScrollTop;
      }

      if (currentHidden !== prevHidden) {
        setHidden(currentHidden);
        prevHidden = currentHidden;
      }

      if (currentScrollTop < threshold && prevScrolled) {
        prevScrolled = false;
        setScrolled(prevScrolled);
      } else if (currentScrollTop > threshold && !prevScrolled) {
        prevScrolled = true;
        setScrolled(prevScrolled);
      }
    };

    window.addEventListener('scroll', listener);

    return () => window.removeEventListener('scroll', listener);
  }, []);

  return (
    <Navbar
      expand="lg"
      variant="light"
      fixed="top"
      className={`site-navigation mb-5 pb-2 ${
        hidden ? 'site-navigation-hidden' : ''
      }  ${scrolled || opened ? 'site-navigation-opened' : ''}`}
    >
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <a href="/" className="d-flex align-items-center">
              <img
                src="/images/logo.png"
                alt="DevInception"
                style={{ width: '25px' }}
              />
              <span>DevInception</span>
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="site-nav"
          onClick={() => setOpened(!opened)}
        />
        <Navbar.Collapse id="site-nav">
          <Nav className="ms-auto">
            <Link href="/">
              <Nav.Link href="/">Home</Nav.Link>
            </Link>

            <NavDropdown
              id="about-dropdown"
              title="About"
              autoClose="outside"
              renderMenuOnMount
            >
              <Link href="/about">
                <DropdownItem href="/about">Sashe Vuchkov</DropdownItem>
              </Link>
              <DropdownItem href="#">Hire me</DropdownItem>
            </NavDropdown>

            <Link href="/projects">
              <Nav.Link href="/projects">Projects</Nav.Link>
            </Link>
            <Link href="/blog">
              <Nav.Link href="/blog">Blog</Nav.Link>
            </Link>
            <Link href="/contacts">
              <Nav.Link href="/contacts">Contacts</Nav.Link>
            </Link>
          </Nav>
          <Button className="d-none d-lg-block btn-subscribe ml-2 text-white text-uppercase fw-bold">
            Call Me
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
