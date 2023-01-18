<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { Trans } from "react-i18next";
import { IDialogProps, TId } from "../../types";
=======
import React, { useMemo } from "react";
import { Trans } from "react-i18next";
import { IDialogProps } from "../../types";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
import React from "react";
import { Trans } from "react-i18next";
import { IDialogProps, TId } from "../../types";
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
import { CEDialog, CEDialogActions } from "../shared/dialogs/CEDialog";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import FormProviderWithForm from "../shared/FormProviderWithForm";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
<<<<<<< HEAD
<<<<<<< HEAD
import { styles } from "../../config/styles";
import { SelectFieldUC } from "../shared/fields/SelectField";
import useConnectSelectField from "../../utils/useConnectSelectField";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";
import Chip from "@mui/material/Chip";
import Title from "../shared/Title";
import {
  compareActions,
  useCompareContext,
  useCompareDispatch,
} from "../../providers/CompareProvider";
import hasStatus from "../../utils/hasStatus";
import AlertBox from "../shared/AlertBox";
=======
import { useParams } from "react-router-dom";
import { getColorOfStatus, styles } from "../../config/styles";
=======
import { styles } from "../../config/styles";
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
import { SelectFieldUC } from "../shared/fields/SelectField";
import useConnectSelectField from "../../utils/useConnectSelectField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Title from "../shared/Title";
<<<<<<< HEAD
import getStatusText from "../../utils/getStatusText";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
import {
  compareActions,
  useCompareContext,
  useCompareDispatch,
} from "../../providers/CompareProvider";
>>>>>>> 671bfb7 (OTAT-212 Add compare page)

interface ICompareItemCEFormDialog
  extends Omit<ICompareItemCEForm, "closeDialog"> {}

const CompareItemCEFormDialog = (props: ICompareItemCEFormDialog) => {
<<<<<<< HEAD
<<<<<<< HEAD
  const { onClose, context, open, openDialog, onSubmitForm, ...rest } = props;
=======
  const { onClose, context, open, openDialog, ...rest } = props;
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
  const { onClose, context, open, openDialog, onSubmitForm, ...rest } = props;
>>>>>>> 671bfb7 (OTAT-212 Add compare page)

  const closeDialog = () => {
    onClose();
  };

  return (
    <CEDialog
      {...rest}
      open={open}
      closeDialog={closeDialog}
      title={
        <>
          {context?.type === "update" ? (
            <>
<<<<<<< HEAD
<<<<<<< HEAD
              <BorderColorRoundedIcon sx={{ mr: 1 }} />
              <Trans i18nKey="changeSelectedAssessment" />
=======
              <BorderColorRoundedIcon />
              <Trans i18nKey="changeAssessment" />
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
              <BorderColorRoundedIcon sx={{ mr: 1 }} />
              <Trans i18nKey="changeSelectedAssessment" />
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
            </>
          ) : (
            <>
              <AddBoxRoundedIcon sx={{ mr: 1 }} />
              <Trans i18nKey="selectAssessment" />
            </>
          )}
        </>
      }
    >
<<<<<<< HEAD
<<<<<<< HEAD
      <AlertBox severity="info">
        <Trans i18nKey="onlyAssessmentsWithEvaluatedStatus" />
      </AlertBox>
=======
      {/* <Alert severity="info">
        <Trans i18nKey="selectAssessmentForComparison" />
      </Alert> */}
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
      <CompareItemCEForm {...props} closeDialog={closeDialog} />
    </CEDialog>
  );
};

interface ICompareItemCEForm extends IDialogProps {
  closeDialog: () => void;
<<<<<<< HEAD
<<<<<<< HEAD
  index: number;
}

