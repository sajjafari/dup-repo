<<<<<<< HEAD
import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { useEffect } from "react";
>>>>>>> 40b97fc (OTAT-182 Add document title related to pages)
import { Box } from "@mui/material";
=======
import Box from "@mui/material/Box";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
import { Box } from "@mui/material";
>>>>>>> 11a534e (OTAT-266 add Vite)
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Trans } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import Title from "../../components/shared/Title";
import {
  EAssessmentStatus,
  useMetricContext,
} from "../../providers/MetricProvider";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import GradingRoundedIcon from "@mui/icons-material/GradingRounded";
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import { IQuestionnaireModel } from "../../types";
import SupTitleBreadcrumb, {
  useSupTitleBreadcrumb,
} from "../shared/SupTitleBreadcrumb";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
<<<<<<< HEAD
<<<<<<< HEAD
import { t } from "i18next";
<<<<<<< HEAD
=======
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
import { t } from "i18next";
>>>>>>> 255e0ee (OTAT-258 Fix mobile navbar items)
=======
import setDocumentTitle from "../../utils/setDocumentTitle";
>>>>>>> 40b97fc (OTAT-182 Add document title related to pages)

const MetricsTitle = (props: {
  data: IQuestionnaireModel;
  isReview?: boolean;
}) => {
  const { data, isReview } = props;
  const { title } = data || {};
  const {
    metricsInfo: { total_number_of_metrics },
    assessmentStatus,
    isSubmitting,
  } = useMetricContext();
  const { spaceId, assessmentId, metricIndex, questionnaireId } = useParams();
  const isComplete = metricIndex === "completed";
  const canFinishQuestionnaire = !isComplete && !isReview;
  const breadcrumbInfo = useSupTitleBreadcrumb({
    spaceId,
    assessmentId,
    questionnaireId,
  });

  useEffect(() => {
    if (isComplete) {
      setDocumentTitle(`${title} ${t("questionnaireFinished")}`);
    }
  }, [title, isComplete]);

  return (
    <Box sx={{ pt: 1, pb: 0 }}>
      <Title
        wrapperProps={{
          sx: {
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "flex-end" },
            display: { xs: "block", sm: "flex" },
          },
        }}
        toolbar={
          <Box sx={{ mt: { xs: 1.5, sm: 0 } }}>
            {!isReview && (
              <Button
                disabled={isSubmitting}
                component={Link}
                to={isReview ? "./../.." : "./.."}
                sx={{ mr: 1 }}
                startIcon={<QuizRoundedIcon />}
              >
                <Trans i18nKey="selectAnotherQuestionnaire" />
              </Button>
            )}
            {canFinishQuestionnaire && (
              <Button
                disabled={isSubmitting}
                component={Link}
                to={"./review"}
                startIcon={<GradingRoundedIcon />}
              >
                <Trans i18nKey="review" />
              </Button>
            )}
          </Box>
        }
        backLink={-1}
        sup={
          <SupTitleBreadcrumb
            routes={[
              {
                title: breadcrumbInfo?.space,
<<<<<<< HEAD
<<<<<<< HEAD
                to: `/${spaceId}/assessments`,
                icon: <FolderRoundedIcon fontSize="inherit" sx={{ mr: 0.5 }} />,
              },
              {
                title: `${breadcrumbInfo?.assessment} ${t("questionnaires")}`,
                to: `/${spaceId}/assessments/${assessmentId}/questionnaires`,
=======
                to: "/spaces/",
                icon: <FolderRoundedIcon fontSize="inherit" sx={{ mr: 0.5 }} />,
              },
              {
                title: breadcrumbInfo?.assessment,
                to: `/${spaceId}/assessments`,
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
                to: `/${spaceId}/assessments`,
                icon: <FolderRoundedIcon fontSize="inherit" sx={{ mr: 0.5 }} />,
              },
              {
                title: `${breadcrumbInfo?.assessment} ${t("questionnaires")}`,
                to: `/${spaceId}/assessments/${assessmentId}/questionnaires`,
>>>>>>> 255e0ee (OTAT-258 Fix mobile navbar items)
                icon: (
                  <DescriptionRoundedIcon fontSize="inherit" sx={{ mr: 0.5 }} />
                ),
              },
              {
                title: breadcrumbInfo?.questionnaire,
                to: `/${spaceId}/assessments/${assessmentId}/questionnaires`,
                icon: <QuizRoundedIcon fontSize="inherit" sx={{ mr: 0.5 }} />,
              },
            ]}
          />
        }
      >
        {isReview ? (
          <>
            {title}
            <Typography
              display="inline-block"
              variant="h5"
<<<<<<< HEAD
<<<<<<< HEAD
              sx={{ opacity: 0.6, marginLeft: 1, fontWeight: "bold" }}
=======
              sx={{ opacity: 0.6, marginLeft: 1 }}
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
              sx={{ opacity: 0.6, marginLeft: 1, fontWeight: "bold" }}
>>>>>>> 11a534e (OTAT-266 add Vite)
            >
              <Trans i18nKey="review" />
            </Typography>
          </>
        ) : (
          <>
            {assessmentStatus === EAssessmentStatus.DONE && (
              <AssignmentTurnedInRoundedIcon
                sx={{ mr: 0.5, opacity: 0.6 }}
                fontSize="large"
              />
            )}
            <Box display="block">
              {title}{" "}
              {assessmentStatus === EAssessmentStatus.DONE ? (
                <Typography
                  display="inline-flex"
                  variant="h5"
                  sx={{
<<<<<<< HEAD
<<<<<<< HEAD
                    fontWeight: "bold",
=======
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
                    fontWeight: "bold",
>>>>>>> 11a534e (OTAT-266 add Vite)
                    opacity: 0.6,
                    ml: { xs: 0, sm: 1 },
                    alignItems: "center",
                  }}
                >
                  <Trans i18nKey="questionnaireFinished" />
                </Typography>
              ) : (
                <Typography
                  display="inline-block"
                  variant="h5"
<<<<<<< HEAD
<<<<<<< HEAD
                  fontWeight={"bold"}
=======
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
                  fontWeight={"bold"}
>>>>>>> 11a534e (OTAT-266 add Vite)
                  sx={{ opacity: 0.6, ml: { xs: 0, sm: 1 } }}
                >
                  {" "}
                  <Trans i18nKey="question" /> {metricIndex}/
                  {total_number_of_metrics}
                </Typography>
              )}
            </Box>
          </>
        )}
      </Title>
    </Box>
  );
};

export default MetricsTitle;
