import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { Box } from "@mui/material";
=======
import Box from "@mui/material/Box";
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
import { Box } from "@mui/material";
>>>>>>> 11a534e (OTAT-266 add Vite)
import { Trans } from "react-i18next";
import Button from "@mui/material/Button";
import { styles } from "../../config/styles";
import Typography from "@mui/material/Typography";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";

interface IProfileSectionAuthorInfo {
  data: any;
}

const ProfileSectionAuthorInfo = (props: IProfileSectionAuthorInfo) => {
  const { data } = props;
  return (
    <Box my={3} mx={1.5}>
      <Typography variant="h6" sx={{ opacity: 0.8, fontSize: "1.1rem" }}>
        <Trans i18nKey="aboutAuthor" />
      </Typography>
      <Box
        sx={{
          border: (t) => `1px dashed ${t.palette.warning.dark}`,
          borderRadius: 2,
          p: 1.5,
        }}
      >
        <Box sx={{ ...styles.centerV }}>
          <Box display="flex" fontSize={"4rem"} sx={{ opacity: 0.4 }}>
            <AccountBoxRoundedIcon fontSize="inherit" />
          </Box>
          <Box py={1} ml={1}>
<<<<<<< HEAD
<<<<<<< HEAD
            <Typography fontFamily="Roboto" fontWeight={"bold"}>
=======
            <Typography fontFamily="RobotoBold">
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
            <Typography fontFamily="Roboto" fontWeight={"bold"}>
>>>>>>> 11a534e (OTAT-266 add Vite)
              {data.profileInfos.authorInfos.name}
            </Typography>
            <Box sx={{ ...styles.centerV }}>
              <Typography variant="subSmall" sx={{ mr: 1.5 }}>
                2.4 likes
              </Typography>
              <Typography variant="subSmall">60 score</Typography>
            </Box>
          </Box>
        </Box>
        <Box py={1} px={1.5} display="flex">
          {data.profileInfos.authorInfos.description}
        </Box>
        <Box display="flex">
          <Button sx={{ ml: "auto" }} size="small">
            <Trans i18nKey={"viewOtherProfilesFromThisAuthor"} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileSectionAuthorInfo;
