
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import * as colors from "./utilities/colors";
import FeedView from "./FeedView";
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.hero.main,
  },
  main: {
    "&:before": {
      backgroundColor: theme.palette.dark.main,
      boxShadow: theme.shadows[9],
    },
  },
  background: {
    backgroundColor: theme.palette.dark.main,
  },
  content: {
    color: theme.palette.dark.contrastText,
  },
}));

const Container = styled.div`

`;

const Main = styled.div`

`;
const Background = styled.div`

`;

const DashBoardView = () => {
  const classes = useStyles();

  return (


              <Router>
                <Switch>
                  <Route path="/feed" exact>
                    <FeedView />
                  </Route>
                  <Route path="/">
                    <Redirect
                      to={{ pathname: "/feed" }}
                    />
                  </Route >
                </Switch>
              </Router>


  )
}

export default DashBoardView;
