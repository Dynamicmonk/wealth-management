import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { wealthManagementStore } from "./store/store";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={wealthManagementStore}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
