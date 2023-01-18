import React from "react";
<<<<<<< HEAD
import { Box } from "@mui/material";
=======
import Box from "@mui/material/Box";
>>>>>>> 6640d72 (OTAT-154 Add profile page)
import { Trans } from "react-i18next";
import { styles } from "../../config/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InfoItem from "../shared/InfoItem";
<<<<<<< HEAD
import formatDate from "../../utils/formatDate";
import { t } from "i18next";
=======
>>>>>>> 6640d72 (OTAT-154 Add profile page)

interface IProfileSectionAuthorInfo {
  data: any;
}

const ProfileSectionGeneralInfo = (props: IProfileSectionAuthorInfo) => {
  const { data } = props;

  return (
<<<<<<< HEAD
    <Box my={4} sx={{ mx: { xs: 0, sm: 1, md: 2 } }}>
=======
    <Box my={4} mx={2}>
>>>>>>> 6640d72 (OTAT-154 Add profile page)
      <Typography variant="h6" sx={{ opacity: 0.8, fontSize: "1.1rem" }}>
        <Trans i18nKey="aboutProfile" />
      </Typography>
      <Box
        sx={{
<<<<<<< HEAD
          p: 1,
=======
          border: (t) => `1px dashed ${t.palette.primary.dark}`,
          p: 2,
>>>>>>> 6640d72 (OTAT-154 Add profile page)
          borderRadius: 2,
        }}
      >
        <Grid container spacing={1}>
<<<<<<< HEAD
          <Grid item xs={12} sm={7} md={5} lg={4}>
            {data.profileInfos.map((info: any) => {
              return (
                <InfoItem
                  info={{
                    ...info,
                    type: info.title === "Subjects" ? "array" : info.type,
                  }}
                />
              );
            })}
          </Grid>
          <Grid
            item
            sm={0}
            md={1}
            sx={{ display: { xs: "none", md: "block" } }}
          ></Grid>
          <Grid item xs={12} sm={5} md={4} lg={3}>
            {data?.last_update && (
              <InfoItem
                info={{
                  item: formatDate(data?.last_update),
                  title: t("lastUpdated"),
                }}
              />
            )}
=======
          <Grid item xs={3}>
            {data.profileInfos.primaryInfos.map((info: any) => {
              return <InfoItem info={info} />;
            })}
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}>
            {data.profileInfos.secondaryInfos.map((info: any) => {
              return <InfoItem info={info} />;
            })}
>>>>>>> 6640d72 (OTAT-154 Add profile page)
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
<<<<<<< HEAD
              fontFamily="Roboto"
              sx={{
                my: 0.5,
                background: "#f5f2f2",
                py: 1,
                px: 1,
                borderRadius: 1,
              }}
=======
              fontFamily="RobotoRegular"
              sx={{ my: 1 }}
>>>>>>> 6640d72 (OTAT-154 Add profile page)
            >
              {data.description}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProfileSectionGeneralInfo;
