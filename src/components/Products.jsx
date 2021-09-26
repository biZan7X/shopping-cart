import React, { useEffect } from "react";
import { connect } from "react-redux";

import ProductCard from "./ProductCard";

import styles from "./styles.css";

function Products({ products, filter }) {
  useEffect(() => {
    console.log(filter);
  }, [filter]);
  return (
    <div className="products">
      {products.map((prod) => (
        <ProductCard prod={prod} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { filter: state.filter, products: state.products };
};

export default connect(mapStateToProps)(Products);
