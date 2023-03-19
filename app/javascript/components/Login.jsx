import React, { useState } from "react";
import {Box, Button} from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import styled from "styled-components";
import { Link } from "react-router-dom";

import TextField from "./TextField";
import { setToLocalStorage } from "./utilities/storage";
import authenticationApi from "./apis/authentication";


const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  line-height: 42px;
  margin-bottom: 13px;
  text-transform: uppercase;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    authenticationApi.login({ email, password }).
      then(({ data }) => {
        setIsLoading(false);
        setToLocalStorage("authToken", data.auth_token);
        setToLocalStorage("authEmail", email);
        window.location.href = "/feed";
      }).
      catch(({ response: { data: { error } } }) => {setError(error); setIsLoading(false);});
  };

  return (
    <>
      <Title>Login</Title>
      {error !== "" && (
        <Box mb={3}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          fullWidth
          type="email"
          value={email}
          onChange={handleEmailChange}
          disabled={isLoading}
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={handlePasswordChange}
          disabled={isLoading}
          required
        />
        <Box mt={1} mb={2} align="right">
        </Box>
        <Box align="center">
          <Button
            color="secondary"
            size="large"
            type="submit"
            disabled={isLoading}
          >
            Submit
          </Button>
        </Box>
      </form>
      <Box mt={3} align="center">
        Don't have an account? <Link to="/signup">Signup</Link>
      </Box>
    </>
  )
}

export default Login;