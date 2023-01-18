<<<<<<< HEAD
import Routes from "./routes";
import "./config/i18n";
import useGetSignedInUserInfo from "./utils/useGetSignedInUserInfo";
import { styles } from "./config/styles";
import { Box } from "@mui/material";
import ErrorDataLoading from "./components/shared/errors/ErrorDataLoading";
=======
import React from "react";
import Routes from "./routes";
import "./config/i18n";
import useGetSignedInUserInfo from "./utils/useGetSignedInUserInfo";
import Box from "@mui/material/Box";
import { styles } from "./config/styles";
<<<<<<< HEAD
import DataLoadingError from "./components/shared/errors/DataLoadingError";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
import ErrorDataLoading from "./components/shared/errors/ErrorDataLoading";
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
import GettingThingsReadyLoading from "./components/shared/loadings/GettingThingsReadyLoading";
import ErrorBoundary from "./components/shared/errors/ErrorBoundry";

function App() {
  const { error, loading } = useGetSignedInUserInfo();

  return error ? (
    <Box sx={{ ...styles.centerVH }} height="100vh">
<<<<<<< HEAD
<<<<<<< HEAD
      <ErrorDataLoading />
=======
      <DataLoadingError />
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
      <ErrorDataLoading />
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
    </Box>
  ) : (
    <ErrorBoundary>
      {loading ? (
<<<<<<< HEAD
        <Box width="100%" sx={{ mt: 10, ...styles.centerVH }}>
=======
        <Box width="100%" sx={{ minHeight: "100vh", ...styles.centerVH }}>
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
          <GettingThingsReadyLoading color="gray" />
        </Box>
      ) : (
        <Routes />
      )}
    </ErrorBoundary>
  );
}

export default App;
