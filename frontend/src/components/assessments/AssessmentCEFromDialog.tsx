import React, { useEffect, useMemo } from "react";
import Grid from "@mui/material/Grid";
import { DialogProps } from "@mui/material/Dialog";
import { useForm } from "react-hook-form";
import { Trans } from "react-i18next";
import { InputFieldUC } from "../../components/shared/fields/InputField";
import { SelectFieldUC } from "../shared/fields/SelectField";
import { styles } from "../../config/styles";
import { useServiceContext } from "../../providers/ServiceProvider";
import setServerFieldErrors from "../../utils/setServerFieldError";
import useConnectSelectField from "../../utils/useConnectSelectField";
import NoteAddRoundedIcon from "@mui/icons-material/NoteAddRounded";
import { ICustomError } from "../../utils/CustomError";
<<<<<<< HEAD
<<<<<<< HEAD
import { Link, useParams } from "react-router-dom";
import toastError from "../../utils/toastError";
import { CEDialog, CEDialogActions } from "../../components/shared/dialogs/CEDialog";
import FormProviderWithForm from "../../components/shared/FormProviderWithForm";
import AutocompleteAsyncField, { useConnectAutocompleteField } from "../shared/fields/AutocompleteAsyncField";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
=======
import { useParams } from "react-router-dom";
=======
import { Link, useParams } from "react-router-dom";
>>>>>>> 6640d72 (OTAT-154 Add profile page)
import toastError from "../../utils/toastError";
import {
  CEDialog,
  CEDialogActions,
} from "../../components/shared/dialogs/CEDialog";
import FormProviderWithForm from "../../components/shared/FormProviderWithForm";
<<<<<<< HEAD
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
import AutocompleteAsyncField, {
  useConnectAutocompleteField,
} from "../shared/fields/AutocompleteAsyncField";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
>>>>>>> 6640d72 (OTAT-154 Add profile page)

interface IAssessmentCEFromDialogProps extends DialogProps {
  onClose: () => void;
  onSubmitForm: () => void;
  openDialog?: any;
  context?: any;
}

const AssessmentCEFromDialog = (props: IAssessmentCEFromDialogProps) => {
  const [loading, setLoading] = React.useState(false);
  const { service } = useServiceContext();
<<<<<<< HEAD
  const { onClose: closeDialog, onSubmitForm, context = {}, openDialog, ...rest } = props;
=======
  const {
    onClose: closeDialog,
    onSubmitForm,
    context = {},
    openDialog,
    ...rest
  } = props;
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
  const { type, data = {} } = context;
  const { id: rowId } = data;
  const defaultValues = type === "update" ? data : {};
  const { spaceId } = useParams();
  const formMethods = useForm({ shouldUnregister: true });
  const abortController = useMemo(() => new AbortController(), [rest.open]);
  const close = () => {
    abortController.abort();
    closeDialog();
  };

  useEffect(() => {
    return () => {
      abortController.abort();
    };
  }, []);

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const { data: res } =
        type === "update"
<<<<<<< HEAD
          ? await service.updateAssessment({ rowId, data: { space: spaceId, ...data } }, { signal: abortController.signal })
          : await service.createAssessment({ data: { space: spaceId, ...data } }, { signal: abortController.signal });
=======
          ? await service.updateAssessment(
              { rowId, data: { space: spaceId, ...data } },
              { signal: abortController.signal }
            )
          : await service.createAssessment(
              { data: { space: spaceId, ...data } },
              { signal: abortController.signal }
            );
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
      setLoading(false);
      onSubmitForm();
      close();
    } catch (e) {
      const err = e as ICustomError;
      setLoading(false);
      setServerFieldErrors(err, formMethods);
      toastError(err);
    }
  };

  return (
    <CEDialog
      {...rest}
      closeDialog={close}
      title={
        <>
          <NoteAddRoundedIcon sx={{ mr: 1 }} />
<<<<<<< HEAD
          {type === "update" ? <Trans i18nKey="updateAssessment" /> : <Trans i18nKey="createAssessment" />}
        </>
      }
    >
      <FormProviderWithForm formMethods={formMethods} onSubmit={formMethods.handleSubmit(onSubmit)}>
=======
          {type === "update" ? (
            <Trans i18nKey="updateAssessment" />
          ) : (
            <Trans i18nKey="createAssessment" />
          )}
        </>
      }
    >
      <FormProviderWithForm
        formMethods={formMethods}
        onSubmit={formMethods.handleSubmit(onSubmit)}
      >
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
        <Grid container spacing={2} sx={styles.formGrid}>
          <Grid item xs={12} md={8}>
            <InputFieldUC
              autoFocus={true}
              defaultValue={defaultValues.title || ""}
              name="title"
              required={true}
              label={<Trans i18nKey="title" />}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SelectFieldUC
<<<<<<< HEAD
<<<<<<< HEAD
              {...useConnectSelectField({ url: "/assessment/colors/" })}
=======
              {...useConnectSelectField("/assessment/colors/")}
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
              {...useConnectSelectField({ url: "/assessment/colors/" })}
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
              name="color"
              defaultValue={defaultValues?.color?.id || ""}
              label={<Trans i18nKey="color" />}
            />
          </Grid>
<<<<<<< HEAD
<<<<<<< HEAD
          <Grid item xs={12}>
            <ProfileField defaultValue={defaultValues?.assessment_profile} />
          </Grid>
=======
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
          <Grid item xs={12}>
            <ProfileField defaultValue={defaultValues?.assessment_profile} />
          </Grid>
>>>>>>> 6640d72 (OTAT-154 Add profile page)
        </Grid>
        <CEDialogActions closeDialog={close} loading={loading} type={type} />
      </FormProviderWithForm>
    </CEDialog>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
const ProfileField = ({ defaultValue }: { defaultValue: any }) => {
=======
const ProfileField = ({
  defaultValue = { title: "Common profile", id: 6 },
}: {
  defaultValue: any;
}) => {
>>>>>>> 6640d72 (OTAT-154 Add profile page)
  const { service } = useServiceContext();
  const queryData = useConnectAutocompleteField({
    service: (args, config) => service.fetchProfiles(args, config),
  });

  return (
    <AutocompleteAsyncField
      {...queryData}
      name="profile"
      required={true}
      defaultValue={defaultValue}
      label={<Trans i18nKey="profile" />}
    />
  );
};

<<<<<<< HEAD
=======
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
>>>>>>> 6640d72 (OTAT-154 Add profile page)
export default AssessmentCEFromDialog;
