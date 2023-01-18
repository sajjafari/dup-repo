<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { ReactNode, useEffect, useState } from "react";
=======
import React, { ReactNode, useEffect, useRef, useState } from "react";
>>>>>>> 1bdba36 (OTAT-284 Add tags field to profile create from)
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
import throttle from "lodash/throttle";
import TextField from "@mui/material/TextField";
import { TQueryServiceFunction, useQuery } from "../../../utils/useQuery";
import {
  Controller,
  ControllerRenderProps,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";
import getFieldError from "../../../utils/getFieldError";
import { Box } from "@mui/material";
=======
import React, { ReactNode, useEffect } from "react";
=======
import React, { ReactNode, useEffect, useState } from "react";
>>>>>>> f325683 (OTAT-286 Fix profile filed default value setter)
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
import throttle from "lodash/throttle";
import TextField from "@mui/material/TextField";
import { TQueryServiceFunction, useQuery } from "../../../utils/useQuery";
import { Controller, ControllerRenderProps, RegisterOptions, useFormContext } from "react-hook-form";
import getFieldError from "../../../utils/getFieldError";
import { Box } from "@mui/material";
<<<<<<< HEAD
import Skeleton from "@mui/material/Skeleton";
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
>>>>>>> f325683 (OTAT-286 Fix profile filed default value setter)
import { LoadingSkeleton } from "../loadings/LoadingSkeleton";
import forLoopComponent from "../../../utils/forLoop";
import ErrorDataLoading from "../errors/ErrorDataLoading";
import { styles } from "../../../config/styles";
import { TQueryProps } from "../../../types";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
type TUnionAutocompleteAndAutocompleteAsyncFieldBase = Omit<IAutocompleteAsyncFieldBase, "serviceQueryData" | "field">;
=======
type TUnionAutocompleteAndAutocompleteAsyncFieldBase = Omit<
  IAutocompleteAsyncFieldBase,
  "serviceQueryData" | "field"
>;
>>>>>>> 40b97fc (OTAT-182 Add document title related to pages)

interface IAutocompleteAsyncFieldProps<T>
  extends TUnionAutocompleteAndAutocompleteAsyncFieldBase {
  rules?: Omit<
    RegisterOptions<any, any>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}

const AutocompleteAsyncField = <T extends any = any>(
  props: IAutocompleteAsyncFieldProps<T> & Omit<TQueryProps, "data">
) => {
  const { name, rules = {}, defaultValue, required = false, ...rest } = props;
  const { control, setValue } = useFormContext();
  const { options } = rest;
=======
type TUnionAutocompleteAndAutocompleteAsyncFieldBase = Omit<
  IAutocompleteAsyncFieldBase,
  "serviceQueryData" | "field"
>;
=======
type TUnionAutocompleteAndAutocompleteAsyncFieldBase = Omit<IAutocompleteAsyncFieldBase, "serviceQueryData" | "field">;
>>>>>>> f325683 (OTAT-286 Fix profile filed default value setter)

interface IAutocompleteAsyncFieldProps<T> extends TUnionAutocompleteAndAutocompleteAsyncFieldBase {
  rules?: Omit<RegisterOptions<any, any>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
}

<<<<<<< HEAD
const AutocompleteAsyncField = <T extends any = any>(
  props: IAutocompleteAsyncFieldProps<T> & Omit<TQueryProps, "data">
) => {
  const {
    name,
    rules = {},
    defaultValue = null,
    required = false,
    ...rest
  } = props;
  const { control } = useFormContext();
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
const AutocompleteAsyncField = <T extends any = any>(props: IAutocompleteAsyncFieldProps<T> & Omit<TQueryProps, "data">) => {
  const { name, rules = {}, defaultValue, required = false, ...rest } = props;
  const { control, setValue } = useFormContext();
  const { options } = rest;
>>>>>>> f325683 (OTAT-286 Fix profile filed default value setter)

  return (
    <Controller
      name={name}
      control={control}
      rules={{ ...rules, required }}
      shouldUnregister={true}
      defaultValue={defaultValue}
      render={({ field, fieldState, formState }) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        return <AutocompleteBaseField {...rest} name={name} required={required} field={field} defaultValue={defaultValue} />;
=======
=======
>>>>>>> 40b97fc (OTAT-182 Add document title related to pages)
        return (
          <AutocompleteBaseField
            {...rest}
            name={name}
            required={required}
            field={field}
            defaultValue={defaultValue}
          />
        );
<<<<<<< HEAD
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
        return <AutocompleteBaseField {...rest} name={name} required={required} field={field} defaultValue={defaultValue} />;
>>>>>>> f325683 (OTAT-286 Fix profile filed default value setter)
=======
>>>>>>> 40b97fc (OTAT-182 Add document title related to pages)
      }}
    />
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
interface IAutocompleteAsyncFieldBase extends Omit<AutocompleteProps<any, any, any, any>, "renderInput"> {
=======
interface IAutocompleteAsyncFieldBase
  extends Omit<AutocompleteProps<any, any, any, any>, "renderInput"> {
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
interface IAutocompleteAsyncFieldBase extends Omit<AutocompleteProps<any, any, any, any>, "renderInput"> {
>>>>>>> f325683 (OTAT-286 Fix profile filed default value setter)
=======
interface IAutocompleteAsyncFieldBase
  extends Omit<AutocompleteProps<any, any, any, any>, "renderInput"> {
>>>>>>> 40b97fc (OTAT-182 Add document title related to pages)
  field: ControllerRenderProps<any, any>;
  formatRequest?: (request: any) => any;
  name: string;
  helperText?: ReactNode;
  label: string | JSX.Element;
  filterSelectedOption?: (options: readonly any[], value: any) => any[];
  required?: boolean;
  searchOnType?: boolean;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const AutocompleteBaseField = (props: IAutocompleteAsyncFieldBase & Omit<TQueryProps, "data">) => {
=======
const AutocompleteBaseField = (
  props: IAutocompleteAsyncFieldBase & Omit<TQueryProps, "data">
) => {
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
const AutocompleteBaseField = (props: IAutocompleteAsyncFieldBase & Omit<TQueryProps, "data">) => {
>>>>>>> f325683 (OTAT-286 Fix profile filed default value setter)
=======
const AutocompleteBaseField = (
  props: IAutocompleteAsyncFieldBase & Omit<TQueryProps, "data">
) => {
>>>>>>> 40b97fc (OTAT-182 Add document title related to pages)
  const {
    field,
    formatRequest = (request) => request,
    helperText,
    label,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    getOptionLabel = (option) => (typeof option === "string" ? option : option?.title || null),
    filterSelectedOption = (options: readonly any[], value: any): any[] =>
      value ? options.filter((option) => option?.id != value?.id) : (options as any[]),
=======
    getOptionLabel = (option) =>
      typeof option === "string" ? option : option?.title || null,
    filterSelectedOption = (options: readonly any[], value: any): any[] =>
      value
        ? options.filter((option) => option?.id != value?.id)
        : (options as any[]),
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
    getOptionLabel = (option) => (typeof option === "string" ? option : option?.title || null),
    filterSelectedOption = (options: readonly any[], value: any): any[] =>
      value ? options.filter((option) => option?.id != value?.id) : (options as any[]),
>>>>>>> f325683 (OTAT-286 Fix profile filed default value setter)
=======
    getOptionLabel = (option) =>
      typeof option === "string" ? option : option?.title || null,
    filterSelectedOption = (options: readonly any[], value: any): any[] =>
      value
        ? options.filter((option) => option?.id != value?.id)
        : (options as any[]),
>>>>>>> 40b97fc (OTAT-182 Add document title related to pages)
    renderOption,
    noOptionsText,
    required,
    loaded,
    loading,
    error,
    options: optionsData,
    query,
    errorObject,
    abortController,
    defaultValue,
    searchOnType = true,
    ...rest
  } = props;
  const { name, onChange, ref, value, ...restFields } = field;
  const {
    formState: { errors },
<<<<<<< HEAD
<<<<<<< HEAD
    setValue,
  } = useFormContext();
  const isFirstFetchRef = useRef(true);
  const { hasError, errorMessage } = getFieldError(errors, name);
<<<<<<< HEAD
  const [inputValue, setInputValue] = React.useState(() => getOptionLabel(defaultValue) || "");
=======
  } = useFormContext();
  const { hasError, errorMessage } = getFieldError(errors, name);
  const [inputValue, setInputValue] = React.useState(
    () => getOptionLabel(defaultValue) || ""
  );
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
    setValue,
  } = useFormContext();
  const { hasError, errorMessage } = getFieldError(errors, name);
  const [inputValue, setInputValue] = React.useState(() => getOptionLabel(defaultValue) || "");
>>>>>>> f325683 (OTAT-286 Fix profile filed default value setter)
=======
  const [inputValue, setInputValue] = React.useState(
    () => getOptionLabel(defaultValue) || ""
  );
>>>>>>> 40b97fc (OTAT-182 Add document title related to pages)
  const [options, setOptions] = React.useState<any[]>([]);

  const fetch = React.useMemo(
    () =>
      throttle((request: any) => {
        query?.({ query: formatRequest(request) });
      }, 800),
    []
  );

  useEffect(() => {
    if (!searchOnType && !isFirstFetchRef.current) {
      return;
    }

    if (getOptionLabel(value) == inputValue) {
      fetch("");
    } else {
      fetch(inputValue);
    }
    isFirstFetchRef.current = false;
  }, [inputValue, fetch]);

  useEffect(() => {
    let active = true;
    if (loaded && active) {
      const opt = filterSelectedOption(optionsData, value);
      setOptions(opt);
<<<<<<< HEAD
<<<<<<< HEAD
      defaultValue && onChange(defaultValue);
=======
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
      defaultValue && onChange(defaultValue);
>>>>>>> f325683 (OTAT-286 Fix profile filed default value setter)
    }
    return () => {
      active = false;
    };
  }, [loaded]);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  // console.log(defaultValue, restFields, value, optionsData);
=======

>>>>>>> 40b97fc (OTAT-182 Add document title related to pages)
  return (
    <Autocomplete
      {...restFields}
      defaultValue={defaultValue}
      value={value}
      loading={loading}
<<<<<<< HEAD
      loadingText={options.length > 5 ? <LoadingComponent options={options} /> : undefined}
=======

=======
  // console.log(defaultValue, restFields, value, optionsData);
>>>>>>> f325683 (OTAT-286 Fix profile filed default value setter)
  return (
    <Autocomplete
      {...restFields}
      defaultValue={defaultValue}
      value={value}
      loading={loading}
<<<<<<< HEAD
      loadingText={
        options.length > 5 ? <LoadingComponent options={options} /> : undefined
      }
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
      loadingText={options.length > 5 ? <LoadingComponent options={options} /> : undefined}
>>>>>>> f325683 (OTAT-286 Fix profile filed default value setter)
=======
      loadingText={
        options.length > 5 ? <LoadingComponent options={options} /> : undefined
      }
>>>>>>> 40b97fc (OTAT-182 Add document title related to pages)
      size="small"
      autoHighlight
      getOptionLabel={getOptionLabel}
      options={error ? [{}] : options}
      autoComplete
      disablePortal={false}
      includeInputInList
      filterSelectedOptions={true}
      onChange={(event: any, newValue: any | null) => {
        onChange(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          InputLabelProps={{ required, ...params.InputLabelProps }}
          label={label}
          fullWidth
          inputRef={ref}
          error={hasError}
          helperText={(errorMessage as ReactNode) || helperText}
          name={name}
        />
      )}
      noOptionsText={
        error ? (
          <Box sx={{ ...styles.centerVH }}>
            <ErrorDataLoading />
          </Box>
        ) : (
          noOptionsText
        )
      }
      renderOption={
        error
          ? () => (
              <Box sx={{ ...styles.centerVH, color: "rgba(0, 0, 0, 0.6)" }}>
                <ErrorDataLoading />
              </Box>
            )
          : renderOption
      }
      {...rest}
    />
  );
};

const LoadingComponent = ({ options }: { options: readonly any[] }) => {
  return (
    <Box display="flex" flexDirection="column" m={-1}>
      {forLoopComponent(options.length, (index) => (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <LoadingSkeleton width="100%" height="36px" sx={{ my: 0.3, borderRadius: 1 }} key={index} />
=======
=======
>>>>>>> 40b97fc (OTAT-182 Add document title related to pages)
        <LoadingSkeleton
          width="100%"
          height="36px"
          sx={{ my: 0.3, borderRadius: 1 }}
          key={index}
        />
<<<<<<< HEAD
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
        <LoadingSkeleton width="100%" height="36px" sx={{ my: 0.3, borderRadius: 1 }} key={index} />
>>>>>>> f325683 (OTAT-286 Fix profile filed default value setter)
=======
>>>>>>> 40b97fc (OTAT-182 Add document title related to pages)
      ))}
    </Box>
  );
};

export const useConnectAutocompleteField = <T extends any = any>(props: {
  service: TQueryServiceFunction<T>;
  accessor?: string;
}) => {
  const { service, accessor = "results" } = props;
  const serviceQueryData = useQuery({
    service,
    runOnMount: false,
    initialData: [],
    accessor,
  });

  const { data: options, ...rest } = serviceQueryData;

  return { ...rest, options };
};

export default AutocompleteAsyncField;
