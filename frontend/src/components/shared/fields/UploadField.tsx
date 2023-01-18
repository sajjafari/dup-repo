import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import React, { useCallback, useState } from "react";
import { Accept, DropEvent, FileRejection, useDropzone } from "react-dropzone";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
<<<<<<< HEAD
<<<<<<< HEAD
import { Box } from "@mui/material";
=======
import Box from "@mui/material/Box";
>>>>>>> 834bd68 (OTAT-252 Add uploader field)
=======
import { Box } from "@mui/material";
>>>>>>> 11a534e (OTAT-266 add Vite)
import CircularProgress from "@mui/material/CircularProgress";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import ListItemIcon from "@mui/material/ListItemIcon";
import FilePresentRoundedIcon from "@mui/icons-material/FilePresentRounded";
import { styles } from "../../../config/styles";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";
<<<<<<< HEAD
import { useServiceContext } from "../../../providers/ServiceProvider";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44b8524 (OTAT-294 Add edit to expert group)
import { TQueryServiceFunction, useQuery } from "../../../utils/useQuery";
=======
import { useQuery } from "../../../utils/useQuery";
>>>>>>> 834bd68 (OTAT-252 Add uploader field)
=======
import { TQueryServiceFunction, useQuery } from "../../../utils/useQuery";
>>>>>>> b8df8ab (OTAT-253 Add create profile dialog)
import toastError from "../../../utils/toastError";
import { t } from "i18next";
import { ICustomError } from "../../../utils/CustomError";
import {
  Controller,
  ControllerRenderProps,
  FieldErrorsImpl,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import formatBytes from "../../../utils/formatBytes";
import getFieldError from "../../../utils/getFieldError";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { Trans } from "react-i18next";
import getFileNameFromSrc from "../../../utils/getFileNameFromSrc";

interface IUploadFieldProps {
  name: string;
  label: string | JSX.Element;
  required?: boolean;
  defaultValue?: any;
  accept?: Accept;
  maxSize?: number;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  uploadService: TQueryServiceFunction<any, any>;
  deleteService: TQueryServiceFunction<any, any>;
=======
>>>>>>> 834bd68 (OTAT-252 Add uploader field)
=======
  uploadService: TQueryServiceFunction<any, any>;
  deleteService: TQueryServiceFunction<any, any>;
>>>>>>> b8df8ab (OTAT-253 Add create profile dialog)
=======
  uploadService?: TQueryServiceFunction<any, any>;
  deleteService?: TQueryServiceFunction<any, any>;
<<<<<<< HEAD
>>>>>>> 4a3d6ae (OTAT-292 Add create expert group form)
=======
  hideDropText?: boolean;
  shouldFetchFileInfo?: boolean;
  defaultValueType?: string;
>>>>>>> 44b8524 (OTAT-294 Add edit to expert group)
}

const UploadField = (props: IUploadFieldProps) => {
  const { name, required, defaultValue, ...rest } = props;

  const formMethods = useFormContext();
  const { control } = formMethods;
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      defaultValue={defaultValue}
      render={({ field, formState }) => {
        const { errors } = formState;
        return (
          <Uploader
            fieldProps={field}
            errors={errors}
            required={required}
            defaultValue={defaultValue}
            {...rest}
          />
        );
      }}
    />
  );
};

interface IUploadProps {
  fieldProps: ControllerRenderProps<FieldValues, string>;
  errors: FieldErrorsImpl<{
    [x: string]: any;
  }>;
  label: string | JSX.Element;
  accept?: Accept;
  maxSize?: number;
  required?: boolean;
<<<<<<< HEAD
  defaultValue?: any[];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  uploadService: TQueryServiceFunction<any, any>;
  deleteService: TQueryServiceFunction<any, any>;
=======
  uploadService?: TQueryServiceFunction<any, any>;
  deleteService?: TQueryServiceFunction<any, any>;
>>>>>>> 4a3d6ae (OTAT-292 Add create expert group form)
=======
  defaultValue?: any;
  uploadService?: TQueryServiceFunction<any, any>;
  deleteService?: TQueryServiceFunction<any, any>;
  hideDropText?: boolean;
  shouldFetchFileInfo?: boolean;
  defaultValueType?: string;
>>>>>>> 44b8524 (OTAT-294 Add edit to expert group)
}

