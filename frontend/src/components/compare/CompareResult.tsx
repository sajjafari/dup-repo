<<<<<<< HEAD
import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 11a534e (OTAT-266 add Vite)
=======
import React, { useEffect } from "react";
>>>>>>> 40b97fc (OTAT-182 Add document title related to pages)
import { Box } from "@mui/material";
import { Trans } from "react-i18next";
import Chip from "@mui/material/Chip";
import MuiLink from "@mui/material/Link";
import CompareTable from "./CompareTable";
import AlertBox from "../shared/AlertBox";
import { ICompareResultModel } from "../../types";
import { getMinWithBaseOnNumberOfAssessments } from "./utils";
import CompareResultAssessmentsSection from "./CompareResultAssessmentsSection";
import CompareResultSubjectAttributesBarChart from "./CompareResultAttributesBarChart";
<<<<<<< HEAD
=======
import { Alert, Chip, CircularProgress, Link, Typography } from "@mui/material";
=======
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
>>>>>>> d4b1d73 (OTAT-212 Fix bugs)
=======
>>>>>>> 0cf45a9 (OTAT-212 Fix bugs and add edit button to compare result page)
import Box from "@mui/material/Box";
import { Trans } from "react-i18next";
import Chip from "@mui/material/Chip";
import MuiLink from "@mui/material/Link";
import CompareTable from "./CompareTable";
import AlertBox from "../shared/AlertBox";
<<<<<<< HEAD
>>>>>>> c865200 (OTAT-212 Add compare result page)
=======
import { ICompareResultModel } from "../../types";
import { getMinWithBaseOnNumberOfAssessments } from "./utils";
import CompareResultAssessmentsSection from "./CompareResultAssessmentsSection";
import CompareResultSubjectAttributesBarChart from "./CompareResultAttributesBarChart";
>>>>>>> 0cf45a9 (OTAT-212 Fix bugs and add edit button to compare result page)
=======
import setDocumentTitle from "../../utils/setDocumentTitle";
import { t } from "i18next";
>>>>>>> 40b97fc (OTAT-182 Add document title related to pages)

interface ICompareResultProps {
  data: ICompareResultModel;
}

