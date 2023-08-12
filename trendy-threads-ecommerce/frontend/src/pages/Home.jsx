import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";

const Home = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        import.meta.env.VITE_SERVER_URL + "/api/v1/product"
      );
      console.log(data.data);
      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      {products.status === "success" ? (
        <>
          <Row>
            {products.results.map((products) => {
              return (
                <Col key={products._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={products} />
                </Col>
              );
            })}
          </Row>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
