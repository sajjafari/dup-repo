import React, { PropsWithChildren } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { Box } from "@mui/material";
=======
import Box from "@mui/material/Box";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
import { Box } from "@mui/material";
>>>>>>> 11a534e (OTAT-266 add Vite)

interface ISpaceLayoutProps {
  title?: JSX.Element;
}

const SpaceLayout = (props: PropsWithChildren<ISpaceLayoutProps>) => {
  const { title, children } = props;

  return (
    <Box display="flex" flexDirection="column" m="auto">
      <Box>{title}</Box>
      <Box>{children}</Box>
    </Box>
  );
};

export { SpaceLayout };
