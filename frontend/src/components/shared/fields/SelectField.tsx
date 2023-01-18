import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel, { InputLabelProps } from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectProps } from "@mui/material/Select";
import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { useFormContext, UseFormRegister } from "react-hook-form";
import getFieldError from "../../../utils/getFieldError";
import ColorLensRoundedIcon from "@mui/icons-material/ColorLensRounded";
import { Box } from "@mui/material";
=======
import { useFormContext } from "react-hook-form";
=======
import { useFormContext, UseFormRegister } from "react-hook-form";
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
import getFieldError from "../../../utils/getFieldError";
import ColorLensRoundedIcon from "@mui/icons-material/ColorLensRounded";
import Box from "@mui/material/Box";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
import { styles } from "../../../config/styles";
import { LoadingSkeleton } from "../loadings/LoadingSkeleton";

const selectField = () => {
  return <div>selectField</div>;
};

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
interface ISelectFieldUC extends ISelectField {}

const SelectFieldUC = (props: ISelectFieldUC) => {
  const { name, ...rest } = props;

  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { hasError, errorMessage } = getFieldError(errors, name);

  return (
    <SelectField
      {...rest}
      name={name}
      register={register}
      helperText={errorMessage as string}
      error={hasError}
    />
  );
};

interface ISelectField extends SelectProps {
<<<<<<< HEAD
  renderOption?: (option: any) => JSX.Element;
  InputLabelProps?: InputLabelProps;
  helperText?: string | JSX.Element | Element;
=======
interface ISelectFieldUC extends SelectProps {
  renderOption?: (option: any) => JSX.Element;
  InputLabelProps?: InputLabelProps;
  helperText?: string | JSX.Element;
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
  renderOption?: (option: any) => JSX.Element;
  InputLabelProps?: InputLabelProps;
  helperText?: string | JSX.Element | Element;
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
  options: any[];
  nullable?: boolean;
  name: string;
  size?: "small" | "medium" | undefined;
  loading?: boolean;
  renderLoading?: () => JSX.Element;
<<<<<<< HEAD
<<<<<<< HEAD
  error?: boolean;
  fetchOptions?: any;
  register?: UseFormRegister<any>;
}

export const SelectField = (props: ISelectField) => {
=======
}

const SelectFieldUC = (props: ISelectFieldUC) => {
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
  error?: boolean;
  fetchOptions?: any;
  register?: UseFormRegister<any>;
}

export const SelectField = (props: ISelectField) => {
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
  const {
    name,
    required,
    InputLabelProps = {},
    helperText = null,
    defaultValue = "",
    label,
    options = [],
    nullable = true,
    size = "small",
    loading = false,
    renderOption = defaultRenderOption,
    renderLoading = defaultRenderLoading,
<<<<<<< HEAD
<<<<<<< HEAD
    fetchOptions,
    error,
    register,
=======
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
    fetchOptions,
    error,
    register,
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
    ...rest
  } = props;

  const selectOptions = nullable
    ? [{ id: "", title: "---" }, ...options]
    : options;
<<<<<<< HEAD
<<<<<<< HEAD

  return (
    <FormControl fullWidth error={error} size={size} variant="outlined">
=======
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { hasError, errorMessage } = getFieldError(errors, name);
=======
>>>>>>> 671bfb7 (OTAT-212 Add compare page)

  console.log(defaultValue);
  return (
<<<<<<< HEAD
    <FormControl fullWidth error={hasError} size={size} variant="outlined">
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
    <FormControl fullWidth error={error} size={size} variant="outlined">
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
      <InputLabel
        required={required}
        id={`select_label_id_${name}`}
        sx={{ backgroundColor: "white", pl: "4px", pr: "4px" }}
      >
        {label}
      </InputLabel>
      <Select
        {...rest}
<<<<<<< HEAD
<<<<<<< HEAD
        {...(register ? register(name, { required }) : {})}
        defaultValue={defaultValue}
        labelId={`select_label_id_${name}`}
=======
        defaultValue={defaultValue}
        labelId={`select_label_id_${name}`}
        {...register(name, { required })}
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
        {...(register ? register(name, { required }) : {})}
        defaultValue={defaultValue}
        labelId={`select_label_id_${name}`}
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
        sx={{
          ...(rest?.sx || {}),
          "& .MuiSelect-select": { display: "flex", alignItems: "center" },
        }}
      >
        {loading
          ? renderLoading()
          : selectOptions.map((option: any) => {
              return renderOption(option);
            })}
      </Select>
<<<<<<< HEAD
<<<<<<< HEAD
      {helperText && <FormHelperText>{helperText as any}</FormHelperText>}
=======
      {(errorMessage || helperText) && (
        <FormHelperText>{(errorMessage || helperText) as any}</FormHelperText>
      )}
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
      {helperText && <FormHelperText>{helperText as any}</FormHelperText>}
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
    </FormControl>
  );
};

const ColorOption = ({ value }: { value: string }) => {
  return (
    <Box sx={{ ...styles.centerVH }} color={value} mr={1}>
      <ColorLensRoundedIcon color="inherit" fontSize="small" />
    </Box>
  );
};

const defaultRenderOption = (option: any) => {
  return (
    <MenuItem
      value={option.id}
      key={option.id}
      sx={{ display: "flex", alignItems: "center" }}
    >
      {option.color_code ? <ColorOption value={option.color_code} /> : null}
      {option.title}
    </MenuItem>
  );
};

const defaultRenderLoading = () => {
  return [1, 2, 3, 4].map((index) => {
    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <Box m={0.5} key={index}>
        <LoadingSkeleton sx={{ borderRadius: 1 }} height="36px" width="100%" />
=======
      <Box m={0.5}>
        <LoadingSkeleton
          key={index}
          sx={{ borderRadius: 1 }}
          height="36px"
          width="100%"
        />
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
      <Box m={0.5} key={index}>
        <LoadingSkeleton sx={{ borderRadius: 1 }} height="36px" width="100%" />
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
      </Box>
    );
  });
};

export { selectField, SelectFieldUC };
