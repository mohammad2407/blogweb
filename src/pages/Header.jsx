import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar bg="warning"  variant = "primary" expand="lg" style = {{boxShadow : "1px 2px 3px gray", display:"flex", flexDirection:"row", justifyContent:"space-around",alignItems:"center"}} >
      <Container fluid >
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0 justify-content-center"
            style={{ maxHeight: '100px', gap:"20px" }}
            navbarScroll
          >
        <Link to={`/addBlog`}> <Button variant="outline-dark">Add blog</Button> </Link> 
          <Dropdown>
      <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
        Profile
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >Login</Dropdown.Item>
        <Dropdown.Item >Sign Up</Dropdown.Item>
        <Dropdown.Item >Log Out</Dropdown.Item>
      </Dropdown.Menu>

    </Dropdown>
         <Button variant='outline-dark'>My blogs</Button>

          </Nav>
        
        

          <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-1"
              aria-label="Search"
            />
            <Button  variant="outline-success">Search</Button>
          </Form>

 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;