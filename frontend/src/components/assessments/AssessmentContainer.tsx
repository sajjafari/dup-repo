import React, { useEffect, useRef, useState } from "react";
import { Trans } from "react-i18next";
import Title from "../../components/shared/Title";
import QueryData from "../../components/shared/QueryData";
<<<<<<< HEAD
<<<<<<< HEAD
import ErrorEmptyData from "../../components/shared/errors/ErrorEmptyData";
=======
import EmptyError from "../../components/shared/errors/EmptyError";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
import ErrorEmptyData from "../../components/shared/errors/ErrorEmptyData";
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
import { useServiceContext } from "../../providers/ServiceProvider";
import useDialog from "../../utils/useDialog";
import { AssessmentsList } from "./AssessmentList";
import CreateAssessmentDialog from "./AssessmentCEFromDialog";
import { Box, Typography } from "@mui/material";
import { ICustomError } from "../../utils/CustomError";
import { useParams } from "react-router-dom";
import { LoadingSkeletonOfAssessments } from "../../components/shared/loadings/LoadingSkeletonOfAssessments";
import toastError from "../../utils/toastError";
import { ToolbarCreateItemBtn } from "../../components/shared/buttons/ToolbarCreateItemBtn";
import { ECustomErrorType } from "../../types";
<<<<<<< HEAD
<<<<<<< HEAD
import { ErrorNotFoundOrAccessDenied } from "../../components/shared/errors/ErrorNotFoundOrAccessDenied";
=======
import { NotFoundOrAccessDenied } from "../../components/shared/errors/NotFoundOrAccessDenied";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
import { ErrorNotFoundOrAccessDenied } from "../../components/shared/errors/ErrorNotFoundOrAccessDenied";
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
import SupTitleBreadcrumb from "../shared/SupTitleBreadcrumb";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import NoteAddRoundedIcon from "@mui/icons-material/NoteAddRounded";

const AssessmentContainer = () => {
  const dialogProps = useDialog();
  const { fetchAssessments, ...rest } = useFetchAssessments();
  const { data, error, errorObject, requested_space } = rest;
  const isEmpty = data.length == 0;
<<<<<<< HEAD
<<<<<<< HEAD
  const { spaceId } = useParams();
=======
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
  const { spaceId } = useParams();
>>>>>>> 255e0ee (OTAT-258 Fix mobile navbar items)

  return error &&
    (errorObject?.type === ECustomErrorType.ACCESS_DENIED ||
      errorObject?.type === ECustomErrorType.NOT_FOUND) ? (
<<<<<<< HEAD
<<<<<<< HEAD
    <ErrorNotFoundOrAccessDenied />
=======
    <NotFoundOrAccessDenied />
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
    <ErrorNotFoundOrAccessDenied />
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
  ) : (
    <Box display="flex" flexDirection="column" m="auto">
      <Title
        borderBottom={true}
        sup={
          <SupTitleBreadcrumb
            routes={[
              {
<<<<<<< HEAD
<<<<<<< HEAD
=======
                to: "/spaces",
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
>>>>>>> 255e0ee (OTAT-258 Fix mobile navbar items)
                title: requested_space,
                sup: "spaces",
                icon: <FolderRoundedIcon fontSize="inherit" sx={{ mr: 0.5 }} />,
              },
            ]}
          />
        }
        toolbar={
          <ToolbarCreateItemBtn
            onClick={dialogProps.openDialog}
            icon={<NoteAddRoundedIcon />}
            shouldAnimate={isEmpty}
            minWidth="195px"
            text="createAssessment"
          />
        }
      >
        <DescriptionRoundedIcon sx={{ mr: 1 }} />
        <Trans i18nKey="assessments" />
      </Title>
      <QueryData
        {...rest}
        renderLoading={() => <LoadingSkeletonOfAssessments />}
        emptyDataComponent={
<<<<<<< HEAD
<<<<<<< HEAD
          <ErrorEmptyData
=======
          <EmptyError
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
          <ErrorEmptyData
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
            emptyMessage={<Trans i18nKey="nothingToSeeHere" />}
            suggests={
              <Typography variant="subtitle1" textAlign="center">
                <Trans i18nKey="tryCreatingNewAssessment" />
              </Typography>
            }
          />
        }
        render={(data) => {
          return (
            <AssessmentsList {...rest} data={data} dialogProps={dialogProps} />
          );
        }}
      />
      <CreateAssessmentDialog
        {...dialogProps}
        onSubmitForm={fetchAssessments}
      />
    </Box>
  );
};

const useFetchAssessments = () => {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorObject, setErrorObject] = useState<undefined | ICustomError>(
    undefined
  );
  const { spaceId } = useParams();
  const { service } = useServiceContext();
  const abortController = useRef(new AbortController());

  useEffect(() => {
    fetchAssessments();
    return () => {
      abortController.current.abort();
    };
  }, []);

  const fetchAssessments = async () => {
    setLoading(true);
    setErrorObject(undefined);
    try {
      const { data: res } = await service.fetchAssessments(
        { spaceId },
        { signal: abortController.current.signal }
      );
      if (res) {
        setData(res);
        setError(false);
      } else {
        setData({});
        setError(true);
      }

      setLoading(false);
    } catch (e) {
      const err = e as ICustomError;
      toastError(err, { filterByStatus: [404] });
      setLoading(false);
      setError(true);
      setErrorObject(err);
    }
  };

  const deleteAssessment = async (id: any) => {
    setLoading(true);
    try {
      const { data: res } = await service.deleteAssessment(
        { id },
        { signal: abortController.current.signal }
      );
      fetchAssessments();
    } catch (e) {
      const err = e as ICustomError;
      toastError(err);
      setLoading(false);
      setError(true);
    }
  };

  return {
    data: data.results || [],
    requested_space: data.requested_space,
    loading,
    loaded: !!data,
    error,
    errorObject,
    fetchAssessments,
    deleteAssessment,
  };
};

export default AssessmentContainer;
