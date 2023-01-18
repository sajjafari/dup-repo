import React from "react";
<<<<<<< HEAD
=======
import Alert from "@mui/material/Alert";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
import AlertTitle from "@mui/material/AlertTitle";
import { Trans } from "react-i18next";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
<<<<<<< HEAD
import QANumberIndicator from "../shared/QANumberIndicator";
import AlertBox from "../shared/AlertBox";
=======
import { TId } from "../../types";
import QANumberIndicator from "../shared/QANumberIndicator";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)

type TQuestionnairesNotCompleteAlertProps = {
  subjectName?: string;
  to?: string;
  progress?: number;
  q?: number;
  a?: number;
};

const QuestionnairesNotCompleteAlert = (
  props: TQuestionnairesNotCompleteAlertProps
) => {
  const { subjectName, to, progress, q, a } = props;
  const location = useLocation();
  return (
<<<<<<< HEAD
    <AlertBox
=======
    <Alert
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
      severity="warning"
      variant="filled"
      sx={{
        backgroundColor: "#622301",
        background: progress
          ? `linear-gradient(135deg, #a53900 ${progress}%, #622301 ${progress}%)`
          : undefined,
        color: "white",
        borderRadius: 2,
      }}
      action={
        <>
          {to ? (
            <Button
              color="inherit"
              sx={{
                backgroundColor: "#ffffff22",
                "&:hover": {
                  backgroundColor: "#ffffff55",
                },
              }}
              component={Link}
              state={location}
              to={to}
            >
<<<<<<< HEAD
              {subjectName} <Trans i18nKey="questionnaires" />{" "}
=======
              {subjectName} questionnaires{" "}
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
              {q && a && (
                <QANumberIndicator
                  q={q}
                  a={a}
                  sx={{
                    ml: 1,
                    pl: 1,
                    color: "white",
                    borderLeft: "1px dashed #ffffff52",
                  }}
                />
              )}
            </Button>
          ) : (
            <></>
          )}
        </>
      }
    >
      <AlertTitle>
        <Trans i18nKey="thisReportIsNotAccurate" />
      </AlertTitle>
      {subjectName ? (
        <Trans
          i18nKey="pleaseCompleteAllSubjectQuestionnaires"
          values={{ subjectName }}
        />
      ) : (
        <Trans i18nKey="pleaseCompleteAllQuestionnaires" />
      )}
<<<<<<< HEAD
    </AlertBox>
=======
    </Alert>
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
  );
};

export default QuestionnairesNotCompleteAlert;
