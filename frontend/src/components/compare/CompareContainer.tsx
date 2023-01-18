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
import { CompareProvider } from "../../providers/CompareProvider";
=======
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)

const CompareContainer = () => {
  return (
    <Box>
      <Title borderBottom={true}>
        <CompareRoundedIcon sx={{ mr: 1 }} />
        <Trans i18nKey="compare" />
      </Title>
      <Box mt={3}>
<<<<<<< HEAD
        <CompareProvider>
          <CompareParts />
        </CompareProvider>
=======
        <CompareParts />
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
      </Box>
    </Box>
  );
};

export default CompareContainer;
