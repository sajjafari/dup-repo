import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
<<<<<<< HEAD
<<<<<<< HEAD
import { Box } from "@mui/material";
=======
import Box from "@mui/material/Box";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
import { Box } from "@mui/material";
>>>>>>> 11a534e (OTAT-266 add Vite)
import BgLines1 from "../../assets/svg/bgLines1.svg";
import SubjectProgress from "../shared/progress/SubjectProgress";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { getColorOfStatus, styles } from "../../config/styles";
import { ISubjectInfo } from "../../types";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import StartRoundedIcon from "@mui/icons-material/StartRounded";
import { BASE_URL } from "../../config/constants";
import getStatusText from "../../utils/getStatusText";
import hasStatus from "../../utils/hasStatus";

interface IAssessmentSubjectCardProps extends ISubjectInfo {
  colorCode: string;
}

export const AssessmentSubjectCard = (props: IAssessmentSubjectCardProps) => {
<<<<<<< HEAD
  const { title, progress = 0, status, id, image, colorCode, description = "" } = props;
=======
  const {
    title,
    progress = 0,
    status,
    id,
    image,
    colorCode,
    description = "",
  } = props;
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
  return (
    <Paper
      sx={{
        borderRadius: 3,
        backgroundColor: colorCode,
        backgroundImage: `url(${BgLines1})`,
        backgroundPosition: "30% 30%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        transition: "background-position .4s ease",
        "&:hover": {
          backgroundPosition: "0% 0%",
        },
        height: "100%",
        position: "relative",
      }}
      elevation={2}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={{
          textAlign: "center",
          color: (t) => t.palette.getContrastText(colorCode),
          px: { xs: 2, sm: 5 },
          py: { xs: 3, sm: 5 },
          height: "100%",
        }}
      >
<<<<<<< HEAD
        <Typography variant="h4" textTransform={"uppercase"} letterSpacing={".13em"} fontFamily="Oswald" fontWeight={500}>
          {title}
        </Typography>
        <ReadMoreAboutSubject colorCode={colorCode} title={title} description={description} />
=======
        <Typography
          variant="h4"
          textTransform={"uppercase"}
          letterSpacing={".13em"}
          fontFamily="Oswald"
          fontWeight={500}
        >
          {title}
        </Typography>
        <ReadMoreAboutSubject
          colorCode={colorCode}
          title={title}
          description={description}
        />
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
        <Box
          mt={2}
          sx={{
            filter: (t) => {
<<<<<<< HEAD
              const shouldInvert = t.palette.getContrastText(colorCode) === "rgba(0, 0, 0, 0.87)";
=======
              const shouldInvert =
                t.palette.getContrastText(colorCode) === "rgba(0, 0, 0, 0.87)";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
              return shouldInvert ? "invert(.93)" : undefined;
            },
          }}
        >
<<<<<<< HEAD
          <img src={`${BASE_URL}${image}`} alt={title} width={"90px"} style={{ filter: "drop-shadow(1px 4px 4px #00000050)" }} />
=======
          <img
            src={`${BASE_URL}${image}`}
            alt={title}
            width={"90px"}
            style={{ filter: "drop-shadow(1px 4px 4px #00000050)" }}
          />
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
        </Box>
        <SubjectProgress progress={progress} colorCode={colorCode} />

        <SubjectStatus title={title} status={status} />
        <Box mt="auto">
          <Button
            variant="contained"
            size="large"
            fullWidth
            component={Link}
            to={progress === 100 ? `./${id}#insight` : `./${id}`}
            state={{ status }}
<<<<<<< HEAD
            startIcon={progress === 0 ? <StartRoundedIcon /> : <QueryStatsRoundedIcon />}
          >
            <Trans i18nKey={"viewInsights"} />
=======
            startIcon={
              progress === 0 ? <StartRoundedIcon /> : <QueryStatsRoundedIcon />
            }
          >
            <Trans
              i18nKey={progress === 0 ? "startAssessment" : "viewInsights"}
            />
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

<<<<<<< HEAD
const SubjectStatus = (props: Pick<IAssessmentSubjectCardProps, "title" | "status">) => {
=======
const SubjectStatus = (
  props: Pick<IAssessmentSubjectCardProps, "title" | "status">
) => {
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
  const { title, status } = props;
  const hasStats = hasStatus(status);
  return (
    <Box mt={8} mb={16} sx={{ ...styles.centerCH }} minHeight={"80px"}>
      {
        <>
          <Typography textAlign={"center"}>
<<<<<<< HEAD
            <Trans i18nKey="subjectStatusIs" values={{ title }} /> {hasStats && <Trans i18nKey="evaluatedAs" />}
=======
            <Trans i18nKey="subjectStatusIs" values={{ title }} />{" "}
            {hasStats && <Trans i18nKey="evaluatedAs" />}
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
          </Typography>
          <Typography
            variant={hasStats ? "h3" : "h4"}
            letterSpacing=".17em"
            sx={{
<<<<<<< HEAD
<<<<<<< HEAD
              fontWeight: "500",
              borderBottom: hasStats ? `3px solid ${getColorOfStatus(status)}` : undefined,
=======
=======
              fontWeight: "500",
>>>>>>> 11a534e (OTAT-266 add Vite)
              borderBottom: hasStats
                ? `3px solid ${getColorOfStatus(status)}`
                : undefined,
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
              pl: 1,
              pr: 1,
            }}
          >
            {getStatusText(status)}
          </Typography>
        </>
      }
    </Box>
  );
};

<<<<<<< HEAD
const ReadMoreAboutSubject = (props: Pick<IAssessmentSubjectCardProps, "title" | "colorCode" | "description">) => {
=======
const ReadMoreAboutSubject = (
  props: Pick<
    IAssessmentSubjectCardProps,
    "title" | "colorCode" | "description"
  >
) => {
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
  const { title, colorCode, description } = props;
  return (
    <Box
      sx={{
        "&:hover .subj_desc": description && {
          opacity: 1,
          zIndex: 2,
          transition: "opacity .2s .2s ease, z-index .2s .2s ease",
        },
      }}
    >
      <Typography
        variant="subSmall"
        sx={{
          opacity: 0.7,
          letterSpacing: ".14em",
          color: (t) => {
            return t.palette.getContrastText(colorCode);
          },
          textDecoration: "underline",
          cursor: "pointer",
        }}
<<<<<<< HEAD
<<<<<<< HEAD
        fontFamily="Roboto"
=======
        fontFamily="RobotoRegular"
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
        fontFamily="Roboto"
>>>>>>> 11a534e (OTAT-266 add Vite)
      >
        <Trans i18nKey="readAbout" /> {title}
      </Typography>
      <Box
        className="subj_desc"
        sx={{
          transition: "opacity .2s .4s ease, z-index .2s .4s ease",
          backgroundColor: "#000000e3",
          opacity: 0,
          zIndex: -1,
          px: 2,
          py: 4,
          borderRadius: 2,
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          width: "calc(100% - 25px)",
          textAlign: "center",
        }}
      >
        <Typography>{description}</Typography>
      </Box>
    </Box>
  );
};
