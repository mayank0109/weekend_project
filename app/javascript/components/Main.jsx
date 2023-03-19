import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from "react-router-dom";
import theme from "./utilities/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import AuthenticationView from "./AuthenticationView";
import { getFromLocalStorage } from "./utilities/storage";
import DashBoardView from "./DashBoardView";

const Main = () => {
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

export default Main;