const Uploader = (props: IUploadProps) => {
  const {
    fieldProps,
    errors,
    label,
    accept,
    maxSize,
    required,
    uploadService,
    deleteService,
    hideDropText,
    shouldFetchFileInfo = false,
    defaultValue = [],
    defaultValueType,
  } = props;

  const [myFiles, setMyFiles] = useState<
    (File | { src: string; name: string; type: string })[]
  >(
    shouldFetchFileInfo || !defaultValue
      ? []
      : typeof defaultValue === "string"
      ? ([
          {
            src: defaultValue,
            name: getFileNameFromSrc(defaultValue),
            type: defaultValueType || "",
          },
        ] as { src: string; name: string; type: string }[])
      : []
  );

  const uploadQueryProps = useQuery({
    service: uploadService || ((() => null) as any),
    runOnMount: false,
  });

  const deleteQueryProps = useQuery({
<<<<<<< HEAD
    service: deleteService,
=======
=======
  uploadService: TQueryServiceFunction<any, any>;
  deleteService: TQueryServiceFunction<any, any>;
>>>>>>> b8df8ab (OTAT-253 Add create profile dialog)
}

const Uploader = (props: IUploadProps) => {
  const {
    fieldProps,
    errors,
    label,
    accept,
    maxSize,
    required,
    uploadService,
    deleteService,
  } = props;

  const [myFiles, setMyFiles] = useState<File[]>([]);

  const uploadQueryProps = useQuery({
    service: uploadService,
    runOnMount: false,
  });

  const deleteQueryProps = useQuery({
<<<<<<< HEAD
    service: (args, config) => service.deleteProfilePhoto(args, config),
>>>>>>> 834bd68 (OTAT-252 Add uploader field)
=======
    service: deleteService,
>>>>>>> b8df8ab (OTAT-253 Add create profile dialog)
=======
    service: deleteService || ((() => null) as any),
>>>>>>> 4a3d6ae (OTAT-292 Add create expert group form)
    runOnMount: false,
  });

  const onDrop = useCallback(
    (acceptedFiles: any, fileRejections: FileRejection[], event: DropEvent) => {
      if (acceptedFiles?.[0]) {
        const reader = new FileReader();
        reader.onload = async () => {
          const binaryStr = reader.result;
          if (!uploadService) {
            setMyFiles(acceptedFiles);
            fieldProps.onChange(acceptedFiles?.[0]);
            return;
          }
          try {
            const res = await uploadQueryProps.query(binaryStr);
            setMyFiles(acceptedFiles);
            fieldProps.onChange(res);
          } catch (e) {
            toastError(e as ICustomError);
            setMyFiles([]);
            fieldProps.onChange("");
          }
        };

        reader.readAsArrayBuffer(acceptedFiles[0]);
      } else if (fileRejections.length > 0) {
        const errorMessage = fileRejections[0].errors[0]?.message;
        toastError(errorMessage);
      }
    },
    []
  );

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept,
    maxSize,
    onDrop,
    multiple: false,
    onDropRejected(rejectedFiles, event) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
      console.dir(rejectedFiles, event);
>>>>>>> 834bd68 (OTAT-252 Add uploader field)
=======
>>>>>>> b8df8ab (OTAT-253 Add create profile dialog)
      if (rejectedFiles.length > 1) {
        toastError(t("oneFileOnly") as string);
      }
    },
    onError(err) {
      toastError(err.message);
    },
  });

  const file = myFiles?.[0] || fieldProps.value?.[0];

  const loading = uploadQueryProps.loading || deleteQueryProps.loading;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b8df8ab (OTAT-253 Add create profile dialog)
  const isDownloadable =
    (!uploadQueryProps.loading &&
      !uploadQueryProps.error &&
      uploadQueryProps.data?.[fieldProps.name]) ||
    (file as any)?.[fieldProps.name];
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 44b8524 (OTAT-294 Add edit to expert group)
  const { errorMessage, hasError } = getFieldError(errors, fieldProps.name);
=======

  const { errorMessage, hasError } = getFieldError(errors, fieldProps.name);
  console.log(file);
>>>>>>> 834bd68 (OTAT-252 Add uploader field)
=======

  const { errorMessage, hasError } = getFieldError(errors, fieldProps.name);
