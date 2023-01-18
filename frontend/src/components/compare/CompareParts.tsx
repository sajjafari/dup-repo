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
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ComparePartItem from "./ComparePartItem";
import { useServiceContext } from "../../providers/ServiceProvider";
import { useQuery } from "../../utils/useQuery";
import QueryData from "../shared/QueryData";
import Button from "@mui/material/Button";
import { Trans } from "react-i18next";
import { LoadingSkeleton } from "../shared/loadings/LoadingSkeleton";
import { ICompareModel } from "../../types";
import getAssessmentResult from "../../utils/getAssessmentResult";
import { createSearchParams, useNavigate } from "react-router-dom";

const CompareParts = () => {
  const { compareQueryData } = useCompareParts();

  return (
    <Box>
      <Box position={"relative"}>
        <QueryData
          {...compareQueryData}
          renderLoading={() => {
            return (
              <>
                <CompareButton disabled={true} />
                <Grid container spacing={3}>
                  {[0, 1, 2, 3].map((index) => {
                    return (
                      <Grid item xs={12} sm={6} key={index}>
                        <LoadingSkeleton height="264px" />
                      </Grid>
                    );
                  })}
                </Grid>
              </>
            );
          }}
          render={(data) => {
            const { assessment_project_compare_list = [] } = data;
            const canCompare = assessment_project_compare_list.length > 1;
            return (
              <>
                <CompareButton
                  disabled={!canCompare}
                  assessmentIds={extractAssessmentIdsFromCompareList(
                    assessment_project_compare_list
                  )}
                />
                <Grid container spacing={3}>
                  {[0, 1, 2, 3].map((index) => {
                    const data = assessment_project_compare_list[index];
                    return (
                      <Grid item xs={12} sm={6} key={index}>
                        <ComparePartItem
                          data={data}
                          fetchCompare={compareQueryData.query}
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
    </Box>
  );
};

const useCompareParts = () => {
  const { service } = useServiceContext();
<<<<<<< HEAD
  const [searchParams, setSearchParams] = useSearchParams();
  const assessmentsInfoQueryData = useQuery({
    service: (args, config) => service.fetchAssessmentsInfo(args, config),
    runOnMount: false,
    initialLoading: true,
    initialData: [],
  });
  const { assessmentIds, profile: contextProfile } = useCompareContext();
  const dispatch = useCompareDispatch();

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
=======
  const compareQueryData = useQuery<ICompareModel>({
    service: (args, config) => service.fetchCompare(args, config),
  });

  return { compareQueryData };
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
};

const CompareButton = (props: {
  disabled?: boolean;
  assessmentIds?: string[];
}) => {
<<<<<<< HEAD
  const { assessmentIds, disabled = false } = props;
=======
  const { disabled = false, assessmentIds } = props;
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
  const navigate = useNavigate();

  const handleClick = () => {
    if (assessmentIds) {
      navigate({
<<<<<<< HEAD
        pathname: "result",
=======
        pathname: "compare-result",
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
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
        onClick={handleClick}
      >
        <Trans i18nKey="compare" />
      </Button>
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
    </>
  );
};

<<<<<<< HEAD
const CompareSelectedProfileInfo = () => {
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
      <Trans i18nKey="toCompareAssessmentsOfOtherProfiles" />
    </AlertBox>
  ) : (
    <></>
  );
=======
const extractAssessmentIdsFromCompareList = (
  compareList: any[] | undefined
) => {
  if (!compareList || compareList?.length === 0) {
    return undefined;
  }
  return compareList.map((compareItem) => compareItem.id);
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
};

export default CompareParts;
