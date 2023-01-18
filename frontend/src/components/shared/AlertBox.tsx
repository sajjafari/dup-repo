import React from "react";
import Alert, { AlertProps } from "@mui/material/Alert";
<<<<<<< HEAD
import { Box } from "@mui/material";
=======
import Box from "@mui/material/Box";
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
import useScreenResize from "../../utils/useScreenResize";

interface IAlertBox extends AlertProps {}

const AlertBox = (props: IAlertBox) => {
  const { children, action, ...rest } = props;
  const isSmall = useScreenResize("md");

  return (
    <Alert
      {...rest}
      action={!isSmall ? action : undefined}
      sx={
<<<<<<< HEAD
<<<<<<< HEAD
        isSmall && action
=======
        isSmall
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
=======
        isSmall && action
>>>>>>> 0cf45a9 (OTAT-212 Fix bugs and add edit button to compare result page)
          ? { ...(rest.sx || {}), "& .MuiAlert-message": { width: "100%" } }
          : rest.sx
      }
    >
      <Box sx={isSmall ? { flexDirection: "column", width: "100%" } : {}}>
        {children}
<<<<<<< HEAD
<<<<<<< HEAD
        {isSmall && action ? (
=======
        {isSmall ? (
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
=======
        {isSmall && action ? (
>>>>>>> 0cf45a9 (OTAT-212 Fix bugs and add edit button to compare result page)
          <Box
            sx={{
              pt: { xs: 1.5, md: 0.5 },
              pl: 2,
              ml: "auto",
              mr: { xs: 0, md: -1 },
              alignItems: { xs: "flex-end", md: "flex-start" },
              justifyContent: "flex-end",
              display: "flex",
            }}
          >
            {action}
          </Box>
        ) : null}
      </Box>
    </Alert>
  );
};

export default AlertBox;
