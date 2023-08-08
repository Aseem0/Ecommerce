import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { CircularProgress, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState("");
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1 className="mb-4">Sign In</h1>
          <Form>
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
              type="Submit"
              variant="outlined"
              className="mb-1"
              fullWidth
              color="primary"
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
            <Col className="text-right">Forget Password</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
