import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { Box } from "@mui/material";
=======
import Box from "@mui/material/Box";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
import { Box } from "@mui/material";
>>>>>>> 11a534e (OTAT-266 add Vite)
import Skeleton from "@mui/material/Skeleton";
import { styles } from "../../../config/styles";

const LoadingSkeletonOfMetrics = () => {
  return (
    <Box py={3}>
      <Box
        sx={{ ...styles.centerV }}
        justifyContent={"space-between"}
        height="60px"
      >
        <Skeleton width="180px" height="100%" />
        <Box
          height="100%"
          alignItems={"center"}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <Skeleton width="110px" sx={{ mr: 1 }} height="80%" />
          <Skeleton width="80px" height="80%" />
        </Box>
      </Box>
      <Box>
        <Skeleton />
      </Box>
      <Box mt={3}>
        <Skeleton
          height="320px"
          variant="rectangular"
          sx={{ borderRadius: 2 }}
        />
      </Box>
    </Box>
  );
};

export default LoadingSkeletonOfMetrics;
