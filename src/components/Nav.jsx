import React from "react";
import {
  Navbar,
  Container,
  Dropdown,
  FormControl,
  Badge,
} from "react-bootstrap";
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

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Cart
            <Badge>10</Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Cart is empty!</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}