>>>>>>> b8df8ab (OTAT-253 Add create profile dialog)
  return (
    <FormControl sx={{ width: "100%" }} error={hasError}>
      <Box
        sx={{
          minHeight: "40px",
          border: (t) =>
            `1px dashed ${hasError ? t.palette.error.main : "gray"}`,
          "&:hover": {
            border: (t) =>
              `1px solid ${hasError ? t.palette.error.dark : "black"} `,
          },
          borderRadius: 1,
          cursor: "pointer",
          width: "100%",
        }}
      >
        <Box minHeight={"40px"} display="flex" {...getRootProps()}>
          <input {...getInputProps()} name={fieldProps.name} />
          {file || loading ? (
            <List
              dense={true}
              sx={{ width: "100%" }}
              onClick={(e: any) => {
                loading && e.stopPropagation();
              }}
            >
              <ListItem
                disabled={loading}
                secondaryAction={
                  <Box
                    p={1}
                    sx={{ backgroundColor: "#ffffffc9", borderRadius: 1 }}
                  >
<<<<<<< HEAD
<<<<<<< HEAD
                    {isDownloadable && (
=======
                    {((!uploadQueryProps.loading &&
                      !uploadQueryProps.error &&
                      uploadQueryProps.data?.[fieldProps.name]) ||
                      (file as any)?.[fieldProps.name]) && (
>>>>>>> 834bd68 (OTAT-252 Add uploader field)
=======
                    {isDownloadable && (
>>>>>>> b8df8ab (OTAT-253 Add create profile dialog)
                      <IconButton
                        onClick={(e: any) => e.stopPropagation()}
                        sx={{ mr: 0.2 }}
                        component="a"
                        href={
                          uploadQueryProps.data?.[fieldProps.name] ||
                          (file as any)?.[fieldProps.name]
                        }
                        download={file.name}
                      >
                        <DownloadRoundedIcon fontSize="small" />
                      </IconButton>
                    )}
                    {loading && (
                      <IconButton edge="end" aria-label="delete">
                        <CircularProgress size="20px" />
                      </IconButton>
                    )}
                    {!loading && (
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={async (e) => {
                          e.stopPropagation();
                          if (!deleteService) {
                            setMyFiles([]);
                            fieldProps.onChange("");
                            return;
                          }
                          if (uploadQueryProps.error) {
                            setMyFiles([]);
                            return;
                          }
                          const id =
                            uploadQueryProps.data?.id ||
                            fieldProps.value?.[0]?.id;
                          if (!id) {
                            toastError(true);
                            return;
                          }
                          try {
                            await deleteQueryProps.query({
                              id,
                            });
                            setMyFiles([]);
                            fieldProps.onChange("");
                          } catch (e) {
                            toastError(e as ICustomError);
                          }
                        }}
                      >
                        <DeleteRoundedIcon fontSize="small" />
                      </IconButton>
                    )}
                  </Box>
                }
              >
                <ListItemIcon
                  sx={{
                    minWidth: "20px",
                    maxWidth: "40px",
                    maxHeight: "40px",
                    overflow: "hidden",
                    mr: 1.5,
                    display: { xs: "none", sm: "inline-flex" },
                  }}
                >
                  {file?.type?.includes("image") ? (
                    <Box
                      sx={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                      }}
                      component="img"
                      src={
                        (file as any).src || URL.createObjectURL(file as any)
                      }
                      alt={file.name}
                      title={file.name}
                    />
                  ) : (
                    <FilePresentRoundedIcon />
                  )}
                </ListItemIcon>
                <ListItemText
                  title={`${(acceptedFiles[0] || file)?.name} - ${
                    (acceptedFiles[0] || file)?.size
                      ? formatBytes((acceptedFiles[0] || file)?.size)
                      : ""
                  }`}
                  primaryTypographyProps={{
                    sx: { ...styles.ellipsis, width: "95%" },
                  }}
                  primary={<>{(acceptedFiles[0] || file)?.name}</>}
                  secondary={
                    <>
                      {(acceptedFiles[0] || file)?.size
                        ? formatBytes((acceptedFiles[0] || file)?.size)
                        : null}
                    </>
                  }
                />
              </ListItem>
            </List>
          ) : (
            <>
              <FormLabel
                sx={{
                  ...styles.centerV,
                  pl: 2,
                  height: "40px",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
                required={required}
              >
                {label}
              </FormLabel>
              <Box
                sx={{
                  marginLeft: "auto",
                  px: 2,
                  ...styles.centerV,
                  color: (t) => t.palette.info.dark,
                }}
              >
                <FileUploadRoundedIcon sx={{ mr: hideDropText ? 0 : 1 }} />
                {!hideDropText && (
                  <>
                    {" "}
                    <Trans i18nKey="dropYourFileHere" />
                  </>
                )}
              </Box>
            </>
          )}
        </Box>
      </Box>
      <FormHelperText>{errorMessage as string}</FormHelperText>
    </FormControl>
  );
};

export default UploadField;
