import React, { useState } from "react";
import Alert from '@material-ui/lab/Alert';
import { setToLocalStorage } from "./utils/storage";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "./TextField/TextField";
import styled from "styled-components";
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
    authenticationApi.login({ email, password }).
      then(({ data }) => {
        setToLocalStorage("authToken", data.auth_token);
        setToLocalStorage("authEmail", email);
        window.location.href = "/feed";
      }).
      catch(({ response: { data: { error } } }) => setError(error));
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
      </Box>
    </>
  )
}

export default Login;