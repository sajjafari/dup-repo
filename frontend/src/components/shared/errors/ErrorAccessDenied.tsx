import React, { PropsWithChildren } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { Box } from "@mui/material";
=======
import Box from "@mui/material/Box";
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
=======
import { Box } from "@mui/material";
>>>>>>> 11a534e (OTAT-266 add Vite)
import LockPersonRoundedIcon from "@mui/icons-material/LockPersonRounded";
import Typography from "@mui/material/Typography";
import { Trans } from "react-i18next";
import { styles } from "../../../config/styles";

interface IErrorAccessDeniedProps {
  hasAccess: boolean;
}

const ErrorAccessDenied = (
  props: PropsWithChildren<IErrorAccessDeniedProps>
) => {
  const { hasAccess, children } = props;
  return hasAccess ? (
    <>{children}</>
  ) : (
    <Box textAlign="center" my={6} sx={{ ...styles.centerCVH, opacity: 0.9 }}>
      <LockPersonRoundedIcon fontSize="large" />
      <Typography variant="h4" textTransform={"uppercase"} sx={{ mt: 2 }}>
        <Trans i18nKey="accessDenied" />
      </Typography>
      <Typography variant="subLarge">
        <Trans i18nKey="youDontHaveCorrectPermissions" />
      </Typography>
    </Box>
  );
};

export default ErrorAccessDenied;
