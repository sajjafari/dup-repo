<<<<<<< HEAD
<<<<<<< HEAD
import Routes from "./routes";
import "./config/i18n";
import useGetSignedInUserInfo from "./utils/useGetSignedInUserInfo";
import { styles } from "./config/styles";
import { Box } from "@mui/material";
import ErrorDataLoading from "./components/shared/errors/ErrorDataLoading";
=======
import React from "react";
=======
>>>>>>> 11a534e (OTAT-266 add Vite)
import Routes from "./routes";
import "./config/i18n";
import useGetSignedInUserInfo from "./utils/useGetSignedInUserInfo";
import { styles } from "./config/styles";
<<<<<<< HEAD
<<<<<<< HEAD
import DataLoadingError from "./components/shared/errors/DataLoadingError";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
=======
import { Box } from "@mui/material";
>>>>>>> 11a534e (OTAT-266 add Vite)
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
<<<<<<< HEAD
        <Box width="100%" sx={{ mt: 10, ...styles.centerVH }}>
=======
        <Box width="100%" sx={{ minHeight: "100vh", ...styles.centerVH }}>
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
        <Box width="100%" sx={{ mt: 10, ...styles.centerVH }}>
>>>>>>> c865200 (OTAT-212 Add compare result page)
          <GettingThingsReadyLoading color="gray" />
        </Box>
      ) : (
        <Routes />
      )}
    </ErrorBoundary>
  );
}

export default App;
