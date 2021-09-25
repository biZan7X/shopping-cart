import React, { useEffect } from "react";
import { connect } from "react-redux";

import styles from "./styles.css";

import Filters from "../components/Filters";
import Products from "../components/Products";

function Home({ products }) {
  return (
    <div className="home">
      <Filters />
      <Products products={products} />
    </div>
  );
}

const mapStateToProps = ({ products }) => {
  return { products: products };
};

export default connect(mapStateToProps)(Home);
