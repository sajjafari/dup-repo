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
import { Trans } from "react-i18next";
import Title from "../shared/Title";
import QANumberIndicator from "../shared/QANumberIndicator";
import QuestionnaireProgress from "../shared/progress/CategoryProgress";
import { Link } from "react-router-dom";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import StartRoundedIcon from "@mui/icons-material/StartRounded";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import useScreenResize from "../../utils/useScreenResize";
import { styles } from "../../config/styles";
import { IQuestionnairesInfo, ISubjectInfo, TId } from "../../types";
import Chip from "@mui/material/Chip";

interface IQuestionnaireCardProps {
  data: IQuestionnairesInfo;
}

const QuestionnaireCard = (props: IQuestionnaireCardProps) => {
  const { data } = props;
  const {
    id,
    last_updated,
    answered_metric: number_of_answers,
    metric_number: number_of_questions,
    progress = 0,
    subject: subjects,
    title,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:frontend/src/components/questionnaires/QuestionnaireCard.tsx
<<<<<<< HEAD
    current_metric_index,
=======
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
    current_metric_index,
>>>>>>> 54e9997 (OTAT-160 Fix continue button functionality):front/src/components/questionnaires/QuestionnaireCard.tsx
=======
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
=======
    current_metric_index,
>>>>>>> b9b7db6 (OTAT-212 Fix continue button)
  } = data || {};

  const isSmallScreen = useScreenResize("sm");

  return (
    <Paper sx={{ height: "100%", mt: 3 }}>
      <Box
        p="8px 6px"
        pl={"12px"}
        display="flex"
        flexDirection={"column"}
        height="100%"
        justifyContent={"space-between"}
      >
        <Box>
          <Box flex={1}>
            <Title
              sub={
                last_updated &&
                `${(<Trans i18nKey={"lastUpdated"} />)} ${last_updated}`
              }
              size="small"
<<<<<<< HEAD
<<<<<<< HEAD
              fontFamily="Roboto"
              fontWeight={"bold"}
=======
              fontFamily={"RobotoBold"}
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
              fontFamily="Roboto"
              fontWeight={"bold"}
>>>>>>> 11a534e (OTAT-266 add Vite)
            >
              <Box flex="1" display="flex" alignItems={"flex-start"}>
                {title}
                {!isSmallScreen && (
                  <Box
                    p="0 8px"
                    display="inline-block"
                    sx={{
                      float: "right",
                      marginLeft: "auto",
                      minWidth: "80px",
                    }}
                  >
                    <QANumberIndicator
                      q={number_of_questions}
                      a={number_of_answers}
                    />
                  </Box>
                )}
              </Box>
            </Title>
          </Box>
        </Box>
        <Box sx={{ ...styles.centerV }} pt={1} pb={2}>
          <QuestionnaireProgress
            position="relative"
            left="-12px"
            progress={progress}
            q={number_of_questions}
            a={number_of_answers}
            isQuestionnaire={true}
            isSmallScreen={isSmallScreen}
          />
        </Box>
        <Box display="flex" alignItems="end" justifyContent={"space-between"}>
          <Box>
            {subjects.map((subject) => {
              const { title, id } = subject;
              return (
                <Chip
                  label={title}
                  size="small"
                  sx={{ mr: 0.3, mb: 0.1 }}
                  key={id}
                />
              );
            })}
          </Box>
          <ActionButtons
            id={id}
            progress={progress}
            number_of_answers={number_of_answers}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:frontend/src/components/questionnaires/QuestionnaireCard.tsx
<<<<<<< HEAD
            current_metric_index={current_metric_index}
=======
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
            current_metric_index={current_metric_index}
>>>>>>> 54e9997 (OTAT-160 Fix continue button functionality):front/src/components/questionnaires/QuestionnaireCard.tsx
=======
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
=======
            current_metric_index={current_metric_index}
>>>>>>> b9b7db6 (OTAT-212 Fix continue button)
          />
        </Box>
      </Box>
    </Paper>
  );
};

const ActionButtons = (props: {
  id: TId;
  progress: number;
  number_of_answers: number;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:frontend/src/components/questionnaires/QuestionnaireCard.tsx
<<<<<<< HEAD
  current_metric_index: number;
}) => {
  const { id, progress, number_of_answers, current_metric_index } = props;
=======
}) => {
  const { id, progress, number_of_answers } = props;
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
  current_metric_index: number;
}) => {
  const { id, progress, number_of_answers, current_metric_index } = props;
>>>>>>> 54e9997 (OTAT-160 Fix continue button functionality):front/src/components/questionnaires/QuestionnaireCard.tsx
=======
}) => {
  const { id, progress, number_of_answers } = props;
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
=======
  current_metric_index: number;
}) => {
  const { id, progress, number_of_answers, current_metric_index } = props;
>>>>>>> b9b7db6 (OTAT-212 Fix continue button)

  return (
    <Box display="flex">
      {progress === 100 && (
        <ActionButton
          to={`${id}/1`}
          text="edit"
          icon={<ModeEditOutlineRoundedIcon fontSize="small" />}
        />
      )}
      {progress > 0 && (
        <ActionButton
          to={`${id}/review`}
          text="review"
          state={{ name: "Questionnaires" }}
          icon={<RemoveRedEyeRoundedIcon fontSize="small" />}
        />
      )}
      {progress < 100 && progress > 0 && (
        <ActionButton
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:frontend/src/components/questionnaires/QuestionnaireCard.tsx
<<<<<<< HEAD
          to={`${id}/${current_metric_index || number_of_answers + 1}`}
=======
          to={`${id}/${number_of_answers + 1}`}
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
          to={`${id}/${current_metric_index || number_of_answers + 1}`}
>>>>>>> 54e9997 (OTAT-160 Fix continue button functionality):front/src/components/questionnaires/QuestionnaireCard.tsx
=======
          to={`${id}/${number_of_answers + 1}`}
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
=======
          to={`${id}/${current_metric_index || number_of_answers + 1}`}
>>>>>>> b9b7db6 (OTAT-212 Fix continue button)
          text="continue"
          icon={<PlayArrowRoundedIcon fontSize="small" />}
        />
      )}
      {progress === 0 && (
        <ActionButton
          to={`${id}/1`}
          text="start"
          icon={<StartRoundedIcon fontSize="small" />}
        />
      )}
    </Box>
  );
};

const ActionButton = (props: {
  to: string;
  text: string;
  icon: JSX.Element;
  state?: any;
}) => {
  const { to, text, icon, state = {} } = props;
  return (
    <Button
      size="small"
      component={Link}
      state={state}
      to={to}
      startIcon={icon}
      sx={{ ml: 0.5 }}
    >
      <Trans i18nKey={text} />
    </Button>
  );
};

export { QuestionnaireCard };
