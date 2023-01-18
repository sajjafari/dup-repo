import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { Box } from "@mui/material";
=======
import App from "./App";
>>>>>>> 11a534e (OTAT-266 add Vite)
=======
import { Box } from "@mui/material";
>>>>>>> 8b5713c (OTAT-154 Add responsive layout to profile and connected services)
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toastDefaultConfig } from "./utils/toast";
import { ServiceProvider } from "./providers/ServiceProvider";
import { ThemeProvider } from "@mui/material";
import { theme } from "./config/theme";
import { AppProvider } from "./providers/AppProvider";
import { AuthProvider } from "./providers/AuthProvider";
import CssBaseline from "@mui/material/CssBaseline";
import "react-toastify/dist/ReactToastify.css";
<<<<<<< HEAD
<<<<<<< HEAD
import App from "./App";
=======
>>>>>>> 11a534e (OTAT-266 add Vite)
=======
import App from "./App";
>>>>>>> 8b5713c (OTAT-154 Add responsive layout to profile and connected services)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Suspense fallback="loading...">
        <AppProvider>
          <AuthProvider>
            <ServiceProvider>
              <CssBaseline />
              <ToastContainer {...toastDefaultConfig} />
              <App />
            </ServiceProvider>
          </AuthProvider>
        </AppProvider>
      </Suspense>
    </BrowserRouter>
  </ThemeProvider>
);
