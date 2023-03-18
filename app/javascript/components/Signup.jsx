import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';

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

const Signup = () => {
  const searchParams = new URLSearchParams(window.location.search);

  const history = useHistory();

  const [formData, setFormData] = useState({
    email: searchParams.get("email"),
    referred_by_id: searchParams.get("referred_by_id")
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFormChange = (key, value) => {
    formData[key] = value;
    setFormData({ ...formData });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticationApi.signup(formData).
      then(_ => {
        history.push("/login");
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
          value={formData["email"]}
          onChange={(e) => handleFormChange("email", e.target.value)}
          disabled={isLoading}
          required
        />
        <TextField
          label="First Name"
          fullWidth
          type="text"
          value={formData["first_name"]}
          onChange={(e) => handleFormChange("first_name", e.target.value)}
          disabled={isLoading}
          required
        />
        <TextField
          label="Last Name"
          fullWidth
          type="text"
          value={formData["last_name"]}
          onChange={(e) => handleFormChange("last_name", e.target.value)}
          disabled={isLoading}
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={formData["password"]}
          onChange={(e) => handleFormChange("password", e.target.value)}
          disabled={isLoading}
          required
        />
        <TextField
          label="Confirm Password"
          type="password"
          fullWidth
          value={formData["password_confirmation"]}
          onChange={(e) => handleFormChange("password_confirmation", e.target.value)}
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

export default Signup;