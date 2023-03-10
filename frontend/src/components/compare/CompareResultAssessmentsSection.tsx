import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { Box } from "@mui/material";
=======
import Box from "@mui/material/Box";
>>>>>>> 0cf45a9 (OTAT-212 Fix bugs and add edit button to compare result page)
=======
import { Box } from "@mui/material";
>>>>>>> 11a534e (OTAT-266 add Vite)
import Grid from "@mui/material/Grid";
import { styles } from "../../config/styles";
import { ICompareResultBaseInfo } from "../../types";
import { Gauge } from "../shared/charts/Gauge";
import Title from "../shared/Title";
import { calcGridSizeBasedOnTheLengthOfAssessments } from "./utils";

const CompareResultAssessmentsSection = (props: {
  data: ICompareResultBaseInfo[];
}) => {
  const { data } = props;

  return (
    <Box>
      <Grid container spacing={2}>
        {data.map((item) => {
          return (
            <Grid
              item
              xs={calcGridSizeBasedOnTheLengthOfAssessments(data.length)}
              sx={{
                ...styles.compareResultBorder,
              }}
            >
              <Box
                sx={{
                  p: { xs: 0.5, sm: 1, md: 2 },
                  ...styles.centerCH,
                }}
              >
                <Title>{item.title}</Title>
                <Box
                  sx={{
                    ...styles.centerV,
                    mt: 2,
                    justifyContent: { xs: "center", lg: "flex-end" },
                  }}
                >
                  <Gauge systemStatus={item.status} maxWidth="250px" m="auto" />
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  sx={{ flexDirection: { xs: "column-reverse", lg: "row" } }}
                ></Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CompareResultAssessmentsSection;
