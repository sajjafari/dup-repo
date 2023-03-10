import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { Box } from "@mui/material";
=======
import Box from "@mui/material/Box";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
import { Box } from "@mui/material";
>>>>>>> 11a534e (OTAT-266 add Vite)
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Trans } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import Title from "../shared/Title";
import { useMetricContext } from "../../providers/MetricProvider";
import assessmentDoneSvg from "../../assets/svg/assessmentDone.svg";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import Hidden from "@mui/material/Hidden";

const MetricsReview = () => {
  const { metricIndex, metricsInfo, assessmentStatus } = useMetricContext();
  return (
    <Box width="100%">
      <Review metrics={metricsInfo.metrics} isReviewPage={true} />
    </Box>
  );
};

export const Review = ({ metrics = [], isReviewPage }: any) => {
  const navigate = useNavigate();
  return (
    <Box
      maxWidth={"1440px"}
      sx={{ px: { xs: 1, sm: 2, md: 6 }, my: { xs: 1, md: 3 }, mx: "auto" }}
    >
      {!isReviewPage && (
        <Box mb={6} mt={6} p={0.5}>
          <Typography
            variant="h4"
            sx={{
              opacity: 0.8,
              mb: 4,
<<<<<<< HEAD
<<<<<<< HEAD
              fontFamily: "Roboto",
=======
              fontFamily: "RobotoBold",
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
              fontFamily: "Roboto",
>>>>>>> 11a534e (OTAT-266 add Vite)
              fontWeight: "bolder",
            }}
            textTransform={"uppercase"}
          >
            <Trans i18nKey="youFinishedQuestionnaire" />
          </Typography>
<<<<<<< HEAD
<<<<<<< HEAD
          <Typography variant="h5" fontFamily="Roboto" fontWeight="bold">
=======
          <Typography variant="h5" fontFamily="RobotoBold">
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
          <Typography variant="h5" fontFamily="Roboto" fontWeight="bold">
>>>>>>> 11a534e (OTAT-266 add Vite)
            <Trans i18nKey="youCan" />{" "}
            <Button
              startIcon={<QueryStatsRoundedIcon />}
              variant="contained"
              size="large"
              component={Link}
<<<<<<< HEAD
<<<<<<< HEAD
              to={"./../../../insights"}
=======
              to={"./../../.."}
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
              to={"./../../../insights"}
>>>>>>> c865200 (OTAT-212 Add compare result page)
            >
              <Trans i18nKey="viewInsights" />
            </Button>{" "}
            <Trans i18nKey="now" />.
          </Typography>
          <Hidden smDown>
            <Box display="flex" justifyContent={"flex-end"}>
              <Box width="480px" mt="-64px">
                <img
                  src={assessmentDoneSvg}
                  alt="assessment done"
                  style={{ width: "100%" }}
                />
              </Box>
            </Box>
          </Hidden>
        </Box>
      )}
      <Box>
        {!isReviewPage && (
          <Title>
            <Trans i18nKey="review" />
          </Title>
        )}
        <Box mt={2}>
          {metrics.map((metric: any) => {
            return (
              <Paper
                key={metric.id}
                sx={{
                  p: 3,
                  backgroundColor: "#273248",
                  flex: 1,
                  color: "white",
                  position: "relative",
                  overflow: "hidden",
                  mb: 2,
                  borderRadius: "8px",
                }}
                elevation={3}
              >
                <Box>
                  <Box>
                    <Typography
                      textTransform={"capitalize"}
                      variant="subMedium"
                      sx={{ color: "#b3b3b3" }}
                    >
                      <Trans i18nKey={"question"} />
                    </Typography>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 11a534e (OTAT-266 add Vite)
                    <Typography
                      variant="h6"
                      fontFamily="Roboto"
                      fontWeight="bold"
                    >
<<<<<<< HEAD
=======
                    <Typography variant="h6" fontFamily={"RobotoBold"}>
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
>>>>>>> 11a534e (OTAT-266 add Vite)
                      {metric.title}
                    </Typography>
                  </Box>
                  {metric.answer && (
                    <Box mt={3}>
                      <Typography
                        variant="subMedium"
                        textTransform="uppercase"
                        sx={{ color: "#b3b3b3" }}
                      >
                        <Trans i18nKey={"yourAnswer"} />
                      </Typography>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 11a534e (OTAT-266 add Vite)
                      <Typography
                        variant="h6"
                        fontFamily="Roboto"
                        fontWeight="bold"
                      >
<<<<<<< HEAD
=======
                      <Typography variant="h6" fontFamily={"RobotoBold"}>
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
>>>>>>> 11a534e (OTAT-266 add Vite)
                        {metric.answer.caption}
                      </Typography>
                    </Box>
                  )}
                  <Box display="flex" mt={2}>
                    <Button
                      variant="contained"
                      sx={{ mt: 0.2, ml: "auto" }}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(
                          isReviewPage
                            ? `./../${metric.index}`
                            : `../${metric.index}`
                        );
                      }}
                    >
                      {metric.answer ? (
                        <Trans i18nKey="edit" />
                      ) : (
                        <Trans i18nKey="submitAnAnswer" />
                      )}
                    </Button>
                  </Box>
                </Box>
              </Paper>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default MetricsReview;
