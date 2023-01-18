<<<<<<< HEAD
import React, { ReactNode, useEffect, useState } from "react";
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
import throttle from "lodash/throttle";
import TextField from "@mui/material/TextField";
import { TQueryServiceFunction, useQuery } from "../../../utils/useQuery";
import { Controller, ControllerRenderProps, RegisterOptions, useFormContext } from "react-hook-form";
import getFieldError from "../../../utils/getFieldError";
import { Box } from "@mui/material";
=======
import React, { ReactNode, useEffect } from "react";
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
import get from "lodash/get";
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
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
>>>>>>> 6640d72 (OTAT-154 Add profile page)
import { LoadingSkeleton } from "../loadings/LoadingSkeleton";
import forLoopComponent from "../../../utils/forLoop";
import ErrorDataLoading from "../errors/ErrorDataLoading";
import { styles } from "../../../config/styles";
import { TQueryProps } from "../../../types";

<<<<<<< HEAD
type TUnionAutocompleteAndAutocompleteAsyncFieldBase = Omit<IAutocompleteAsyncFieldBase, "serviceQueryData" | "field">;

interface IAutocompleteAsyncFieldProps<T> extends TUnionAutocompleteAndAutocompleteAsyncFieldBase {
  rules?: Omit<RegisterOptions<any, any>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
}

const AutocompleteAsyncField = <T extends any = any>(props: IAutocompleteAsyncFieldProps<T> & Omit<TQueryProps, "data">) => {
  const { name, rules = {}, defaultValue, required = false, ...rest } = props;
  const { control, setValue } = useFormContext();
  const { options } = rest;
=======
type TUnionAutocompleteAndAutocompleteAsyncFieldBase = Omit<
  IAutocompleteAsyncFieldBase,
  "serviceQueryData" | "field"
>;

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
  const {
    name,
    rules = {},
    defaultValue = null,
    required = false,
    ...rest
  } = props;
  const { control } = useFormContext();
>>>>>>> 6640d72 (OTAT-154 Add profile page)

  return (
    <Controller
      name={name}
      control={control}
      rules={{ ...rules, required }}
      shouldUnregister={true}
      defaultValue={defaultValue}
      render={({ field, fieldState, formState }) => {
<<<<<<< HEAD
        return <AutocompleteBaseField {...rest} name={name} required={required} field={field} defaultValue={defaultValue} />;
=======
        return (
          <AutocompleteBaseField
            {...rest}
            name={name}
            required={required}
            field={field}
            defaultValue={defaultValue}
          />
        );
>>>>>>> 6640d72 (OTAT-154 Add profile page)
      }}
    />
  );
};

<<<<<<< HEAD
interface IAutocompleteAsyncFieldBase extends Omit<AutocompleteProps<any, any, any, any>, "renderInput"> {
=======
interface IAutocompleteAsyncFieldBase
  extends Omit<AutocompleteProps<any, any, any, any>, "renderInput"> {
>>>>>>> 6640d72 (OTAT-154 Add profile page)
  field: ControllerRenderProps<any, any>;
  formatRequest?: (request: any) => any;
  name: string;
  helperText?: ReactNode;
  label: string | JSX.Element;
  filterSelectedOption?: (options: readonly any[], value: any) => any[];
  required?: boolean;
}

<<<<<<< HEAD
const AutocompleteBaseField = (props: IAutocompleteAsyncFieldBase & Omit<TQueryProps, "data">) => {
=======
const AutocompleteBaseField = (
  props: IAutocompleteAsyncFieldBase & Omit<TQueryProps, "data">
) => {
>>>>>>> 6640d72 (OTAT-154 Add profile page)
  const {
    field,
    formatRequest = (request) => request,
    helperText,
    label,
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
    ...rest
  } = props;
  const { name, onChange, ref, value, ...restFields } = field;
  const {
    formState: { errors },
<<<<<<< HEAD
    setValue,
  } = useFormContext();
  const { hasError, errorMessage } = getFieldError(errors, name);
  const [inputValue, setInputValue] = React.useState(() => getOptionLabel(defaultValue) || "");
=======
  } = useFormContext();
  const { hasError, errorMessage } = getFieldError(errors, name);
  const [inputValue, setInputValue] = React.useState(
    () => getOptionLabel(defaultValue) || ""
  );
>>>>>>> 6640d72 (OTAT-154 Add profile page)
  const [options, setOptions] = React.useState<any[]>([]);

  const fetch = React.useMemo(
    () =>
      throttle((request: any) => {
        query({ query: formatRequest(request) });
      }, 800),
    []
  );

  useEffect(() => {
    if (getOptionLabel(value) == inputValue) {
      fetch("");
    } else {
      fetch(inputValue);
    }
  }, [inputValue, fetch]);

  useEffect(() => {
    let active = true;
    if (loaded && active) {
      const opt = filterSelectedOption(optionsData, value);
      setOptions(opt);
<<<<<<< HEAD
      defaultValue && onChange(defaultValue);
=======
>>>>>>> 6640d72 (OTAT-154 Add profile page)
    }
    return () => {
      active = false;
    };
  }, [loaded]);
<<<<<<< HEAD
  // console.log(defaultValue, restFields, value, optionsData);
  return (
    <Autocomplete
      {...restFields}
      defaultValue={defaultValue}
      value={value}
      loading={loading}
      loadingText={options.length > 5 ? <LoadingComponent options={options} /> : undefined}
=======

  return (
    <Autocomplete
      {...restFields}
      value={value}
      loading={loading}
      loadingText={
        options.length > 5 ? <LoadingComponent options={options} /> : undefined
      }
>>>>>>> 6640d72 (OTAT-154 Add profile page)
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
        <LoadingSkeleton width="100%" height="36px" sx={{ my: 0.3, borderRadius: 1 }} key={index} />
=======
        <LoadingSkeleton
          width="100%"
          height="36px"
          sx={{ my: 0.3, borderRadius: 1 }}
          key={index}
        />
>>>>>>> 6640d72 (OTAT-154 Add profile page)
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
