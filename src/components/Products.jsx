import React from "react";

import ProductCard from "./ProductCard";

import styles from "./styles.css";

export default function Products({ products }) {
  return (
    <div className="products">
      {products.map((prod) => (
        <ProductCard prod={prod} />
      ))}
    </div>
  );
}
