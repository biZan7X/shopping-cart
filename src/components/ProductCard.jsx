import React from "react";
import { Card, Button } from "react-bootstrap";

import Rating from "./Rating";

export default function ProductCard({ prod }) {
  return (
    <Card style={{ width: "30%", margin: "10px" }}>
      <Card.Img variant="top" src={prod.image} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Subtitle style={{ paddingBottom: "10px" }}>
          <span>rs {prod.price.split(".")[0]}</span>
          {prod.fastDelivery ? (
            <div>fast delivery</div>
          ) : (
            <div> delivery in 5 days</div>
          )}
          <span>
            Rating: <Rating rating={prod.ratings} />{" "}
          </span>
        </Card.Subtitle>

        <Button variant="primary" disabled={!prod.inStock}>
          {prod.inStock ? "Add to cart" : "Out of stock"}
        </Button>
        <Button variant="danger">remove from cart</Button>
      </Card.Body>
    </Card>
  );
}
