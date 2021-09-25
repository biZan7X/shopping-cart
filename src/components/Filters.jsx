import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import styles from "./styles.css";

import Rating from "./Rating";

export default function Filters() {
  const [rating, setRating] = useState(3);
  return (
    <div className="filters">
      <div className="title-font">filters</div>
      <Form.Check label="Ascending" id="ascending" name="filter" type="radio" />
      <Form.Check
        label="Descending"
        id="descending"
        name="filter"
        type="radio"
      />
      <Form.Check label="Fast delivery" id="fastD" name="filter" />
      <Form.Check label="Out of stock" id="stock" name="filter" />

      <span>
        Rating: <Rating rating={rating} onClick={setRating} />{" "}
      </span>

      <Button variant="light" style={{ marginTop: "30px" }}>
        Clear all filters
      </Button>
    </div>
  );
}
