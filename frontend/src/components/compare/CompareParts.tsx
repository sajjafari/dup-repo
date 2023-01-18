<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import ComparePartItem from "./ComparePartItem";
import Button from "@mui/material/Button";
import { Trans } from "react-i18next";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useServiceContext } from "../../providers/ServiceProvider";
import { useQuery } from "../../utils/useQuery";
import QueryData from "../shared/QueryData";
import { LoadingSkeleton } from "../shared/loadings/LoadingSkeleton";
import {
  compareActions,
  useCompareContext,
  useCompareDispatch,
} from "../../providers/CompareProvider";
import AlertTitle from "@mui/material/AlertTitle";
import Chip from "@mui/material/Chip";
import { styles } from "../../config/styles";
import AlertBox from "../shared/AlertBox";
import PermissionControl from "../shared/PermissionControl";
import forLoopComponent from "../../utils/forLoopComponent";
import setDocumentTitle from "../../utils/setDocumentTitle";
import { t } from "i18next";

const CompareParts = () => {
  const { assessmentIds, assessmentsInfoQueryData } = useCompareParts();

  return (
    <Box sx={{ pb: { xs: 6, sm: 0 } }}>
      <PermissionControl error={assessmentsInfoQueryData.errorObject}>
        <Box my={3}>
          <CompareSelectedProfileInfo />
        </Box>
        <Box position={"relative"}>
          <QueryData
            {...assessmentsInfoQueryData}
            isDataEmpty={() => false}
            renderLoading={() => {
              return (
                <>
                  <CompareButton disabled={true} />
                  <Grid container spacing={3}>
                    {forLoopComponent(4, (index) => (
                      <Grid item xs={12} md={6} key={index}>
                        <LoadingSkeleton
                          height={
                            assessmentIds?.length === 0 ? "264px" : "290px"
                          }
                        />
                      </Grid>
                    ))}
                  </Grid>
                </>
              );
            }}
            render={(res = []) => {
              return (
                <>
                  <CompareButton
                    assessmentIds={assessmentIds as string[]}
                    disabled={assessmentIds?.length <= 1}
                  />
                  <Grid container spacing={3}>
                    {forLoopComponent(4, (index) => {
                      const data = res[index];
                      return (
                        <Grid item xs={12} md={6} key={index}>
                          <ComparePartItem
                            data={data}
                            index={index}
                            disabled={
                              assessmentIds.length >= index ? false : true
                            }
                            fetchAssessmentsInfo={
                              assessmentsInfoQueryData.query
                            }
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                </>
              );
            }}
          />
        </Box>
      </PermissionControl>
=======
import React from "react";
=======
import React, { useEffect } from "react";
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ComparePartItem from "./ComparePartItem";
import Button from "@mui/material/Button";
import { Trans } from "react-i18next";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useServiceContext } from "../../providers/ServiceProvider";
import { useQuery } from "../../utils/useQuery";
import QueryData from "../shared/QueryData";
import { LoadingSkeleton } from "../shared/loadings/LoadingSkeleton";
import {
  compareActions,
  useCompareContext,
  useCompareDispatch,
} from "../../providers/CompareProvider";
import AlertTitle from "@mui/material/AlertTitle";
import Chip from "@mui/material/Chip";
import { styles } from "../../config/styles";
import AlertBox from "../shared/AlertBox";
import PermissionControl from "../shared/PermissionControl";
import forLoopComponent from "../../utils/forLoopComponent";

const CompareParts = () => {
  const { assessmentIds, assessmentsInfoQueryData } = useCompareParts();

  return (
    <Box sx={{ pb: { xs: 6, sm: 0 } }}>
<<<<<<< HEAD
      <Box my={3}>
        <ProfileField />
      </Box>
      <Box position={"relative"}>
        <QueryData
          {...assessmentsInfoQueryData}
          isDataEmpty={() => false}
          renderLoading={() => {
            return (
              <>
                <CompareButton disabled={true} />
                <Grid container spacing={3}>
                  {[0, 1, 2, 3].map((index) => {
                    return (
                      <Grid item xs={12} md={6} key={index}>
                        <LoadingSkeleton
                          height={
                            assessmentIds?.length === 0 ? "264px" : "290px"
                          }
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </>
            );
          }}
          render={(res = []) => {
            return (
              <>
                <CompareButton
                  assessmentIds={assessmentIds as string[]}
                  disabled={assessmentIds?.length <= 1}
                />
                <Grid container spacing={3}>
                  {[0, 1, 2, 3].map((index) => {
                    const data = res[index];
                    return (
                      <Grid item xs={12} md={6} key={index}>
                        <ComparePartItem
                          data={data}
                          index={index}
                          disabled={
                            assessmentIds.length >= index ? false : true
                          }
                          fetchAssessmentsInfo={assessmentsInfoQueryData.query}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </>
            );
          }}
        />
      </Box>
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
      <PermissionControl error={assessmentsInfoQueryData.errorObject}>
        <Box my={3}>
          <CompareSelectedProfileInfo />
        </Box>
        <Box position={"relative"}>
          <QueryData
            {...assessmentsInfoQueryData}
            isDataEmpty={() => false}
            renderLoading={() => {
              return (
                <>
                  <CompareButton disabled={true} />
                  <Grid container spacing={3}>
                    {forLoopComponent(4, (index) => (
                      <Grid item xs={12} md={6} key={index}>
                        <LoadingSkeleton
                          height={
                            assessmentIds?.length === 0 ? "264px" : "290px"
                          }
                        />
                      </Grid>
                    ))}
                  </Grid>
                </>
              );
            }}
            render={(res = []) => {
              return (
                <>
                  <CompareButton
                    assessmentIds={assessmentIds as string[]}
                    disabled={assessmentIds?.length <= 1}
                  />
                  <Grid container spacing={3}>
                    {forLoopComponent(4, (index) => {
                      const data = res[index];
                      return (
                        <Grid item xs={12} md={6} key={index}>
                          <ComparePartItem
                            data={data}
                            index={index}
                            disabled={
                              assessmentIds.length >= index ? false : true
                            }
                            fetchAssessmentsInfo={
                              assessmentsInfoQueryData.query
                            }
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                </>
              );
            }}
          />
        </Box>
      </PermissionControl>
>>>>>>> c865200 (OTAT-212 Add compare result page)
    </Box>
  );
};

const useCompareParts = () => {
  const { service } = useServiceContext();
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
  const [searchParams, setSearchParams] = useSearchParams();
  const assessmentsInfoQueryData = useQuery({
    service: (args, config) => service.fetchAssessmentsInfo(args, config),
    runOnMount: false,
    initialLoading: true,
    initialData: [],
<<<<<<< HEAD
  });
  const { assessmentIds, profile: contextProfile } = useCompareContext();
  const dispatch = useCompareDispatch();

  useEffect(() => {
    assessmentsInfoQueryData.query({ assessmentIds });
    setSearchParams(createSearchParams({ assessmentIds } as any), {
      replace: true,
    });
    setDocumentTitle(`${t("compare")} ${assessmentIds.length} ${t("items")}`);
  }, [assessmentIds.join()]);

  useEffect(() => {
    if (assessmentsInfoQueryData.loaded && !contextProfile) {
      const profile = assessmentsInfoQueryData.data?.find(
        (item: any) => item?.assessment_profile
      );
      if (profile) {
        dispatch(compareActions.setProfile(profile.assessment_profile));
      }
    }
  }, [assessmentsInfoQueryData.loaded]);

  useEffect(() => {
    const assessmentIdsParams = searchParams.getAll("assessmentIds");
    if (assessmentIdsParams.length == 0 && assessmentIds.length > 0) {
      assessmentsInfoQueryData.query({ assessmentIds: [] });
      dispatch(compareActions.setProfile(null));
      dispatch(compareActions.setAssessmentIds(assessmentIdsParams));
    }
  }, [searchParams]);

  return { assessmentIds, assessmentsInfoQueryData };
=======
  const compareQueryData = useQuery<ICompareModel>({
    service: (args, config) => service.fetchCompare(args, config),
=======
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
  });
  const { assessmentIds, profile: contextProfile } = useCompareContext();
  const dispatch = useCompareDispatch();

<<<<<<< HEAD
  return { compareQueryData };
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
  useEffect(() => {
    assessmentsInfoQueryData.query({ assessmentIds });
    setSearchParams(createSearchParams({ assessmentIds } as any), {
      replace: true,
    });
  }, [assessmentIds.join()]);

  useEffect(() => {
    if (assessmentsInfoQueryData.loaded && !contextProfile) {
      const profile = assessmentsInfoQueryData.data?.find(
        (item: any) => item?.assessment_profile
      );
      if (profile) {
        dispatch(compareActions.setProfile(profile.assessment_profile));
      }
    }
  }, [assessmentsInfoQueryData.loaded]);

  useEffect(() => {
    const assessmentIdsParams = searchParams.getAll("assessmentIds");
    if (assessmentIdsParams.length == 0 && assessmentIds.length > 0) {
      assessmentsInfoQueryData.query({ assessmentIds: [] });
      dispatch(compareActions.setProfile(null));
      dispatch(compareActions.setAssessmentIds(assessmentIdsParams));
    }
  }, [searchParams]);

  return { assessmentIds, assessmentsInfoQueryData };
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
};

const CompareButton = (props: {
  disabled?: boolean;
  assessmentIds?: string[];
}) => {
<<<<<<< HEAD
<<<<<<< HEAD
  const { assessmentIds, disabled = false } = props;
=======
  const { disabled = false, assessmentIds } = props;
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
  const { assessmentIds, disabled = false } = props;
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
  const navigate = useNavigate();

  const handleClick = () => {
    if (assessmentIds) {
      navigate({
<<<<<<< HEAD
<<<<<<< HEAD
        pathname: "result",
=======
        pathname: "compare-result",
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
        pathname: "result",
>>>>>>> c865200 (OTAT-212 Add compare result page)
        search: createSearchParams({
          assessmentIds,
        }).toString(),
      });
    }
  };

  return (
    <>
      <Button
        variant="contained"
        size="large"
        disabled={disabled}
<<<<<<< HEAD
<<<<<<< HEAD
        sx={{ ...styles.compareButton }}
=======
        sx={{
          position: "absolute",
          borderRadius: "100%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,calc(-50% + 12px))",
          width: "96px",
          height: "96px",
          zIndex: 2,
        }}
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
        sx={{ ...styles.compareButton }}
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
        onClick={handleClick}
      >
        <Trans i18nKey="compare" />
      </Button>
<<<<<<< HEAD
<<<<<<< HEAD
      <Box sx={{ ...styles.compareButtonBg }} />
=======
      <Box
        sx={{
          position: "absolute",
          borderRadius: "100%",
          left: "50%",
          top: "50%",
          background: "white",
          transform: "translate(-50%,calc(-50% + 12px))",
          width: "110px",
          height: "110px",
          zIndex: 1,
        }}
      />
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
      <Box sx={{ ...styles.compareButtonBg }} />
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
    </>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const CompareSelectedProfileInfo = () => {
=======
const ProfileField = () => {
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
=======
const CompareSelectedProfileInfo = () => {
>>>>>>> 0cf45a9 (OTAT-212 Fix bugs and add edit button to compare result page)
  const { profile } = useCompareContext();
  const dispatch = useCompareDispatch();
  const makeNewComparison = () => {
    dispatch(compareActions.setAssessmentIds([]));
    dispatch(compareActions.setProfile(null));
  };
  return profile ? (
    <AlertBox
      severity="info"
      action={
        <Button
          variant="contained"
          size="small"
          color="info"
          onClick={makeNewComparison}
        >
          <Trans i18nKey="newComparison" />
        </Button>
      }
    >
      <AlertTitle>
        <Trans i18nKey="assessmentsAreFilteredBy" />{" "}
        <Chip label={profile.title} />
      </AlertTitle>
<<<<<<< HEAD
<<<<<<< HEAD
      <Trans i18nKey="toCompareAssessmentsOfOtherProfiles" />
=======
      <Trans i18nKey="inOrderToSelectAssessmentsFromOtherProfiles" />
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
=======
      <Trans i18nKey="toCompareAssessmentsOfOtherProfiles" />
>>>>>>> 0cf45a9 (OTAT-212 Fix bugs and add edit button to compare result page)
    </AlertBox>
  ) : (
    <></>
  );
<<<<<<< HEAD
=======
const extractAssessmentIdsFromCompareList = (
  compareList: any[] | undefined
) => {
  if (!compareList || compareList?.length === 0) {
    return undefined;
  }
  return compareList.map((compareItem) => compareItem.id);
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
};

export default CompareParts;
