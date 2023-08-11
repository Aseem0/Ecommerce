import React, { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const getProducts = async () => {
    try {
      const product = await axios.get(
        import.meta.env.VITE_SERVER_URL + "/api/v1/product"
      );

      console.log(product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return <div>Home</div>;
};

export default Home;
