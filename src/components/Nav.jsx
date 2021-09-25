import React from "react";
import { Navbar, Container, NavDropdown, FormControl } from "react-bootstrap";
export default function Nav() {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand href="#home">
          <a>Shopify</a>
        </Navbar.Brand>

        <Navbar.Text className="m-auto" style={{ width: 500 }}>
          <FormControl type="text" />
        </Navbar.Text>

        <NavDropdown title="Cart" id="basic-nav-dropdown">
          <NavDropdown.Item href="#">Empty</NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  );
}
