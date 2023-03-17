import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import theme, { baseFontSize } from "../components/utilities/theme";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import AuthenticationView from "../components/AuthenticationView";


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
  return  (
    <ThemeProvider theme={theme}>
              <Router>

      <Switch>
    <Route path="/auth" >
    <AuthenticationView />
    </Route>
    </Switch>
             </Router>

    {/* // <ThemeP
    rovider theme={theme}>

    // <Container className={classes.container}>
    //     <Main className={classes.main}>
    //       <Background className={classes.background}>
    //         <div className={classes.content}>
    //         <Router>
  
    //   <Routes>
    //   <Route path="/login" element={<Home />} />
    //   <Route path="/" element={<Home />} />
    //   </Routes>
  
    // </Router>
    //         </div>
    //       </Background>
    //     </Main>
    //   </Container>
    //   </ThemeProvider> */}
    </ThemeProvider>
  );
}

export default Index;