const CompareResult = (props: ICompareResultProps) => {
  const { data } = props;

  useEffect(() => {
    setDocumentTitle(
      `${t("comparisonResultT")} ${data.base_infos
        .map((bi) => bi.title)
        .join(` & `)}`
    );
  }, [data.base_infos]);

  return (
    <Box mt={4}>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0cf45a9 (OTAT-212 Fix bugs and add edit button to compare result page)
      <Box sx={{ overflowX: "auto" }}>
        <Box
          px={1}
          minWidth={getMinWithBaseOnNumberOfAssessments(
            data?.base_infos?.length
          )}
        >
          <CompareResultCommonBaseInfo data={data} />
          <CompareResultAssessmentsSection data={data.base_infos} />
          <div id="generalSpecification" />
          <Box pt={8}>
            <CompareTable
              title="generalSpecification"
              data={data.overall_insights}
              base_infos={data.base_infos}
            />
          </Box>
          {data.subjects.map((subject, index) => {
            return (
              <Box key={index}>
                <div id={subject.title} />
                <Box pt={10}>
                  <CompareTable
                    title={subject.title}
                    data={subject.subject_report_info}
                    base_infos={data.base_infos}
                  />
                  <CompareResultSubjectAttributesBarChart
                    data={subject.attributes_info}
                    base_infos={data.base_infos}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
<<<<<<< HEAD
=======
      <CompareItems data={data} />
    </Box>
  );
};

const CompareItems = (props: { data: ICompareResultModel }) => {
  const { data } = props;
  return (
    <Box sx={{ overflowX: "auto" }}>
      <Box
        px={1}
        minWidth={
          data.base_infos.length === 4
            ? "760px"
            : data.base_infos.length === 3
            ? "550px"
            : "320px"
        }
      >
        <GeneralInfo data={data} />
        <CompareResultAssessments data={data.base_infos} />
        <CompareResultOverAllInsights
          data={data.overall_insights}
          base_infos={data.base_infos}
        />
        <CompareResultSubjects
          data={data.subjects}
          base_infos={data.base_infos}
        />
>>>>>>> c865200 (OTAT-212 Add compare result page)
=======
>>>>>>> 0cf45a9 (OTAT-212 Fix bugs and add edit button to compare result page)
      </Box>
    </Box>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
const CompareResultCommonBaseInfo = (props: { data: ICompareResultModel }) => {
=======
const GeneralInfo = (props: { data: ICompareResultModel }) => {
>>>>>>> c865200 (OTAT-212 Add compare result page)
=======
const CompareResultCommonBaseInfo = (props: { data: ICompareResultModel }) => {
>>>>>>> 0cf45a9 (OTAT-212 Fix bugs and add edit button to compare result page)
  const { data } = props;
  const { base_infos, subjects } = data;
  const profile = base_infos[0].profile;
  return (
    <AlertBox severity="info" sx={{ mb: 3 }}>
      <Trans i18nKey={"allOfTheSelectedAssessmentsUse"} />
      <Chip sx={{ mx: 0.6 }} label={profile} />{" "}
      <Trans i18nKey={"whichHasNamed"} values={{ value: subjects.length }} />
      {subjects.map((subject) => (
<<<<<<< HEAD
<<<<<<< HEAD
        <MuiLink href={`#${subject.title}`} sx={{ mx: 0.6 }}>
          {subject.title}
        </MuiLink>
=======
        <Link href={`#${subject.title}`} sx={{ mx: 0.6 }}>
          {subject.title}
        </Link>
>>>>>>> c865200 (OTAT-212 Add compare result page)
=======
        <MuiLink href={`#${subject.title}`} sx={{ mx: 0.6 }}>
          {subject.title}
        </MuiLink>
>>>>>>> d4b1d73 (OTAT-212 Fix bugs)
      ))}
    </AlertBox>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
=======
const CompareResultAssessments = (props: {
  data: ICompareResultBaseInfo[];
}) => {
  const { data } = props;

  return (
    <Box>
      <Grid container spacing={2}>
        {data.map((item) => {
          return (
            <Grid
              item
              xs={12 / (data?.length || 1)}
              sx={{
                "&:not(:last-of-type) > div": {
                  borderRight: "1px solid #e7e7e7",
                },
              }}
            >
              <Box
                sx={{
                  p: { xs: 0.5, sm: 1, md: 2 },
                  ...styles.centerCH,
                }}
              >
                <Title>{item.title}</Title>
                <Box
                  sx={{
                    ...styles.centerV,
                    mt: 2,
                    justifyContent: { xs: "center", lg: "flex-end" },
                  }}
                >
                  <Gauge systemStatus={item.status} maxWidth="250px" m="auto" />
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  sx={{ flexDirection: { xs: "column-reverse", lg: "row" } }}
                ></Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Box mt={2}>
        <Title size="small">
          <Trans />
        </Title>
        <Grid container spacing={2}></Grid>
      </Box>
    </Box>
  );
};

const CompareResultOverAllInsights = (props: {
  data: ICompareResultCompareItems[];
  base_infos: ICompareResultBaseInfo[];
}) => {
  const { data, base_infos } = props;

  return (
    <>
      <div id="generalSpecification" />
      <Box pt={8}>
        <CompareTable
          title="generalSpecification"
          data={data}
          base_infos={base_infos}
        />
      </Box>
    </>
  );
};

const CompareResultSubjects = (props: {
  data: ICompareResultSubject[];
  base_infos: ICompareResultBaseInfo[];
}) => {
  const { data, base_infos } = props;

  return (
    <Box>
      {data.map((item) => {
        return (
          <>
            <div id={item.title} />
            <Box pt={10}>
              <CompareResultSubjectAssessment
                data={item}
                base_infos={base_infos}
              />
              <CompareResultSubjectAttributes
                data={item.attributes_info}
                base_infos={base_infos}
              />
            </Box>
          </>
        );
      })}
    </Box>
  );
};

const CompareResultSubjectAssessment = (props: {
  data: ICompareResultSubject;
  base_infos: ICompareResultBaseInfo[];
}) => {
  const { data, base_infos } = props;

  return (
    <CompareTable
      title={data.title}
      data={data.subject_report_info}
      base_infos={base_infos}
    />
  );
};

const CompareResultSubjectAttributes = (props: {
  data: any[];
  base_infos: ICompareResultBaseInfo[];
}) => {
  const { data, base_infos } = props;

  return (
    <Box>
      <Typography
        sx={{
          fontSize: "1.05rem",
          fontFamily: "RobotoRegular",
          opacity: 0.7,
          mb: 0.5,
          mt: 2,
        }}
      >
        <Trans i18nKey="attributes" />
      </Typography>
      <Box sx={{ overflowX: "auto", overflowY: "hidden" }}>
        <Box height="420px" minWidth="740px">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="title" />
              <YAxis type="number" domain={[0, 5]} tickCount={6} />
              <Tooltip />
              <Legend />
              {base_infos.map((assessment, index) => {
                const title = assessment.title;
                return title ? (
                  <Bar
                    dataKey={assessment.id}
                    name={title}
                    fill={barColors[index]}
                    maxBarSize={20}
                  />
                ) : null;
              })}
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Box>
  );
};

const CompareTable = (props: {
  data: { title: string; items: (string | string[])[] }[];
  title: string;
  base_infos: ICompareResultBaseInfo[];
}) => {
  const { data, title, base_infos } = props;
  return (
    <>
      <Box mt={2}>
        <Title
          size="small"
          sx={{ opacity: 0.9, flex: 1 }}
          inPageLink={`${title}`}
        >
          <Trans i18nKey={title} />
        </Title>

        {data.map((part) => {
          return (
            <Box borderBottom={"1px dashed #e7e7e7"} py={1}>
              <Box mb={0.5} mt={1}>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontFamily: "RobotoRegular",
                    opacity: 0.7,
                  }}
                >
                  {part.title}
                </Typography>
              </Box>
              <Grid container spacing={2} sx={{ py: 1.8 }}>
                {part.items.map((value) => {
                  return (
                    <Grid
                      item
                      xs={12 / (base_infos?.length || 1)}
                      sx={{
                        "&:not(:last-of-type) > div": {
                          borderRight: "1px solid #e7e7e7",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          opacity: 0.96,
                          height: "100%",
                        }}
                      >
                        {Array.isArray(value) ? (
                          <ul
                            style={{
                              marginBlockStart: 0,
                              marginBlockEnd: 0,
                              paddingInlineStart: "24px",
                            }}
                          >
                            {value.map((text) => (
                              <li>
                                <Typography
                                  sx={{ my: 0.3 }}
                                  fontFamily={"RobotoMedium"}
                                  fontSize="1.1rem"
                                >
                                  {text}
                                </Typography>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          renderCompareItem(part.title, value)
                        )}
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

const renderMap: Record<string, (arg: any) => JSX.Element> = {
  Progress: (value: ITotalProgress) => {
    const { progress } = value;
    return (
      <Box display="flex" alignItems={"center"}>
        <Typography
          fontFamily={"RobotoBold"}
          fontSize="1.1rem"
          fontWeight="bolder"
        >
          {progress > 0 && progress < 1 ? (
            <>{progress.toFixed(1)} % </>
          ) : (
            <>{progress.toFixed(0)} % </>
          )}
        </Typography>

        <Box>
          <CircularProgress
            sx={{
              ml: 2,
              [`& .MuiCircularProgress-circle`]: {
                strokeLinecap: "round",
              },
              boxShadow: "0 0 4px #bbb7b7 inset",
              borderRadius: "100%",
              ...styles.centerVH,
            }}
            size="36px"
            value={progress}
            variant="determinate"
          />
        </Box>
      </Box>
    );
  },
  "Maturity level": (ml: number) => (
    <Typography
      fontFamily={"RobotoBold"}
      fontSize="1.1rem"
      fontWeight="bolder"
      sx={{ color: (t) => t.palette.ml.primary }}
    >
      {ml} / 5
    </Typography>
  ),
  "Confidence level": (cl: number) => (
    <Typography
      fontFamily={"RobotoBold"}
      fontWeight="bolder"
      fontSize="1.1rem"
      sx={{ color: (t) => t.palette.cl.primary }}
    >
      {cl} / 5
    </Typography>
  ),
  Status: (status: TStatus) => (
    <Typography
      fontFamily={"RobotoBold"}
      fontSize="1.1rem"
      fontWeight="bolder"
      sx={{ color: getColorOfStatus(status) }}
    >
      {status}
    </Typography>
  ),
};

const barColors = ["#2b3d85", "#472b85", "#852b74", "#852b3a"];

const renderCompareItem = (key: string, value: any) => {
  const component =
    renderMap[key] ||
    ((text) => (
      <Typography
        fontFamily={"RobotoBold"}
        fontWeight="bolder"
        fontSize="1.1rem"
      >
        {text}
      </Typography>
    ));

  return component(value);
};

>>>>>>> c865200 (OTAT-212 Add compare result page)
=======
>>>>>>> 0cf45a9 (OTAT-212 Fix bugs and add edit button to compare result page)
export default CompareResult;
