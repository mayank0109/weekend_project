import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import theme, { baseFontSize } from "../components/utilities/theme";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import AuthenticationView from "../components/AuthenticationView";
import { getFromLocalStorage } from "../components/utils/storage";
import DashBoardView from "../components/DashBoardView";

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  background-position: top 0px right -16vw;
  background-size: cover;
  overflow: hidden;
`;

const Main = styled.div`
  width: 40.3vw;
  min-width: 580px;
  height: 100vh;
  min-height: 580px;
  position: relative;
  z-index: 1;
  &:before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 330vh;
    transform: skewX(-20deg);
    transform-origin: 100% 100% 0;
    backface-visibility: hidden;
    z-index: -1;
  }
`;
const Background = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  padding: 0 0 0 108px;
  box-sizing: border-box;
  width: 100%;
`;

const Index = () => {
  const token = getFromLocalStorage("authToken");

  const RequireAuth = ({ children }) => {
    const location = useLocation();

    return (
      <>
        {token ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { referrer: location } }}
          />
        )}
      </>
    );
  };
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          {!token && <Route path="/" >
            <AuthenticationView />
          </Route>}
          <Route path="/">
            <RequireAuth>
              <DashBoardView />
            </RequireAuth>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default Index;