import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "./TextField/TextField";
import styled from "styled-components";


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
    login(phone, password)
      .then(() => {
        redirectToAuthenticatedArea();
        api.getNamed("log_user_info", {
          headers: {
            windowsize: window.innerWidth + "x" + window.innerHeight,
            screenresolution: window.screen.availWidth + "x" + window.screen.availHeight
          }});
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };

  return(
    <>
    <Title>Login</Title>
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
      {/* <Link to="/auth/signup">{t("labels.redeem_an_invitation_code")}</Link> */}
    </Box>
  </>
  )
}

export default Login;