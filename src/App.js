import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import GlobalStyle from "./globalStyle";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    );
  }
}
