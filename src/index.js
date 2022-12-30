import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { wealthManagementStore } from "./store/store";
import { ThemeProvider } from "styled-components";

import { theme } from "./theme/theme";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { GlobalCSS } from "./components/GlobalStyle/GlobalCSS";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={wealthManagementStore}>
      <ThemeProvider theme={theme}>
        <GlobalCSS />
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
