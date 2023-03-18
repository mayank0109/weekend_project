import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import { Link as RouterLink, Route } from "react-router-dom";
import styled from "styled-components";
import MuiTextField from "@material-ui/core/TextField";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { makeStyles } from "@material-ui/core/styles";
import theme, { baseFontSize } from "./utilities/theme";

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  line-height: 42px;
  margin-bottom: 13px;
  text-transform: uppercase;
`;

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


const Home = () => {
  return(

    <p>dsakjn</p>
  )
}

export default () => (
    <Home />
);