const CompareItemCEForm = (props: ICompareItemCEForm) => {
  const { closeDialog, context, open, index } = props;
  const { type, data } = context || {};
  const defaultValues = type === "update" ? data || {} : {};
  const formMethods = useForm({ shouldUnregister: true });
  const { assessmentIds, profile } = useCompareContext();
<<<<<<< HEAD
  const dispatch = useCompareDispatch();

  const onSubmit = (data: any) => {
    try {
      const newAssessmentIds = addToAssessmentIds(
        data.assessmentId,
        assessmentIds,
        index
      );
      dispatch(compareActions.setAssessmentIds(newAssessmentIds));
      closeDialog();
    } catch (e) {
      closeDialog();
=======
=======
  index: number;
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
}

const CompareItemCEForm = (props: ICompareItemCEForm) => {
  const { closeDialog, context, open, index } = props;
  const { type, data } = context || {};
  const defaultValues = type === "update" ? data || {} : {};
  const formMethods = useForm({ shouldUnregister: true });
  const { assessmentIds } = useCompareContext();
=======
>>>>>>> c865200 (OTAT-212 Add compare result page)
  const dispatch = useCompareDispatch();

  const onSubmit = (data: any) => {
    try {
      const newAssessmentIds = addToAssessmentIds(
        data.assessmentId,
        assessmentIds,
        index
      );
      dispatch(compareActions.setAssessmentIds(newAssessmentIds));
      closeDialog();
    } catch (e) {
<<<<<<< HEAD
      const err = e as ICustomError;
      setLoading(false);
      toastError(err);
      setServerFieldErrors(err, formMethods);
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
      closeDialog();
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
    }
  };

  return (
    <FormProviderWithForm
      formMethods={formMethods}
      onSubmit={formMethods.handleSubmit(onSubmit)}
    >
      <Grid container spacing={2} sx={{ ...styles.formGrid, pt: 0, mt: 0 }}>
        <Grid item xs={12}>
          <SelectFieldUC
<<<<<<< HEAD
<<<<<<< HEAD
            {...useConnectSelectField({
              url: `/assessment/currentuserprojects/`,
              searchParams: { profile_id: profile?.id },
              filterOptions: (options) =>
                options.filter(
                  (option) =>
                    (!assessmentIds.includes(option?.id) ||
                      option?.id == defaultValues?.id) &&
                    hasStatus(option.status)
                ),
            })}
            required={true}
            autoFocus={true}
            name="assessmentId"
            defaultValue={defaultValues.id || ""}
            label={<Trans i18nKey="assessment" />}
            size="medium"
            renderOption={(option = {}) => {
=======
            {...useConnectSelectField(`/assessment/currentuserprojects/`)}
=======
            {...useConnectSelectField({
              url: `/assessment/currentuserprojects/`,
              filterOptions: (options) =>
                options.filter(
                  (option) =>
                    !assessmentIds.includes(option?.id) ||
                    option?.id == defaultValues?.id
                ),
            })}
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
            required={true}
            autoFocus={true}
            name="assessmentId"
            defaultValue={defaultValues.id || ""}
            label={<Trans i18nKey="assessment" />}
            size="medium"
<<<<<<< HEAD
            renderOption={(option) => {
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
            renderOption={(option = {}) => {
              console.log("opt", option.id);
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
              return (
                <MenuItem
                  value={option.id}
                  key={option.id}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  {option.id === "" ? (
                    option.title
                  ) : (
                    <>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
                      <Title
                        size="small"
                        sup={option.space.title}
                        color={option?.color?.color_code || "#101c32"}
                      >
<<<<<<< HEAD
                        {option.title}
                      </Title>
                      <Box ml="auto" sx={{ ...styles.centerV }}>
                        <Chip
                          label={option.assessment_profile.title}
                          size="small"
                        />
=======
                      <Title size="small" sup={option.space.title}>
                        {option.title}
                      </Title>
                      <Box ml="auto" sx={{ ...styles.centerV }}>
                        <Typography
                          sx={{
                            mr: 1,
                          }}
                          variant="body2"
                        >
                          <Trans i18nKey={"statusIsEvaluatedAs"} />
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: getColorOfStatus(option.status),
                            fontSize: "1.01rem",
                          }}
                        >
                          {getStatusText(option.status, true)}
                        </Typography>
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
                        {option.title}
                      </Title>
                      <Box ml="auto" sx={{ ...styles.centerV }}>
                        <Chip
                          label={option.assessment_profile.title}
                          size="small"
                        />
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
                      </Box>
                    </>
                  )}
                </MenuItem>
              );
            }}
          />
        </Grid>
      </Grid>
      <CEDialogActions
        closeDialog={closeDialog}
<<<<<<< HEAD
<<<<<<< HEAD
        loading={false}
=======
        loading={loading}
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
        loading={false}
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
        type={type}
        submitButtonLabel={"addToCompareList"}
      />
    </FormProviderWithForm>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
const addToAssessmentIds = (
  assessmentId: TId,
  assessmentIds: TId[],
  index: number
) => {
  const newAssessmentIds: TId[] = assessmentIds;
  if (assessmentIds[index] && assessmentIds[index] == assessmentId) {
    return assessmentIds;
  }
  newAssessmentIds[index] = assessmentId;
  return newAssessmentIds;
};

<<<<<<< HEAD
=======
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
export default CompareItemCEFormDialog;
