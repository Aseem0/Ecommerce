import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { CircularProgress, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setloading] = useState(false);

  const registerSubmitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      warningTOast("Password and Confirm password must be same");
    }
    setloading(true);

    const response = await axios.post(
      import.meta.env.VITE_SERVER_URL + "/api/v1/auth/register",
      { name, email, password }
    );
  };
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1 className="mb-4">Sign Up</h1>

          <Form onSubmit={registerSubmitHandler}>
            <TextField
              variant="outlined"
              type="name"
              placeholder="Ram"
              className="mb-4"
              required
              fullWidth
              id="name"
              name="name"
              label=" Name"
              autoComplete="name"
              autoFocus
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              type="email"
              placeholder="abc@gmail.com"
              className="mb-4"
              required
              fullWidth
              id="email"
              name="email"
              label="Email"
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
              className="mb-4"
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
            <TextField
              variant="outlined"
              type="confirmPassword"
              placeholder="******"
              className="mb-4"
              required
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              autoComplete="confirmPassword"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <Button
              type="Submit"
              variant="outlined"
              className="mb-1"
              color="primary"
              fullWidth
              disabled={loading}
            >
              {loading ? <CircularProgress color="inherit" /> : <>Sign Up</>}
            </Button>
          </Form>
          <Row>
            <Col>
              New Consumer?
              <Link to={"/"}>Sign In</Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
