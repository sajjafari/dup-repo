import React from "react";
import Breadcrumbs, { BreadcrumbsProps } from "@mui/material/Breadcrumbs";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { styles } from "../../config/styles";
<<<<<<< HEAD
import { Box } from "@mui/material";
=======
import Box from "@mui/material/Box";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
import { LoadingSkeleton } from "./loadings/LoadingSkeleton";
import { TId } from "../../types";
import { useServiceContext } from "../../providers/ServiceProvider";
import { useQuery } from "../../utils/useQuery";

interface ISupTitleBreadcrumbProps {
  routes: {
    sup?: string;
    to?: string;
    icon?: JSX.Element;
    title: string | JSX.Element;
  }[];
}

const SupTitleBreadcrumb = (
  props: ISupTitleBreadcrumbProps & BreadcrumbsProps
) => {
  const { routes = [] } = props;
  return (
    <Breadcrumbs>
      {routes.map((route, index) => {
        const { to, title, sup, icon } = route;
<<<<<<< HEAD
        const disabled = routes.length - 1 === index || !to;
        return (
          <Box display="flex" flexDirection={"column"} key={index}>
            {/* {sup && (
          <Typography
            sx={{
              fontSize: "0.6rem",
              fontFamily: "Roboto",
              opacity: 0.6,
              letterSpacing: "0.07em",
              color: "text.primary",
            }}
          >
            {sup}
          </Typography>
        )} */}

            <MuiLink
              component={disabled ? "p" : Link}
              underline={disabled ? "none" : "hover"}
              color="inherit"
              to={to}
              onClick={(e) => disabled && e.preventDefault()}
              sx={{
                ...styles.centerV,
                fontSize: "0.8rem",
                fontFamily: "Roboto",
                fontWeight: "bold",
                opacity: 0.8,
                letterSpacing: "0.085em",
                color: disabled ? "GrayText" : "primary.dark",
=======
        return to ? (
          <Box display="flex" flexDirection={"column"} key={index}>
            {/* {sup && (
              <Typography
                sx={{
                  fontSize: "0.6rem",
                  fontFamily: "RobotoMedium",
                  opacity: 0.6,
                  letterSpacing: "0.07em",
                  color: "text.primary",
                }}
              >
                {sup}
              </Typography>
            )} */}

            <MuiLink
              component={Link}
              underline="hover"
              color="inherit"
              to={to}
              sx={{
                ...styles.centerV,
                fontSize: "0.8rem",
                fontFamily: "RobotoBold",
                opacity: 0.8,
                letterSpacing: "0.085em",
                color: "primary.dark",
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
              }}
            >
              {icon}
              {title || (
                <LoadingSkeleton width={"70px"} sx={{ borderRadius: 1 }} />
              )}
            </MuiLink>
          </Box>
<<<<<<< HEAD
=======
        ) : (
          <Typography color="text.primary">{title}</Typography>
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
        );
      })}
      {/* <Typography color="text.primary">Breadcrumbs</Typography> */}
    </Breadcrumbs>
  );
};

export const useSupTitleBreadcrumb = (
  params: Record<string, string | undefined>
) => {
  const { service } = useServiceContext();

  const { loading, data } = useQuery({
    service: (args = params, config) =>
      service.fetchBreadcrumbInfo(args, config),
  });

  return {
    space: !loading ? data?.space || "spaces" : data?.space,
    assessment: !loading ? data?.assessment || "assessments" : data?.assessment,
    questionnaire: !loading
      ? data?.category || "questionnaires"
      : data?.category,
  };
};

export default SupTitleBreadcrumb;
