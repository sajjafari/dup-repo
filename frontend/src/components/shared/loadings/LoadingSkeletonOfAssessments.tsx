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
import Grid from "@mui/material/Grid";
import { LoadingSkeleton } from "./LoadingSkeleton";

const LoadingSkeletonOfAssessments = () => {
  return (
    <Box py={6} sx={{ px: { xs: 1, sm: 3 } }}>
      <Grid container spacing={4}>
        {[1, 2, 3, 4, 5, 6].map((item: any) => {
          return (
            <Grid item lg={3} md={4} sm={6} xs={12} key={item}>
              <LoadingSkeleton height="425px" />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export { LoadingSkeletonOfAssessments };
