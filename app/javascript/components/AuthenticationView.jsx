
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Login from "./Login";
import Signup from "./Signup";
import * as colors from "./utilities/colors";

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

const AuthenticationView = () => {
  const classes = useStyles();
  return (
    <ThemeProvider
      theme={(theme) =>
        createMuiTheme(theme, {
          overrides: {
            MuiInputBase: {
              input: {
                color: colors.white,
                "&:-webkit-autofill": {
                  WebkitTextFillColor: `${colors.white} !important`,
                  WebkitBoxShadow: `0 0 0 100px ${colors.slateGrey} inset !important`,
                },
              },
            },
            MuiInputLabel: {
              root: {
                color: colors.white,
              },
            },
          },
          palette: {
            type: "dark",
          },
          shape: {
            borderRadius: 4.2,
          },
        })
      }
    >
      <Container className={classes.container}>
        <Main className={classes.main}>
          <Background className={classes.background}>
            <div className={classes.content}>
              <Router>

                <Switch>
                   <Route path="/login" exact>
                    <Login />
                  </Route>
                  <Route path="/signup" exact>
                    <Signup />
                  </Route>
                  <Route path="/">
                    <Redirect to={{ pathname: "/login"} }/>
                  </Route>
                </Switch>
              </Router>
            </div>
          </Background>
        </Main>
      </Container>
    </ThemeProvider>

  )
}

export default AuthenticationView;
