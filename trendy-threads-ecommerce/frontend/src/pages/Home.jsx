import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import Filter from "../components/Filter";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState([]);
  const [filters, setFilters] = useState({});

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

  const handleSort = (value) => {
    sort.includes(value)
      ? setSort(sort.filter((s) => s !== value))
      : setSort((prevState) => {
          return [...prevState, value];
        });
  };

  const handleFilters = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const fetchFilteredProducts = async () => {
    const { data } = await axios.get(
      import.meta.env.VITE_SERVER_URL + "/api/v1/product",
      {
        params: {
          ...filters,
        },
      }
    );
    setProducts(data.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    fetchFilteredProducts();
  }, [filters]);

  useEffect(() => {
    handleFilters("sort", sort.join(","));
  }, [sort]);
  return (
    <>
      {products.status === "success" ? (
        <>
          <div className="clearfix">
            <span className="float-start">
              <h1>Latest Products({products.results.length})</h1>
            </span>
            <span className="float-end">
              <Filter handleSort={handleSort} handleFilters={handleFilters} />
            </span>
          </div>
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
