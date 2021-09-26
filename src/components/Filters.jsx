import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

import styles from "./styles.css";

import {
  setSortOrder,
  setDelivery,
  setStock,
  setRating,
  clearFilter,
} from "../actions";

import Rating from "./Rating";
import { connect } from "react-redux";

function Filters({
  filter,
  setSortOrder,
  setDelivery,
  setStock,
  setRating,
  clearFilter,
}) {
  return (
    <div className="filters">
      <div className="title-font">filters</div>
      <Form.Check
        label="Ascending"
        id="ascending"
        name="filter"
        type="radio"
        onClick={() => setSortOrder("lowToHigh")}
        checked={filter.order === "lowToHigh"}
      />
      <Form.Check
        label="Descending"
        id="descending"
        name="filter"
        type="radio"
        onClick={() => setSortOrder("highToLow")}
        checked={filter.order === "highToLow"}
      />
      <Form.Check
        label="Fast delivery"
        id="fastD"
        name="filter"
        onClick={setDelivery}
        checked={filter.delivery}
      />
      <Form.Check
        label="Out of stock"
        id="stock"
        name="filter"
        onClick={setStock}
        checked={filter.stock}
      />

      <span>
        Rating: <Rating rating={filter.rating} onClick={setRating} />{" "}
      </span>

      <Button
        variant="light"
        style={{ marginTop: "30px", width: "100%" }}
        onClick={clearFilter}
      >
        Clear all filters
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { filter: state.filter };
};

export default connect(mapStateToProps, {
  setSortOrder,
  setDelivery,
  setStock,
  setRating,
  clearFilter,
})(Filters);
