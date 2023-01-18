import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { Box } from "@mui/material";
=======
import Box from "@mui/material/Box";
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
=======
import { Box } from "@mui/material";
>>>>>>> 11a534e (OTAT-266 add Vite)
import PageNotFoundImage from "../../../assets/svg/404.svg";
import { styles } from "../../../config/styles";

const ErrorNotFoundPage = () => {
  return (
    <Box
      sx={{ ...styles.centerCVH }}
      textAlign="center"
      height="calc(100vh - 264px)"
    >
      <Box sx={{ width: { xs: "100vw", sm: "80vw", md: "60vw", lg: "50vw" } }}>
        <img src={PageNotFoundImage} alt={"page not found"} width="100%" />
      </Box>
    </Box>
  );
};

export default ErrorNotFoundPage;
