<<<<<<< HEAD
<<<<<<< HEAD
import { t } from "i18next";
=======
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
import { t } from "i18next";
>>>>>>> 834bd68 (OTAT-252 Add uploader field)
import { toast } from "react-toastify";
import { ECustomErrorType } from "../types";
import { ICustomError } from "./CustomError";

export interface IToastErrorOptions {
  filterByStatus?: number[];
  filterByType?: ECustomErrorType[];
  filterIfHasData?: boolean;
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 834bd68 (OTAT-252 Add uploader field)
const toastError = (
  err: ICustomError | string | true,
  options?: IToastErrorOptions
) => {
  if (typeof err === "boolean" && err) {
    toast.error(t("someThingWentWrong") as string);
    return;
  }
  if (typeof err === "string") {
    toast.error(err);
    return;
  }

<<<<<<< HEAD
=======
const toastError = (err: ICustomError, options?: IToastErrorOptions) => {
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
>>>>>>> 834bd68 (OTAT-252 Add uploader field)
  const {
    filterByStatus = [],
    filterByType = [],
    filterIfHasData = true,
  } = options || {};
  if (!err) {
    return;
  }
  if (filterByStatus?.length > 0 && err.status) {
    const shouldFilter =
      filterByStatus.findIndex((status) => status == err.status) === -1
        ? false
        : true;

    if (shouldFilter) {
      return;
    }
  }
  if (filterByType?.length > 0 && err.type) {
    const shouldFilter =
      filterByType.findIndex((type) => type == err.type) === -1 ? false : true;
    if (shouldFilter) {
      return;
    }
  }
  if (filterIfHasData) {
    if (
      typeof err.data === "object" &&
      Object.keys(err.data).length > 0 &&
      !err?.data?.message &&
      !err?.data?.detail
    )
      return;
  }
  if (
    err.status == 401 ||
    err.type == ECustomErrorType.INVALID_TOKEN ||
    err.type == ECustomErrorType.CANCELED
  ) {
    return;
  }
  toast.error(err?.data?.message || err?.data?.detail || err.message);
};

export default toastError;
