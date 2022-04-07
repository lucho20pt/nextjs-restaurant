import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>NextJS</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link href="/" passHref>
              <Nav.Link>Homepage</Nav.Link>
            </Link>
            <Link href="/products" passHref>
              <Nav.Link>Products</Nav.Link>
            </Link>
            <Link href="/menu" passHref>
              <Nav.Link>Menu</Nav.Link>
            </Link>

            <Nav.Link disabled className='d-none d-lg-flex'>|</Nav.Link>

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

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <Link href="#action/3.1" passHref>
                <NavDropdown.Item>Action</NavDropdown.Item>
              </Link>
              <Link href="#action/3.2" passHref>
                <NavDropdown.Item>Action</NavDropdown.Item>
              </Link>
              <Link href="#action/3.3" passHref>
                <NavDropdown.Item>Action</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link href="#action/3.4" passHref>
                <NavDropdown.Item>Action</NavDropdown.Item>
              </Link>
            </NavDropdown> */}
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
