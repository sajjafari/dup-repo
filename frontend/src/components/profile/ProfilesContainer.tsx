import React, { PropsWithChildren } from "react";
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
import Title from "../shared/Title";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import { styles } from "../../config/styles";
import { useParams } from "react-router-dom";
import ProfilesListContainer from "./ProfilesListContainer";
import ProfilesMarketContainer from "./ProfilesMarketContainer";

const ProfilesContainer = (props: PropsWithChildren<{}>) => {
  const [value, setValue] = React.useState("list");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Title>
<<<<<<< HEAD
<<<<<<< HEAD
        <Trans i18nKey="profiles" />
=======
        <Trans i18nKey="profile" />
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
        <Trans i18nKey="profiles" />
>>>>>>> 255e0ee (OTAT-258 Fix mobile navbar items)
      </Title>

      <Box mt={2}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              <Tab
                label={
                  <Box sx={{ ...styles.centerV }}>
                    <Trans i18nKey="profiles" />
                  </Box>
                }
                value="list"
              />
<<<<<<< HEAD
<<<<<<< HEAD
              {/* <Tab
=======
              <Tab
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
              {/* <Tab
>>>>>>> 443adbc (OTAT-253 Add delete profile)
                label={
                  <Box sx={{ ...styles.centerV }}>
                    <Trans i18nKey="market" />
                  </Box>
                }
                value="market"
<<<<<<< HEAD
<<<<<<< HEAD
              /> */}
=======
              />
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
              /> */}
>>>>>>> 443adbc (OTAT-253 Add delete profile)
            </TabList>
          </Box>
          <TabPanel value="list" sx={{ p: { xs: 1, sm: 3 } }}>
            <ProfilesListContainer />
          </TabPanel>
<<<<<<< HEAD
<<<<<<< HEAD
          {/* <TabPanel value="market" sx={{ p: { xs: 1, sm: 3 } }}>
            <ProfilesMarketContainer />
          </TabPanel> */}
=======
          <TabPanel value="market" sx={{ p: { xs: 1, sm: 3 } }}>
            <ProfilesMarketContainer />
          </TabPanel>
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
          {/* <TabPanel value="market" sx={{ p: { xs: 1, sm: 3 } }}>
            <ProfilesMarketContainer />
          </TabPanel> */}
>>>>>>> 443adbc (OTAT-253 Add delete profile)
        </TabContext>
      </Box>
    </Box>
  );
};

export default ProfilesContainer;
