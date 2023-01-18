import React, { PropsWithChildren } from "react";
<<<<<<< HEAD
import { Box } from "@mui/material";
import GettingThingsReadyLoading from "../components/shared/loadings/GettingThingsReadyLoading";
import Navbar from "../components/shared/Navbar";
import { styles } from "../config/styles";
=======
import Box from "@mui/material/Box";
import GettingThingsReadyLoading from "../components/shared/loadings/GettingThingsReadyLoading";
import Navbar from "../components/shared/Navbar";
<<<<<<< HEAD
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
import { styles } from "../config/styles";
>>>>>>> c865200 (OTAT-212 Add compare result page)

const AppLayout = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  return (
    <Box sx={{ overflowX: "hidden", minHeight: "100vh" }}>
      <Navbar />
      <Box
        sx={{
          p: { xs: 1, sm: 1, md: 4 },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c865200 (OTAT-212 Add compare result page)
          pt: {
            xs: "84px !important",
            sm: "112px !important",
            minHeight: "100%",
          },
<<<<<<< HEAD
=======
          pt: { xs: "84px !important", sm: "112px !important" },
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
>>>>>>> c865200 (OTAT-212 Add compare result page)
        }}
        maxWidth="1440px"
        m="auto"
      >
        <React.Suspense
          fallback={
<<<<<<< HEAD
<<<<<<< HEAD
            <Box sx={{ ...styles.centerVH }}>
              <GettingThingsReadyLoading color={"gray"} />
            </Box>
=======
            <GettingThingsReadyLoading
              color={"gray"}
              sx={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            />
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
            <Box sx={{ ...styles.centerVH }}>
              <GettingThingsReadyLoading color={"gray"} />
            </Box>
>>>>>>> c865200 (OTAT-212 Add compare result page)
          }
        >
          {children}
        </React.Suspense>
      </Box>
    </Box>
  );
};

export default AppLayout;
