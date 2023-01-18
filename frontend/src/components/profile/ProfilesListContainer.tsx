import { Box } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import React from "react";
import { styles } from "../../config/styles";
import { useServiceContext } from "../../providers/ServiceProvider";
import { useQuery } from "../../utils/useQuery";
import QueryData from "../shared/QueryData";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import { Link } from "react-router-dom";
import forLoopComponent from "../../utils/forLoopComponent";
import { LoadingSkeleton } from "../shared/loadings/LoadingSkeleton";
import Button from "@mui/material/Button";
import { Trans } from "react-i18next";
import ProfileCEFromDialog from "./ProfileCEFromDialog";
import useDialog from "../../utils/useDialog";
import { TQueryFunction } from "../../types";

const ProfilesListContainer = () => {
  const { service } = useServiceContext();
  const profilesQueryData = useQuery({
    service: (args, config) => service.fetchProfiles(args, config),
  });

  return (
    <Box>
      <Box display="flex" mb={1} position="relative">
        <CreateProfileButton onSubmitForm={profilesQueryData.query} />
      </Box>
      <QueryData
        {...profilesQueryData}
        renderLoading={() => (
          <>
            {forLoopComponent(5, (index) => (
              <LoadingSkeleton key={index} sx={{ height: "60px", mb: 1 }} />
            ))}
          </>
        )}
        render={(data) => {
          const { results = [] } = data;
          return (
            <>
              {results.map((profile: any) => {
                const { id, title, metric_categories, assessment_subjects } =
                  profile;
                const numberOfQuestionnaires = metric_categories?.length;
                const numberOfSubjects = assessment_subjects?.length;
                return (
                  <Box
                    sx={{
                      ...styles.centerV,
                      boxShadow: (t) => `0 5px 8px -8px ${t.palette.grey[400]}`,
                      borderRadius: 2,
                      p: 2,
                      backgroundColor: "#fbf8fb",
                      mb: 1,
                    }}
                  >
                    <Box
                      sx={{ ...styles.centerV, flex: 1 }}
                      alignSelf="stretch"
                    >
                      <Box
                        sx={{
                          ...styles.centerV,
                          textDecoration: "none",
                          color: (t) => t.palette.primary.dark,
                        }}
                        alignSelf="stretch"
                        component={Link}
                        to={`${id}`}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: {
                              xs: "1.05rem",
                              sm: "1.1rem",
                              md: "1.2rem",
                              fontFamily: "Roboto",
                            },
                            fontWeight: "bold",
                            textDecoration: "none",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            alignSelf: "stretch",
                          }}
                        >
                          {title}
                        </Typography>
                      </Box>
                      {/* <Box
                        ml="auto"
                        sx={{ ...styles.centerV, color: "#525252" }}
                        alignSelf="stretch"
                      >
                        <Box sx={{ ...styles.centerV }} mr={1.5}>
                          {numberOfQuestionnaires}{" "}
                          <QuizRoundedIcon fontSize="small" sx={{ ml: 0.3 }} />
                        </Box>
                        <Box sx={{ ...styles.centerV }}>
                          {numberOfSubjects}{" "}
                          <CategoryRoundedIcon
                            fontSize="small"
                            sx={{ ml: 0.3 }}
                          />
                        </Box>
                      </Box> */}
                    </Box>
                  </Box>
                );
              })}
            </>
          );
        }}
      />
    </Box>
  );
};

const CreateProfileButton = (props: { onSubmitForm: TQueryFunction }) => {
  const { onSubmitForm } = props;
  const dialogProps = useDialog();

  return (
    <>
      <Button
        variant="contained"
        size="small"
        sx={{
          ml: "auto",
          position: { xs: "static", sm: "absolute" },
          right: "-16px",
          top: "-64px",
        }}
        onClick={dialogProps.openDialog}
      >
        <Trans i18nKey="createProfile" />
      </Button>
      <ProfileCEFromDialog {...dialogProps} onSubmitForm={onSubmitForm} />
    </>
  );
};

export default ProfilesListContainer;
