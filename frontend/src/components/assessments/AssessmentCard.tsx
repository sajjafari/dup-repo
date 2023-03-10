import React, { useRef } from "react";
import { Gauge } from "../../components/shared/charts/Gauge";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import useMenu from "../../utils/useMenu";
import { useServiceContext } from "../../providers/ServiceProvider";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
import {
  createSearchParams,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
<<<<<<< HEAD
=======
import { Link, useLocation } from "react-router-dom";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { Trans } from "react-i18next";
import { styles } from "../../config/styles";
import formatDate from "../../utils/formatDate";
import { ICustomError } from "../../utils/CustomError";
import toastError from "../../utils/toastError";
import MoreActions from "../../components/shared/MoreActions";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
<<<<<<< HEAD
<<<<<<< HEAD
import { Box } from "@mui/material";
=======
import Box from "@mui/material/Box";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
import { Box } from "@mui/material";
>>>>>>> 11a534e (OTAT-266 add Vite)
import { IAssessment, TId, TQueryFunction } from "../../types";
import { TDialogProps } from "../../utils/useDialog";
import Button from "@mui/material/Button";
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import QueryStatsRounded from "@mui/icons-material/QueryStatsRounded";
import hasStatus from "../../utils/hasStatus";
import { toast } from "react-toastify";
import { t } from "i18next";
<<<<<<< HEAD
<<<<<<< HEAD
import CompareRoundedIcon from "@mui/icons-material/CompareRounded";
=======
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
import CompareRoundedIcon from "@mui/icons-material/CompareRounded";
>>>>>>> 671bfb7 (OTAT-212 Add compare page)

interface IAssessmentCardProps {
  item: IAssessment;
  dialogProps: TDialogProps;
  deleteAssessment: TQueryFunction<any, TId>;
}

const AssessmentCard = (props: IAssessmentCardProps) => {
  const { item } = props;
  const abortController = useRef(new AbortController());
  const { total_progress } = item;
  const { progress = 0 } = total_progress || {};
  const hasStat = hasStatus(item.status);
  const isComplete = progress === 100;
  const location = useLocation();

  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Paper
        sx={{
          position: "relative",
          pt: 3,
          pb: 3,
          px: 2,
          borderRadius: "16px",
          ...styles.centerCH,
          minHeight: "320px",
          height: "100%",
          justifyContent: "space-between",
          ":hover": {
            boxShadow: 9,
          },
        }}
        elevation={4}
      >
        <Actions {...props} abortController={abortController} />
        <Grid
          container
          component={Link}
          to={isComplete ? `${item.id}/insights` : `${item.id}/questionnaires`}
          sx={{ textDecoration: "none", height: "100%" }}
        >
          <Grid item xs={12}>
            <Box>
              <Typography
                variant="h5"
                color="CaptionText"
                textTransform={"uppercase"}
                sx={{
                  padding: "8px 28px",
<<<<<<< HEAD
<<<<<<< HEAD
                  fontWeight: "bold",
=======
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
                  fontWeight: "bold",
>>>>>>> 11a534e (OTAT-266 add Vite)
                  pb: 0,
                  textAlign: "center",
                  color: item.color?.color_code || "#101c32",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="subMedium"
                color="GrayText"
                sx={{ padding: "1px 4px", textAlign: "center" }}
              >
                <Trans i18nKey="lastUpdated" />{" "}
                {formatDate(item.last_modification_date)}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ ...styles.centerCH }} mt={2}>
            <Gauge systemStatus={item.status} maxWidth="275px" mt="auto" />
          </Grid>
          <Grid item xs={12} sx={{ ...styles.centerCH }} mt={4}>
            <Button
              startIcon={<QueryStatsRounded />}
              fullWidth
              onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                e.stopPropagation();
                if (!hasStat) {
                  e.preventDefault();
                  toast.warn(t("inOrderToViewSomeInsight") as string);
                }
              }}
              component={Link}
              to={hasStat ? `${item.id}/insights` : ""}
              variant={isComplete ? "contained" : undefined}
            >
              <Trans i18nKey="insights" />
            </Button>
          </Grid>
          <Grid item xs={12} mt={1} sx={{ ...styles.centerCH }}>
            <Button
              startIcon={<QuizRoundedIcon />}
              variant={"contained"}
              fullWidth
              onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                e.stopPropagation();
              }}
              component={Link}
              state={location}
              to={`${item.id}/questionnaires`}
              sx={{
                backgroundColor: "#2e7d72",
                background: `linear-gradient(135deg, #2e7d72 ${progress}%, #01221e ${progress}%)`,
              }}
            >
              <Trans i18nKey="questionnaires" />
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

