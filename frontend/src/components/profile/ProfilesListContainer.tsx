<<<<<<< HEAD
<<<<<<< HEAD
import { Box } from "@mui/material";
<<<<<<< HEAD
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
<<<<<<< HEAD
=======
import Box from "@mui/material/Box";
=======
import { Box } from "@mui/material";
>>>>>>> 11a534e (OTAT-266 add Vite)
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import React from "react";
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
>>>>>>> 443adbc (OTAT-253 Add delete profile)
=======
>>>>>>> e7c00fc (OTAT-293 Add View expert group page)
import { styles } from "../../config/styles";
import { useServiceContext } from "../../providers/ServiceProvider";
import { useQuery } from "../../utils/useQuery";
import QueryData from "../shared/QueryData";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
=======
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
>>>>>>> 443adbc (OTAT-253 Add delete profile)
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import { Link } from "react-router-dom";
=======
>>>>>>> e7c00fc (OTAT-293 Add View expert group page)
import forLoopComponent from "../../utils/forLoopComponent";
import { LoadingSkeleton } from "../shared/loadings/LoadingSkeleton";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b8df8ab (OTAT-253 Add create profile dialog)
import Button from "@mui/material/Button";
import { Trans } from "react-i18next";
import ProfileCEFromDialog from "./ProfileCEFromDialog";
import useDialog from "../../utils/useDialog";
import { TQueryFunction } from "../../types";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 443adbc (OTAT-253 Add delete profile)
import toastError from "../../utils/toastError";
import { ICustomError } from "../../utils/CustomError";
import MoreActions from "../shared/MoreActions";
import useMenu from "../../utils/useMenu";
<<<<<<< HEAD
=======
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
>>>>>>> b8df8ab (OTAT-253 Add create profile dialog)
=======
>>>>>>> 443adbc (OTAT-253 Add delete profile)
=======
import ProfileListItem from "./ProfileListItem";
>>>>>>> e7c00fc (OTAT-293 Add View expert group page)

const ProfilesListContainer = () => {
  const { service } = useServiceContext();
  const profilesQueryData = useQuery({
    service: (args, config) => service.fetchProfiles(args, config),
  });

  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b8df8ab (OTAT-253 Add create profile dialog)
    <Box>
      <QueryData
        {...profilesQueryData}
        renderLoading={() => (
<<<<<<< HEAD
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
                return (
                  <ProfileListItem
                    key={profile?.id}
                    data={profile}
                    fetchProfiles={profilesQueryData.query}
                  />
                );
              })}
            </>
          );
        }}
      />
    </Box>
  );
};

<<<<<<< HEAD
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

<<<<<<< HEAD
const Actions = (props: any) => {
  const { profile, fetchSpaces, dialogProps, setUserInfo } = props;
  const { id } = profile;
  const { service } = useServiceContext();
  const [editLoading, setEditLoading] = useState(false);
  const {
    query: deleteProfile,
    loading,
    abortController,
  } = useQuery({
    service: (args, config) => service.deleteProfile({ id }, config),
    runOnMount: false,
  });

  // const openEditDialog = (e: any) => {
  //   setEditLoading(true);
  //   service
  //     .fetchSpace({ spaceId }, { signal: abortController.signal })
  //     .then(({ data }) => {
  //       setEditLoading(false);
  //       dialogProps.openDialog({ data, type: "update" });
  //     })
  //     .catch((e) => {
  //       const err = e as ICustomError;
  //       toastError(err);
  //       setEditLoading(false);
  //     });
  // };

  const deleteItem = async (e: any) => {
    try {
      await deleteProfile();
      await fetchSpaces();
      await setUserInfo();
    } catch (e) {
      const err = e as ICustomError;
      toastError(err);
    }
  };

  return (
    <MoreActions
      {...useMenu()}
      boxProps={{ ml: 0.2 }}
      loading={loading || editLoading}
      items={[
        // {
        //   icon: <EditRoundedIcon fontSize="small" />,
        //   text: <Trans i18nKey="edit" />,
        //   onClick: openEditDialog,
        // },
        // !isActiveSpace
        //   ? {
        //       icon: <DeleteRoundedIcon fontSize="small" />,
        //       text: <Trans i18nKey="delete" />,
        //       onClick: deleteItem,
        //     }
        //   : undefined,
        {
          icon: <DeleteRoundedIcon fontSize="small" />,
          text: <Trans i18nKey="delete" />,
          onClick: deleteItem,
        },
      ]}
=======
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
=======
>>>>>>> b8df8ab (OTAT-253 Add create profile dialog)
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

                      <Box
                        ml="auto"
                        sx={{ ...styles.centerV, color: "#525252" }}
                        alignSelf="stretch"
                      >
                        <Actions
                          profile={profile}
                          fetchSpaces={profilesQueryData.query}
                        />
                        {/* <Box sx={{ ...styles.centerV }} mr={1.5}>
                          {numberOfQuestionnaires}{" "}
                          <QuizRoundedIcon fontSize="small" sx={{ ml: 0.3 }} />
                        </Box>
                        <Box sx={{ ...styles.centerV }}>
                          {numberOfSubjects}{" "}
                          <CategoryRoundedIcon
                            fontSize="small"
                            sx={{ ml: 0.3 }}
                          />
                        </Box> */}
                      </Box>
                    </Box>
                  </Box>
<<<<<<< HEAD
                </Box>
              );
            })}
          </>
        );
      }}
>>>>>>> 6640d72 (OTAT-154 Add profile page)
    />
=======
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
>>>>>>> b8df8ab (OTAT-253 Add create profile dialog)
  );
};

const Actions = (props: any) => {
  const { profile, fetchSpaces, dialogProps, setUserInfo } = props;
  const { id } = profile;
  const { service } = useServiceContext();
  const [editLoading, setEditLoading] = useState(false);
  const {
    query: deleteProfile,
    loading,
    abortController,
  } = useQuery({
    service: (args, config) => service.deleteProfile({ id }, config),
    runOnMount: false,
  });

  // const openEditDialog = (e: any) => {
  //   setEditLoading(true);
  //   service
  //     .fetchSpace({ spaceId }, { signal: abortController.signal })
  //     .then(({ data }) => {
  //       setEditLoading(false);
  //       dialogProps.openDialog({ data, type: "update" });
  //     })
  //     .catch((e) => {
  //       const err = e as ICustomError;
  //       toastError(err);
  //       setEditLoading(false);
  //     });
  // };

  const deleteItem = async (e: any) => {
    try {
      await deleteProfile();
      await fetchSpaces();
      await setUserInfo();
    } catch (e) {
      const err = e as ICustomError;
      toastError(err);
    }
  };

  return (
    <MoreActions
      {...useMenu()}
      boxProps={{ ml: 0.2 }}
      loading={loading || editLoading}
      items={[
        // {
        //   icon: <EditRoundedIcon fontSize="small" />,
        //   text: <Trans i18nKey="edit" />,
        //   onClick: openEditDialog,
        // },
        // !isActiveSpace
        //   ? {
        //       icon: <DeleteRoundedIcon fontSize="small" />,
        //       text: <Trans i18nKey="delete" />,
        //       onClick: deleteItem,
        //     }
        //   : undefined,
        {
          icon: <DeleteRoundedIcon fontSize="small" />,
          text: <Trans i18nKey="delete" />,
          onClick: deleteItem,
        },
      ]}
    />
  );
};

=======
>>>>>>> e7c00fc (OTAT-293 Add View expert group page)
=======
>>>>>>> aa86b5d (OTAT-301 Moved create profile to expert group)
export default ProfilesListContainer;
