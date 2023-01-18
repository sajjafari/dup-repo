import React from "react";
<<<<<<< HEAD
import { Box } from "@mui/material";
=======
import Box from "@mui/material/Box";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
import { Trans } from "react-i18next";
import Title from "../shared/Title";
import CompareParts from "./CompareParts";
import CompareRoundedIcon from "@mui/icons-material/CompareRounded";
<<<<<<< HEAD
<<<<<<< HEAD
import { CompareProvider } from "../../providers/CompareProvider";
=======
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
import { CompareProvider } from "../../providers/CompareProvider";
>>>>>>> 671bfb7 (OTAT-212 Add compare page)

const CompareContainer = () => {
  return (
    <Box>
      <Title borderBottom={true}>
        <CompareRoundedIcon sx={{ mr: 1 }} />
        <Trans i18nKey="compare" />
      </Title>
      <Box mt={3}>
<<<<<<< HEAD
<<<<<<< HEAD
        <CompareProvider>
          <CompareParts />
        </CompareProvider>
=======
        <CompareParts />
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
        <CompareProvider>
          <CompareParts />
        </CompareProvider>
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
      </Box>
    </Box>
  );
};

export default CompareContainer;
