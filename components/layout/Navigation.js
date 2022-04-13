import classes from '@/styles/layout/navigation.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const Navigation = () => {
  //
  return (
    <Navbar
      className={classes.navbar}
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
    >
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>NextJS</Navbar.Brand>
        </Link>

        <div className="d-flex justify-content-center">
          <Button
            variant="link"
            className="position-relative me-4 d-flex d-md-none"
          >
            <Image
              src="/images/cart.png"
              width="35"
              height="35"
              alt="cart"
            />
            <strong className={classes.counter}>5</strong>
          </Button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link href="/" passHref>
              <Nav.Link>Homepage</Nav.Link>
            </Link>
            <Link href="/pizzas" passHref>
              <Nav.Link>Pizzas</Nav.Link>
            </Link>
            <Link href="/menu" passHref>
              <Nav.Link>Menu</Nav.Link>
            </Link>

            <Nav.Link disabled className="d-none d-lg-flex">
              |
            </Nav.Link>

            <Link href="/events" passHref>
              <Nav.Link>Events</Nav.Link>
            </Link>
            <Link href="/blog" passHref>
              <Nav.Link>Blog</Nav.Link>
            </Link>
            <Link href="/about" passHref>
              <Nav.Link>About</Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link>Contact</Nav.Link>
            </Link>
          </Nav>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          <Button
            variant="link"
            className="position-relative ms-5 d-none d-md-flex"
          >
            <Image
              src="/images/cart.png"
              width="35"
              height="35"
              alt="cart"
            />
            <strong className={classes.counter}>5</strong>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
