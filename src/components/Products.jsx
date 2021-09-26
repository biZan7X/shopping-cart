import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import ProductCard from "./ProductCard";

import { resetProducts, setProducts } from "../actions";

import styles from "./styles.css";

function Products({ products, filter }) {
  const { order, delivery, stock, rating } = filter;

  const transformProducts = () => {
    let filteredProducts = products;

    filteredProducts.sort((a, b) =>
      order === "lowToHigh" ? a.price - b.price : b.price - a.price
    );

    if (delivery)
      filteredProducts = filteredProducts.filter((prod) => prod.fastDelivery);

    if (stock)
      filteredProducts = filteredProducts.filter((prod) => prod.inStock);

    filteredProducts = filteredProducts.filter((prod) => prod.ratings > rating);

    return filteredProducts;
  };

  return (
    <div className="products">
      {transformProducts().map((prod) => (
        <ProductCard prod={prod} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { filter: state.filter, products: state.products };
};

export default connect(mapStateToProps)(Products);
