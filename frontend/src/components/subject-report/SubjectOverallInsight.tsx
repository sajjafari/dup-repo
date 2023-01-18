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
import { Trans } from "react-i18next";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Title from "../../components/shared/Title";
import Typography from "@mui/material/Typography";
import SubjectOverallStatusLevelChart from "./SubjectOverallStatusLevelChart";

const SubjectOverallInsight = (props: any) => {
  const { data = {} } = props;
  const { title = "" } = data;
  return (
    <Box>
<<<<<<< HEAD
<<<<<<< HEAD
=======
      {/* <Title sx={{ opacity: 0.9 }} inPageLink="#insight">
        <Trans i18nKey="overallStatusOf" values={{ title }} />
      </Title> */}
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
>>>>>>> c865200 (OTAT-212 Add compare result page)
      <Box display="flex" sx={{ flexDirection: { xs: "column", sm: "row" } }}>
        <OverallInsightText {...props} />
        <Box sx={{ pl: { xs: 0, sm: 3, md: 6 }, mt: { xs: 4, sm: 0 } }}>
          <SubjectOverallStatusLevelChart {...props} />
        </Box>
      </Box>
    </Box>
  );
};

const OverallInsightText = (props: any) => {
  const { data = {}, loading } = props;
  const {
    title,
    status,
    cl = 1,
    maturity_level_value: ml,
    most_significant_strength_atts = [],
    most_significant_weaknessness_atts = [],
    results,
  } = data;

  return (
    <Box display="flex" flexDirection={"column"} flex={1}>
      <Typography
<<<<<<< HEAD
<<<<<<< HEAD
        fontFamily={"Roboto"}
        fontWeight="500"
=======
        fontFamily={"RobotoMedium"}
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
        fontFamily={"Roboto"}
        fontWeight="500"
>>>>>>> 11a534e (OTAT-266 add Vite)
        fontSize="1.3rem"
        sx={{ opacity: 0.96 }}
      >
        {loading ? (
          <Skeleton height="60px" />
        ) : (
          <>
            <Trans i18nKey="withConfidence" />{" "}
            <Typography
              component="span"
<<<<<<< HEAD
<<<<<<< HEAD
              fontFamily={"Roboto"}
=======
              fontFamily={"RobotoBold"}
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
              fontFamily={"Roboto"}
>>>>>>> 11a534e (OTAT-266 add Vite)
              fontWeight="bold"
              sx={{ color: "#3596A1" }}
              fontSize="1.15rem"
            >
              <Trans i18nKey={"clOf"} values={{ cl }} />
            </Typography>{" "}
            <Trans i18nKey="wasEstimateT" values={{ title }} />{" "}
            <Typography
              component="span"
              fontWeight="bold"
<<<<<<< HEAD
<<<<<<< HEAD
              fontFamily={"Roboto"}
=======
              fontFamily={"RobotoBold"}
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
              fontFamily={"Roboto"}
>>>>>>> 11a534e (OTAT-266 add Vite)
              sx={{ color: "#6035A1" }}
              fontSize="1.15rem"
            >
              {ml}.
            </Typography>{" "}
            <Trans i18nKey="meaning" values={{ title }} />{" "}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 11a534e (OTAT-266 add Vite)
            <Typography
              component="span"
              fontFamily="Roboto"
              fontWeight={"bold"}
            >
<<<<<<< HEAD
=======
            <Typography component="span" fontFamily={"RobotoBold"}>
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
>>>>>>> 11a534e (OTAT-266 add Vite)
              {status}.
            </Typography>
            <Box>
              <Typography variant="body2">
                <Trans
                  i18nKey="attributesAreConsidered"
                  values={{ length: results?.length }}
                />
              </Typography>
            </Box>
          </>
        )}
      </Typography>
      <Grid container pt={5} spacing={4}>
        <Grid item xs={12} sm={6} md={5} lg={4}>
          <MostSigItems
            color="#005e00"
            text="strengths"
            loading={loading}
            att={most_significant_strength_atts}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={5} lg={4}>
          <MostSigItems
            color="#b10202"
            text="weaknesses"
            loading={loading}
            att={most_significant_weaknessness_atts}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export const MostSigItems = ({
  loading,
  att,
  items,
=======
const MostSigItems = ({
  loading,
  att,
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
export const MostSigItems = ({
  loading,
  att,
  items,
>>>>>>> c865200 (OTAT-212 Add compare result page)
  color,
  text,
}: {
  loading: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
  att?: any[];
  items?: string[];
=======
  att: any[];
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
  att?: any[];
  items?: string[];
>>>>>>> c865200 (OTAT-212 Add compare result page)
  color: string;
  text: string;
}) => {
  return (
    <>
      <Title
        fontSize={"1.1rem"}
        borderBottom={true}
        color={color}
        letterSpacing={".08em"}
      >
        <Trans i18nKey={text} />
      </Title>
<<<<<<< HEAD
<<<<<<< HEAD
      <ul style={{ marginBlockStart: "8px", paddingInlineStart: "26px" }}>
        {loading ? (
          <MostSigItemLoadingSkeleton />
        ) : (
          (att || items)?.map((item: any, index: any) => {
            return <li key={index}>{att ? item?.title : item}</li>;
          })
        )}
      </ul>
=======
      <Box p={1}>
=======
      <ul style={{ marginBlockStart: "8px", paddingInlineStart: "26px" }}>
>>>>>>> c865200 (OTAT-212 Add compare result page)
        {loading ? (
          <MostSigItemLoadingSkeleton />
        ) : (
          (att || items)?.map((item: any, index: any) => {
            return <li key={index}>{att ? item?.title : item}</li>;
          })
        )}
<<<<<<< HEAD
      </Box>
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
      </ul>
>>>>>>> c865200 (OTAT-212 Add compare result page)
    </>
  );
};

const MostSigItemLoadingSkeleton = () => {
  return (
    <>
      {[1, 2, 3].map((k) => (
        <Skeleton key={k} />
      ))}
    </>
  );
};

export default SubjectOverallInsight;
