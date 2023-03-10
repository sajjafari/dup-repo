<<<<<<< HEAD
import React, { PropsWithChildren } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 11a534e (OTAT-266 add Vite)
=======
import React, { PropsWithChildren, useContext } from "react";
>>>>>>> 44b8524 (OTAT-294 Add edit to expert group)
import { Box } from "@mui/material";
import { styles } from "../../config/styles";
import { ECustomErrorType, TQueryFunction, TQueryProps } from "../../types";
import { ICustomError } from "../../utils/CustomError";
import ErrorEmptyData from "./errors/ErrorEmptyData";
import ErrorDataLoading from "./errors/ErrorDataLoading";
import { ErrorNotFoundOrAccessDenied } from "./errors/ErrorNotFoundOrAccessDenied";
=======
import Box from "@mui/material/Box";
import { styles } from "../../config/styles";
import { ECustomErrorType } from "../../types";
import { ICustomError } from "../../utils/CustomError";
<<<<<<< HEAD
import EmptyError from "./errors/EmptyError";
import DataLoadingError from "./errors/DataLoadingError";
import { NotFoundOrAccessDenied } from "./errors/NotFoundOrAccessDenied";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
import ErrorEmptyData from "./errors/ErrorEmptyData";
import ErrorDataLoading from "./errors/ErrorDataLoading";
import { ErrorNotFoundOrAccessDenied } from "./errors/ErrorNotFoundOrAccessDenied";
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
import GettingThingsReadyLoading from "./loadings/GettingThingsReadyLoading";

interface IQueryDataProps<T> {
  loadingComponent?: JSX.Element;
  emptyDataComponent?: JSX.Element;
  errorComponent?: JSX.Element;
  data: T;
  loading: boolean;
  error: boolean;
  loaded: boolean;
  errorObject: ICustomError | undefined;
  abortController?: AbortController;
  render: (data: T) => JSX.Element;
  renderLoading?: () => JSX.Element;
  renderError?: (
    err:
      | ICustomError
      | (ICustomError | ICustomError[] | undefined)[]
      | undefined
  ) => JSX.Element;
  isDataEmpty?: (data: T) => boolean;
  query: TQueryFunction<T>;
}

const QueryDataContext = React.createContext<TQueryProps>({
  data: undefined,
  error: false,
  loading: true,
  loaded: false,
  query: async () => null,
  errorObject: undefined,
  abortController: undefined as any,
});

const QueryData = <T extends any = any>(props: IQueryDataProps<T>) => {
  const {
    render,
    data,
    loading,
    loaded,
    error,
    errorObject,
    isDataEmpty = defaultIsDataEmpty,
<<<<<<< HEAD
<<<<<<< HEAD
    errorComponent = <ErrorDataLoading />,
=======
    errorComponent = <DataLoadingError />,
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
    errorComponent = <ErrorDataLoading />,
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
    renderLoading = () => loadingComponent,
    loadingComponent = (
      <Box sx={{ ...styles.centerVH }} pt={3}>
        <GettingThingsReadyLoading />
      </Box>
    ),
    renderError = defaultRenderError,
<<<<<<< HEAD
<<<<<<< HEAD
    emptyDataComponent = <ErrorEmptyData />,
<<<<<<< HEAD
=======
    emptyDataComponent = <EmptyError />,
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
    emptyDataComponent = <ErrorEmptyData />,
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
=======
    abortController,
    query,
>>>>>>> 44b8524 (OTAT-294 Add edit to expert group)
  } = props;

  if (loading) {
    return renderLoading();
  }
  if (error) {
    return renderError(errorObject, errorComponent);
  }
  const isEmpty = loaded && data ? isDataEmpty(data) : false;
  if (isEmpty) {
    return emptyDataComponent;
  }
  return (
    <QueryDataContext.Provider
      value={{
        data,
        error,
        errorObject,
        loaded,
        loading,
        query,
        abortController,
      }}
    >
      {loaded && data ? render(data) : null}
    </QueryDataContext.Provider>
  );
};

export const useQueryDataContext = () => {
  const context = useContext(QueryDataContext);
  if (context === undefined) {
    throw new Error(
      "useQueryDataContext must be used within a QueryData render method"
    );
  }
  return context;
};

const defaultIsDataEmpty = (data: any) => {
  if (Array.isArray(data)) {
    if (data.length === 0) {
      return true;
    }
    return false;
  }
  if (typeof data === "object") {
    const keys = Object.keys(data);
    if (keys && keys.length === 0) {
      return true;
    }
    if (data?.results?.length === 0) {
      return true;
    }
  }

  return false;
};

export const defaultRenderError = (
  err: ICustomError | undefined,
<<<<<<< HEAD
<<<<<<< HEAD
  errorComponent: JSX.Element = <ErrorDataLoading />
=======
  errorComponent: JSX.Element = <DataLoadingError />
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
  errorComponent: JSX.Element = <ErrorDataLoading />
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
): any => {
  if (!err) {
    return errorComponent;
  }
  if (
    err.type === ECustomErrorType.NOT_FOUND ||
    err.type === ECustomErrorType.ACCESS_DENIED
  ) {
<<<<<<< HEAD
<<<<<<< HEAD
    return <ErrorNotFoundOrAccessDenied />;
=======
    return <NotFoundOrAccessDenied />;
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
    return <ErrorNotFoundOrAccessDenied />;
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
  }
  return errorComponent;
};

export default QueryData;
