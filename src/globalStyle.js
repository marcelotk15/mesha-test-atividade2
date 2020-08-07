import { createGlobalStyle } from "styled-components";

import "antd/dist/antd.css";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #app {
    height: 100%;
    font: 14px 'Recursive', sans-serif;
  }
`;
