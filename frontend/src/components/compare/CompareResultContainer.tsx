import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { Box } from "@mui/material";
import { Trans } from "react-i18next";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { useServiceContext } from "../../providers/ServiceProvider";
import { useQuery } from "../../utils/useQuery";
import QueryData from "../shared/QueryData";
import Title from "../shared/Title";
import CompareResult from "./CompareResult";
import { ICompareResultModel } from "../../types";
import Button from "@mui/material/Button";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
=======
import { useSearchParams } from "react-router-dom";
import { useServiceContext } from "../../providers/ServiceProvider";
import { useQuery } from "../../utils/useQuery";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
import Box from "@mui/material/Box";
import { Trans } from "react-i18next";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { useServiceContext } from "../../providers/ServiceProvider";
import { useQuery } from "../../utils/useQuery";
import QueryData from "../shared/QueryData";
import Title from "../shared/Title";
import CompareResult from "./CompareResult";
import { ICompareResultModel } from "../../types";
<<<<<<< HEAD
>>>>>>> c865200 (OTAT-212 Add compare result page)
=======
import Button from "@mui/material/Button";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
>>>>>>> 0cf45a9 (OTAT-212 Fix bugs and add edit button to compare result page)

const CompareResultContainer = () => {
  const [searchParams] = useSearchParams();
  const assessmentIds = searchParams.getAll("assessmentIds");
  const { service } = useServiceContext();
<<<<<<< HEAD
<<<<<<< HEAD
  const compareResultQueryData = useQuery<ICompareResultModel>({
    service: (args = { assessmentIds }, config) =>
      service.fetchCompareResult(args, config),
    toastError: true,
  });
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <QueryData
      {...compareResultQueryData}
      render={(data) => {
        return (
          <Box>
            <Title
              borderBottom={true}
              toolbar={
                <Button
                  startIcon={<BorderColorRoundedIcon />}
                  size="small"
                  onClick={() =>
                    navigate({ pathname: "/compare", search: location.search })
                  }
                >
                  <Trans i18nKey="editComparisonItems" />
                </Button>
              }
            >
              <Trans i18nKey="comparisonResult" />{" "}
            </Title>
            <CompareResult data={data} />{" "}
          </Box>
        );
      }}
    />
  );
=======
  const compareResultQueryData = useQuery({
    service: (args = { assessment_list: assessmentIds }, config) =>
      service.compare(args, config),
  });

  return <div>CompareResultContainer</div>;
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
  const compareResultQueryData = useQuery<ICompareResultModel>({
    service: (args = { assessmentIds }, config) =>
      service.fetchCompareResult(args, config),
    toastError: true,
  });
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <QueryData
      {...compareResultQueryData}
      render={(data) => {
        return (
          <Box>
            <Title
              borderBottom={true}
              toolbar={
                <Button
                  startIcon={<BorderColorRoundedIcon />}
                  size="small"
                  onClick={() =>
                    navigate({ pathname: "/compare", search: location.search })
                  }
                >
                  <Trans i18nKey="editComparisonItems" />
                </Button>
              }
            >
              <Trans i18nKey="comparisonResult" />{" "}
            </Title>
            <CompareResult data={data} />{" "}
          </Box>
        );
      }}
    />
  );
>>>>>>> c865200 (OTAT-212 Add compare result page)
};

export default CompareResultContainer;
