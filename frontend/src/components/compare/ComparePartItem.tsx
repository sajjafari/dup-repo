import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
<<<<<<< HEAD
import { Box } from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
=======
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
import { Trans } from "react-i18next";
import { styles } from "../../config/styles";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import useDialog from "../../utils/useDialog";
import CompareItemCEFormDialog from "./CompareItemCEFormDialog";
import Title from "../shared/Title";
import { Gauge } from "../shared/charts/Gauge";
import ProgressChip from "../shared/ProgressChip";
<<<<<<< HEAD
import { TId, TQueryFunction } from "../../types";
import IconButton from "@mui/material/IconButton";
import {
  compareActions,
  useCompareContext,
  useCompareDispatch,
} from "../../providers/CompareProvider";

interface IComparePartsItemProps {
  data: any;
  index: number;
  disabled: boolean;
  fetchAssessmentsInfo: TQueryFunction;
}

const ComparePartItem = (props: IComparePartsItemProps) => {
  const { data, index, disabled, fetchAssessmentsInfo } = props;
=======
import { ICompareModel, TQueryFunction } from "../../types";

interface IComparePartsItemProps {
  data: any;
  fetchCompare: TQueryFunction<ICompareModel>;
}

const ComparePartItem = (props: IComparePartsItemProps) => {
  const { data, fetchCompare } = props;
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
  const dialogProps = useDialog({
    context: {
      data,
      type: data?.id ? "update" : "create",
    },
  });
<<<<<<< HEAD

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      minHeight="264px"
      height="100%"
      position="relative"
    >
      {data?.id && (
        <DeleteAssessmentIconBtn
          fetchAssessmentsInfo={fetchAssessmentsInfo}
          index={index}
          id={data?.id}
        />
      )}
      <Button
        fullWidth
        color="inherit"
        disabled={disabled}
        sx={{
          p: 3,
          height: "100%",
          px: 3.8,
          borderRadius: 2,

          border: `1.5px dashed ${
            disabled ? "#101c324f" : data?.color?.color_code || "#101c32"
          }`,
=======
  return (
    <Paper>
      <Button
        fullWidth
        color="inherit"
        sx={{
          p: 3,
          px: 3.5,
          borderRadius: 2,
          minHeight: "264px",
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
          ...(data
            ? {
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
              }
            : styles.centerCVH),
        }}
        onClick={dialogProps.openDialog}
      >
        {data ? (
          <Box>
            <Title
              wrapperProps={{ alignItems: "baseline" }}
              textAlign={"left"}
              sup={data.space.title}
              toolbar={
                <ProgressChip
                  progress={data?.total_progress?.progress}
                  size="small"
                  sx={{ ml: 2 }}
                />
              }
              color={data?.color?.color_code}
            >
              {data.title}
            </Title>
            <Box display="flex" justifyContent="center">
              <Gauge systemStatus={data.status} maxWidth="255px" mt="auto" />
            </Box>
          </Box>
        ) : (
          <>
            <AddBoxRoundedIcon sx={{ mb: 0.5 }} fontSize="large" />
            <Typography textTransform={"none"} textAlign="center">
<<<<<<< HEAD
              <Trans
                i18nKey="selectAssessmentForComparison"
                values={{ value: numberMap[index] }}
              />
=======
              <Trans i18nKey="selectAssessmentForComparison" />
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
            </Typography>
          </>
        )}
      </Button>
<<<<<<< HEAD
      <CompareItemCEFormDialog {...dialogProps} index={index} />
    </Box>
  );
};

const numberMap = ["first", "second", "third", "fourth"];

const DeleteAssessmentIconBtn = (props: {
  id: TId;
  index: number;
  fetchAssessmentsInfo: TQueryFunction;
}) => {
  const { id, index, fetchAssessmentsInfo } = props;
  const { assessmentIds } = useCompareContext();
  const dispatch = useCompareDispatch();

  const handleClick = () => {
    const newAssessmentIds = assessmentIds.filter(
      (assessmentId) => assessmentId != id
    );

    if (newAssessmentIds.length === 0) {
      dispatch(compareActions.setProfile(null));
    }
    dispatch(compareActions.setAssessmentIds(newAssessmentIds));
  };

  return (
    <IconButton
      color="error"
      onClick={handleClick}
      className="delete-compare-item"
      sx={{
        opacity: 0.9,
        position: "absolute",
        zIndex: 2,
        bottom: "10px",
        left: index % 2 !== 0 ? undefined : "10px",
        right: index % 2 !== 0 ? { xs: "none", md: "10px" } : undefined,
      }}
    >
      <DeleteRoundedIcon />
    </IconButton>
=======
      <CompareItemCEFormDialog {...dialogProps} onSubmitForm={fetchCompare} />
    </Paper>
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
  );
};

export default ComparePartItem;
