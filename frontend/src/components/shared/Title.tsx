import React from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";
<<<<<<< HEAD
<<<<<<< HEAD
import { Box, BoxProps } from "@mui/material";
=======
import Box, { BoxProps } from "@mui/material/Box";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
import { Box, BoxProps } from "@mui/material";
>>>>>>> 11a534e (OTAT-266 add Vite)
import { Link as RLink, To } from "react-router-dom";
import Link from "@mui/material/Link";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { IconProps, SvgIconProps } from "@mui/material";
import AnchorRoundedIcon from "@mui/icons-material/AnchorRounded";
import { styles } from "../../config/styles";
interface ITitle extends Omit<TypographyProps, "borderBottom"> {
  sup?: JSX.Element | string;
  sub?: JSX.Element | string;
  borderBottom?: string | boolean;
  toolbar?: JSX.Element;
  backLink?: To | -1;
  backIconProps?: SvgIconProps;
  size?: "small" | "medium" | "large";
  wrapperProps?: BoxProps;
<<<<<<< HEAD
<<<<<<< HEAD
  inPageLink?: string;
=======
  inPageLink?: `#${string}`;
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
  inPageLink?: string;
>>>>>>> c865200 (OTAT-212 Add compare result page)
}

const Title = (props: ITitle) => {
  const {
    sup,
    children,
    sub,
    borderBottom,
    toolbar,
    size = "medium",
    backLink,
    backIconProps = {},
    wrapperProps = {},
    inPageLink,
    ...rest
  } = props;

  if (sub && sup) {
    throw new Error("you can pass only one of sub or sup");
  }

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="flex-end"
      sx={{
        paddingBottom: "2px",
        "&:hover a.title-hash-link": { opacity: 1 },
        borderBottom:
          typeof borderBottom === "boolean" && borderBottom
            ? (theme) => `1px solid ${theme.palette.grey[300]}`
            : (borderBottom as string),
        ...(rest.sx || {}),
        ...wrapperProps,
      }}
      {...wrapperProps}
    >
      <Typography
        textTransform="uppercase"
        variant={size === "small" ? "h6" : size === "large" ? "h4" : "h5"}
        fontWeight="bold"
        sx={{ flex: 1 }}
        {...rest}
      >
        {backLink ? (
          <Box display="flex" justifyContent={"flex-start"}>
            <Box
              minWidth="40px"
              sx={{
                ...styles.centerV,
                textDecoration: "none",
                ml: sup ? { xs: 0, md: "-22px" } : "-4px",
              }}
            >
              <Box component={RLink} to={backLink as To} display="flex">
                <ArrowBackRoundedIcon
                  fontSize="small"
                  color="inherit"
                  sx={{ opacity: 0.85, color: "gray", mr: 0.5 }}
                  {...backIconProps}
                />
              </Box>
              {sup && (
                <Typography
                  textTransform="uppercase"
                  variant={
                    size === "small"
                      ? "subSmall"
                      : size === "large"
                      ? "subLarge"
                      : "subMedium"
                  }
                  lineHeight={0}
                >
                  {sup}
                </Typography>
              )}
            </Box>
          </Box>
        ) : sup ? (
          <Typography
            textTransform="uppercase"
            variant={
              size === "small"
                ? "subSmall"
                : size === "large"
                ? "subLarge"
                : "subMedium"
            }
          >
            {sup}
          </Typography>
        ) : (
          <></>
        )}
<<<<<<< HEAD
<<<<<<< HEAD
        <Box sx={{ ...styles.centerV, display: { xs: "block", sm: "flex" } }}>
          {children}
          {inPageLink && (
            <Link
              href={`#${inPageLink}`}
              id={inPageLink}
=======
        <Box sx={{ ...styles.centerV }}>
          {children}
          {inPageLink && (
            <Link
              href={inPageLink}
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
        <Box sx={{ ...styles.centerV, display: { xs: "block", sm: "flex" } }}>
          {children}
          {inPageLink && (
            <Link
              href={`#${inPageLink}`}
              id={inPageLink}
>>>>>>> c865200 (OTAT-212 Add compare result page)
              className="title-hash-link"
              sx={{
                display: "flex",
                opacity: 0,
                alignItems: "center",
                ml: 1,
                transition: "opacity .1s ease",
              }}
            >
              <AnchorRoundedIcon fontSize="small" />
            </Link>
          )}
        </Box>
        {sub && (
          <Typography
            variant={
              size === "small"
                ? "subSmall"
                : size === "large"
                ? "subLarge"
                : "subMedium"
            }
          >
            {sub}
          </Typography>
        )}
      </Typography>
      <Box ml="auto">{toolbar}</Box>
    </Box>
  );
};

export default Title;
