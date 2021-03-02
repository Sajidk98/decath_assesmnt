import React from "react";
import Layout from "../components/Layout";
import MyCart from "../containers/MyCart";

const CartPage = () => {
  return (
    <Layout title="My Cart">
      <MyCart />
    </Layout>
  );
};
export default CartPage;
