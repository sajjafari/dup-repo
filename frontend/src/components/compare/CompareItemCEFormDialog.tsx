<<<<<<< HEAD
import React from "react";
import { Trans } from "react-i18next";
import { IDialogProps, TId } from "../../types";
=======
import React, { useMemo } from "react";
import { Trans } from "react-i18next";
import { IDialogProps } from "../../types";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
import { CEDialog, CEDialogActions } from "../shared/dialogs/CEDialog";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import FormProviderWithForm from "../shared/FormProviderWithForm";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
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
import { SelectFieldUC } from "../shared/fields/SelectField";
import useConnectSelectField from "../../utils/useConnectSelectField";
import { useServiceContext } from "../../providers/ServiceProvider";
import { ICustomError } from "../../utils/CustomError";
import toastError from "../../utils/toastError";
import setServerFieldErrors from "../../utils/setServerFieldError";
import Alert from "@mui/material/Alert";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Title from "../shared/Title";
import getStatusText from "../../utils/getStatusText";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)

interface ICompareItemCEFormDialog
  extends Omit<ICompareItemCEForm, "closeDialog"> {}

const CompareItemCEFormDialog = (props: ICompareItemCEFormDialog) => {
<<<<<<< HEAD
  const { onClose, context, open, openDialog, onSubmitForm, ...rest } = props;
=======
  const { onClose, context, open, openDialog, ...rest } = props;
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)

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
              <BorderColorRoundedIcon sx={{ mr: 1 }} />
              <Trans i18nKey="changeSelectedAssessment" />
=======
              <BorderColorRoundedIcon />
              <Trans i18nKey="changeAssessment" />
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
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
      <AlertBox severity="info">
        <Trans i18nKey="onlyAssessmentsWithEvaluatedStatus" />
      </AlertBox>
=======
      {/* <Alert severity="info">
        <Trans i18nKey="selectAssessmentForComparison" />
      </Alert> */}
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
      <CompareItemCEForm {...props} closeDialog={closeDialog} />
    </CEDialog>
  );
};

interface ICompareItemCEForm extends IDialogProps {
  closeDialog: () => void;
<<<<<<< HEAD
  index: number;
}

const CompareItemCEForm = (props: ICompareItemCEForm) => {
  const { closeDialog, context, open, index } = props;
  const { type, data } = context || {};
  const defaultValues = type === "update" ? data || {} : {};
  const formMethods = useForm({ shouldUnregister: true });
  const { assessmentIds, profile } = useCompareContext();
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
}

const CompareItemCEForm = (props: ICompareItemCEForm) => {
  const [loading, setLoading] = React.useState(false);
  const { service } = useServiceContext();
  const { closeDialog, context, onSubmitForm = () => {}, open } = props;
  const { type, data } = context || {};
  const defaultValues = type === "update" ? data || {} : {};
  const formMethods = useForm({ shouldUnregister: true });
  const abortController = useMemo(() => new AbortController(), [open]);

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      await service.saveCompareItem(data, { signal: abortController.signal });

      setLoading(false);
      onSubmitForm?.();
      closeDialog();
    } catch (e) {
      const err = e as ICustomError;
      setLoading(false);
      toastError(err);
      setServerFieldErrors(err, formMethods);
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
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
            required={true}
            autoFocus={true}
            name="assessmentId"
            defaultValue={defaultValues?.id || ""}
            label={<Trans i18nKey="assessment" />}
            size="medium"
            renderOption={(option) => {
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
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
                      <Title
                        size="small"
                        sup={option.space.title}
                        color={option?.color?.color_code || "#101c32"}
                      >
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
        loading={false}
=======
        loading={loading}
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
        type={type}
        submitButtonLabel={"addToCompareList"}
      />
    </FormProviderWithForm>
  );
};

<<<<<<< HEAD
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

=======
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
export default CompareItemCEFormDialog;
