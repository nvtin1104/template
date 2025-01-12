// React core
import React from "react";
import { createRoot } from "react-dom/client";

// Tailwind stylesheet
import "./css/tailwind.scss";

// ZaUI stylesheet
import "zmp-ui/zaui.css";

import "./css/variables.scss";
import "./css/pages/index.scss";
import "./css/app.scss";
import "./css/layout.scss";

// Expose app configuration
import appConfig from "../app-config.json";
if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig;
}

// Mount the app
import App from "./layout/app";
const root = createRoot(document.getElementById("app"));
root.render(React.createElement(App));
