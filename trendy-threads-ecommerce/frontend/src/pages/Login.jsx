import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { CircularProgress, TextField, Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);

  const navigate = useNavigate();
  const loginSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      setloading(true);
      console.log({ email, password });
      const response = await axios.post(
        import.meta.env.VITE_SERVER_URL + "/api/v1/auth/login",
        { email, password }
      );
      console.log(response.data);

      if (response.data.status) {
        navigate("/home");
        setloading(false);
      }
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1 className="mb-4">Sign In</h1>

          <Form onSubmit={loginSubmitHandler}>
            <TextField
              variant="outlined"
              type="email"
              placeholder="abc@gmail.com"
              className="mb-4"
              required
              fullWidth
              id="email"
              name="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              type="password"
              placeholder="******"
              className="mb-2"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              autoComplete="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button
              type="submit"
              variant="outlined"
              className="mb-1"
              color="primary"
              fullWidth
              disabled={loading}
            >
              {loading ? <CircularProgress color="inherit" /> : <>Sign In</>}
            </Button>
          </Form>
          <Row>
            <Col>
              New Consumer?
              <Link to={"/signup"}>Register</Link>
            </Col>
            <Col className="text-right">Forgot Password</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
