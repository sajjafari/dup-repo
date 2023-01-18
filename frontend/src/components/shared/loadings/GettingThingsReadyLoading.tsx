import React from "react";
<<<<<<< HEAD
import { Box, BoxProps } from "@mui/material";
=======
import Box, { BoxProps } from "@mui/material/Box";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import { Trans } from "react-i18next";

interface IGettingThingsReadyLoadingProps extends BoxProps {}

const GettingThingsReadyLoading = (props: IGettingThingsReadyLoadingProps) => {
  const { ...rest } = props;
  return (
    <Box
<<<<<<< HEAD
<<<<<<< HEAD
      color="gray"
=======
      color="white"
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
      color="gray"
>>>>>>> c865200 (OTAT-212 Add compare result page)
      {...rest}
      sx={{
        width: "100%",
        minWidth: { xs: "120px", sm: "360px" },
        maxWidth: "400px",
        px: { xs: 0.5, sm: 2 },
        ...(rest.sx || {}),
      }}
    >
      <Typography variant="h5">
        <Trans i18nKey="gettingThingsReady" />
      </Typography>
      <LinearProgress color="inherit" sx={{ marginTop: "12px" }} />
    </Box>
  );
};

export default GettingThingsReadyLoading;
