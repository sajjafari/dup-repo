import React from "react";
<<<<<<< HEAD
import { Box } from "@mui/material";
import { Trans } from "react-i18next";
import ErrorEmptyData from "../shared/errors/ErrorEmptyData";
=======
import Box from "@mui/material/Box";
import { Trans } from "react-i18next";
import EmptyError from "../shared/errors/EmptyError";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
import Title from "../shared/Title";
import { AssessmentSubjectCard } from "./AssessmentSubjectCard";
import Grid from "@mui/material/Grid";
import { ISubjectInfo } from "../../types";

interface IAssessmentSubjectListProps {
  subjects: ISubjectInfo[];
  colorCode: string;
}

export const AssessmentSubjectList = (props: IAssessmentSubjectListProps) => {
  const { subjects = [], colorCode } = props;
  const isEmpty = subjects.length === 0;

  return (
    <Box mt={4}>
      <Box>
        <Title
          borderBottom={true}
          sx={{ borderBottomColor: colorCode }}
<<<<<<< HEAD
          inPageLink="subjects"
=======
          inPageLink="#subjects"
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
        >
          <Trans i18nKey="subjects" />
        </Title>
      </Box>
      <Box mt={3}>
        {isEmpty ? (
<<<<<<< HEAD
          <ErrorEmptyData />
=======
          <EmptyError />
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
        ) : (
          <Grid
            container
            spacing={3}
            sx={{ px: { lg: 2, md: 4, sm: 9, xs: 0 } }}
          >
            {subjects.map((subject) => {
              return (
                <Grid item xs={12} sm={12} md={6} lg={4} key={subject?.id}>
                  <AssessmentSubjectCard {...subject} colorCode={colorCode} />
                </Grid>
              );
            })}
          </Grid>
        )}
      </Box>
    </Box>
  );
};