const Actions = (props: {
  deleteAssessment: TQueryFunction<any, TId>;
  item: IAssessment;
  dialogProps: TDialogProps;
  abortController: React.MutableRefObject<AbortController>;
}) => {
  const { deleteAssessment, item, dialogProps, abortController } = props;
  const [editLoading, setEditLoading] = React.useState(false);
  const { service } = useServiceContext();
<<<<<<< HEAD
<<<<<<< HEAD
  const navigate = useNavigate();
=======
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
  const navigate = useNavigate();
>>>>>>> 671bfb7 (OTAT-212 Add compare page)

  const deleteItem = async (e: any) => {
    try {
      await deleteAssessment(item.id);
    } catch (e) {
      const err = e as ICustomError;
      toastError(err);
    }
  };

  const openEditDialog = (e: any) => {
    setEditLoading(true);
    service
      .loadAssessment(
        { rowId: item.id },
        { signal: abortController.current.signal }
      )
      .then(({ data }) => {
        setEditLoading(false);
        dialogProps.openDialog({ data, type: "update" });
      })
      .catch((e) => {
        setEditLoading(false);
        const err = e as ICustomError;
        toastError(err);
      });
  };

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
  const addToCompare = (e: any) => {
    navigate({
      pathname: "/compare",
      search: createSearchParams({
        assessmentIds: item.id as string,
      }).toString(),
    });
  };

<<<<<<< HEAD
=======
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
  return (
    <MoreActions
      {...useMenu()}
      loading={editLoading}
      boxProps={{ position: "absolute", top: "10px", right: "10px", zIndex: 2 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d4b1d73 (OTAT-212 Fix bugs)
      items={
        hasStatus(item.status)
          ? [
              {
                icon: <EditRoundedIcon fontSize="small" />,
                text: <Trans i18nKey="edit" />,
                onClick: openEditDialog,
              },
              {
                icon: <CompareRoundedIcon fontSize="small" />,
                text: <Trans i18nKey="addToCompare" />,
                onClick: addToCompare,
              },
              {
                icon: <DeleteRoundedIcon fontSize="small" />,
                text: <Trans i18nKey="delete" />,
                onClick: deleteItem,
              },
            ]
          : [
              {
                icon: <EditRoundedIcon fontSize="small" />,
                text: <Trans i18nKey="edit" />,
                onClick: openEditDialog,
              },
              {
                icon: <DeleteRoundedIcon fontSize="small" />,
                text: <Trans i18nKey="delete" />,
                onClick: deleteItem,
              },
            ]
      }
<<<<<<< HEAD
=======
      items={[
        {
          icon: <EditRoundedIcon fontSize="small" />,
          text: <Trans i18nKey="edit" />,
          onClick: openEditDialog,
        },
        {
          icon: <CompareRoundedIcon fontSize="small" />,
          text: <Trans i18nKey="addToCompare" />,
          onClick: addToCompare,
        },
        {
          icon: <DeleteRoundedIcon fontSize="small" />,
          text: <Trans i18nKey="delete" />,
          onClick: deleteItem,
        },
      ]}
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
>>>>>>> d4b1d73 (OTAT-212 Fix bugs)
    />
  );
};
export default AssessmentCard;
