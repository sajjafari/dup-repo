import React, { useEffect, useMemo } from "react";
import Grid from "@mui/material/Grid";
import { DialogProps } from "@mui/material/Dialog";
import { useForm } from "react-hook-form";
import { Trans } from "react-i18next";
import { InputFieldUC } from "../shared/fields/InputField";
import { SelectFieldUC } from "../shared/fields/SelectField";
import { styles } from "../../config/styles";
import { useServiceContext } from "../../providers/ServiceProvider";
import setServerFieldErrors from "../../utils/setServerFieldError";
import useConnectSelectField from "../../utils/useConnectSelectField";
import NoteAddRoundedIcon from "@mui/icons-material/NoteAddRounded";
import { ICustomError } from "../../utils/CustomError";
import { Link, useNavigate, useParams } from "react-router-dom";
import toastError from "../../utils/toastError";
import { CEDialog, CEDialogActions } from "../shared/dialogs/CEDialog";
import FormProviderWithForm from "../shared/FormProviderWithForm";
import AutocompleteAsyncField, {
  useConnectAutocompleteField,
} from "../shared/fields/AutocompleteAsyncField";
import UploadField from "../shared/fields/UploadField";

interface IProfileCEFromDialogProps extends DialogProps {
  onClose: () => void;
  onSubmitForm: () => void;
  openDialog?: any;
  context?: any;
}

const ProfileCEFromDialog = (props: IProfileCEFromDialogProps) => {
  const [loading, setLoading] = React.useState(false);
  const { service } = useServiceContext();
  const {
    onClose: closeDialog,
    onSubmitForm,
    context = {},
    openDialog,
    ...rest
  } = props;
  const { type, data = {} } = context;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const { id } = data;
=======
  const { expertGroupId: fallbackExpertGroupId } = useParams();
  const { id, expertGroupId = fallbackExpertGroupId } = data;
>>>>>>> aa86b5d (OTAT-301 Moved create profile to expert group)
  const defaultValues = type === "update" ? data : {};
=======
  const { id: rowId } = data;
  const defaultValues = type === "update" ? data : {};
  const { spaceId } = useParams();
>>>>>>> b8df8ab (OTAT-253 Add create profile dialog)
=======
  const { id } = data;
  const defaultValues = type === "update" ? data : {};
>>>>>>> 443adbc (OTAT-253 Add delete profile)
  const formMethods = useForm({ shouldUnregister: true });
  const abortController = useMemo(() => new AbortController(), [rest.open]);
  const navigate = useNavigate();
  const close = () => {
    abortController.abort();
    closeDialog();
  };

  useEffect(() => {
    return () => {
      abortController.abort();
    };
  }, []);

<<<<<<< HEAD
  const onSubmit = async (data: any) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 443adbc (OTAT-253 Add delete profile)
=======
  const onSubmit = async (data: any, event: any, shouldView?: boolean) => {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2a2dbf5 (OTAT-288 Add create and view btn)
    const formattedData = { dsl_id: data.dsl_id.id };
=======
    const { dsl_id, tags, ...restOfData } = data;
=======
=======
    event.preventDefault();
>>>>>>> 4a3d6ae (OTAT-292 Add create expert group form)
    const { dsl_id, tags = [], ...restOfData } = data;
>>>>>>> ea630b6 (OTAT-288 Fix shouldNavigate arg passing)
    const formattedData = {
      dsl_id: dsl_id.id,
      tag_ids: tags.map((t: any) => t.id),
      expert_group_id: expertGroupId,
      ...restOfData,
    };
>>>>>>> 1bdba36 (OTAT-284 Add tags field to profile create from)
    setLoading(true);
    try {
      const { data: res } =
        type === "update"
          ? await service.updateProfile(
              { data: formattedData, id },
              { signal: abortController.signal }
            )
          : await service.createProfile(
              { data: formattedData },
              { signal: abortController.signal }
            );
      setLoading(false);
      onSubmitForm();
      close();
      shouldView && res?.id && navigate(`${res.id}`);
    } catch (e) {
      const err = e as ICustomError;
      setLoading(false);
      setServerFieldErrors(err, formMethods);
      toastError(err);
    }
<<<<<<< HEAD
=======
    console.log(data);
    // setLoading(true);
    // try {
    //   const { data: res } =
    //     type === "update"
    //       ? await service.updateProfile(
    //           { rowId, data: { space: spaceId, ...data } },
    //           { signal: abortController.signal }
    //         )
    //       : await service.createProfile(
    //           { data: { space: spaceId, ...data } },
    //           { signal: abortController.signal }
    //         );
    //   setLoading(false);
    //   onSubmitForm();
    //   close();
    // } catch (e) {
    //   const err = e as ICustomError;
    //   setLoading(false);
    //   setServerFieldErrors(err, formMethods);
    //   toastError(err);
    // }
>>>>>>> b8df8ab (OTAT-253 Add create profile dialog)
=======
>>>>>>> 443adbc (OTAT-253 Add delete profile)
  };

  return (
    <CEDialog
      {...rest}
      closeDialog={close}
      title={
        <>
          <NoteAddRoundedIcon sx={{ mr: 1 }} />
          {type === "update" ? (
            <Trans i18nKey="updateProfile" />
          ) : (
            <Trans i18nKey="createProfile" />
          )}
        </>
      }
    >
      <FormProviderWithForm formMethods={formMethods}>
        <Grid container spacing={2} sx={styles.formGrid}>
          <Grid item xs={12}>
            <UploadField
<<<<<<< HEAD
<<<<<<< HEAD
              accept={{ "application/zip": [".zip"] }}
              uploadService={(args, config) =>
                service.uploadProfileDSL(args, config)
              }
              deleteService={(args, config) =>
                service.deleteProfileDSL(args, config)
              }
              name="dsl_id"
=======
=======
              accept={{ "application/zip": [".zip"] }}
>>>>>>> 443adbc (OTAT-253 Add delete profile)
              uploadService={(args, config) =>
                service.uploadProfileDSL(args, config)
              }
              deleteService={(args, config) =>
                service.deleteProfileDSL(args, config)
              }
<<<<<<< HEAD
              name="image"
>>>>>>> b8df8ab (OTAT-253 Add create profile dialog)
=======
              name="dsl_id"
>>>>>>> 443adbc (OTAT-253 Add delete profile)
              required={true}
              label={<Trans i18nKey="dsl" />}
            />
          </Grid>
          <Grid item xs={12}>
            <AutocompleteAsyncField
              {...useConnectAutocompleteField({
                service: (args, config) =>
                  service.fetchProfileTags(args, config),
              })}
              name="tags"
              multiple={true}
              searchOnType={false}
              label={<Trans i18nKey="tags" />}
            />
          </Grid>
        </Grid>
        <CEDialogActions
          closeDialog={close}
          loading={loading}
          type={type}
          hasViewBtn={true}
          onSubmit={(...args) =>
            formMethods.handleSubmit((data) => onSubmit(data, ...args))
          }
        />
      </FormProviderWithForm>
    </CEDialog>
  );
};

export default ProfileCEFromDialog;
