import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  rootElement
);
