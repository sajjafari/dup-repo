import React, { FC, PropsWithChildren } from "react";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { styles } from "../../config/styles";
<<<<<<< HEAD
<<<<<<< HEAD
import { Box } from "@mui/material";
=======
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
import { Box } from "@mui/material";
>>>>>>> 8b5713c (OTAT-154 Add responsive layout to profile and connected services)

interface IInfoItems {
  renderMap?: Record<string, (...args: any) => JSX.Element>;
  component?: FC<{ title: string }>;
  info: { title: string; item: any | any[]; type?: string };
<<<<<<< HEAD
<<<<<<< HEAD
  bg?: "white";
}

const InfoItem = (props: IInfoItems) => {
  const { info, renderMap, component, bg } = props;

  return renderInfo(info, { component, renderMap, bg });
};

const DefaultInfoItemComponent = (
  props: PropsWithChildren<{ title: string; bg?: "white"; itemBg?: string }>
) => {
<<<<<<< HEAD
  const { title, children, bg } = props;
=======
=======
  bg?: "white";
>>>>>>> 8b5713c (OTAT-154 Add responsive layout to profile and connected services)
}

const InfoItem = (props: IInfoItems) => {
  const { info, renderMap, component, bg } = props;

  return renderInfo(info, { component, renderMap, bg });
};

const DefaultInfoItemComponent = (
  props: PropsWithChildren<{ title: string; bg?: "white" }>
) => {
<<<<<<< HEAD
  const { title, children } = props;
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
  const { title, children, bg } = props;
>>>>>>> 8b5713c (OTAT-154 Add responsive layout to profile and connected services)
=======
  const { title, children, bg, itemBg } = props;
>>>>>>> 1bdba36 (OTAT-284 Add tags field to profile create from)
  return (
    <Typography
      mb={1}
      variant="body2"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8b5713c (OTAT-154 Add responsive layout to profile and connected services)
      sx={{
        ...styles.centerV,
        fontFamily: "Roboto",
        background: bg || "#f5f2f2",
        py: 0.6,
        px: 1,
        borderRadius: 1,
      }}
<<<<<<< HEAD
      justifyContent="space-between"
    >
      {title}:{" "}
      <Box
        component="strong"
        sx={{
          py: 0.2,
          px: 0.6,
          background: itemBg || "white",

          borderRadius: 1,
        }}
      >
        {children}
      </Box>
=======
      sx={{ ...styles.centerV, fontFamily: "RobotoRegular" }}
=======
      sx={{ ...styles.centerV, fontFamily: "Roboto" }}
>>>>>>> 11a534e (OTAT-266 add Vite)
      justifyContent="space-between"
    >
      {title}: <strong>{children}</strong>
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
      justifyContent="space-between"
    >
      {title}:{" "}
      <Box
        component="strong"
        sx={{
          py: 0.2,
          px: 0.6,
          background: "white",
          borderRadius: 1,
        }}
      >
        {children}
      </Box>
>>>>>>> 8b5713c (OTAT-154 Add responsive layout to profile and connected services)
    </Typography>
  );
};

const defaultRenderMap: Record<string, (...args: any) => JSX.Element> = {
<<<<<<< HEAD
<<<<<<< HEAD
  tags: (title: string, items: string[], props: any) => (
<<<<<<< HEAD
    <DefaultInfoItemComponent title={title} {...props}>
=======
  tags: (title: string, items: string[]) => (
    <DefaultInfoItemComponent title={title}>
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
  tags: (title: string, items: string[], props: any) => (
    <DefaultInfoItemComponent title={title} {...props}>
>>>>>>> 8b5713c (OTAT-154 Add responsive layout to profile and connected services)
=======
    <DefaultInfoItemComponent title={title} {...props} itemBg={"#f5f2f2"}>
>>>>>>> 1bdba36 (OTAT-284 Add tags field to profile create from)
      {items.map((item) => (
        <Chip size="small" label={item} sx={{ mr: 0.3 }} />
      ))}
    </DefaultInfoItemComponent>
  ),
<<<<<<< HEAD
<<<<<<< HEAD
  array: (title: string, items: string[], props: any) => (
    <DefaultInfoItemComponent title={title} {...props}>
=======
  array: (title: string, items: string[]) => (
    <DefaultInfoItemComponent title={title}>
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
  array: (title: string, items: string[], props: any) => (
    <DefaultInfoItemComponent title={title} {...props}>
>>>>>>> 8b5713c (OTAT-154 Add responsive layout to profile and connected services)
      {items.map(
        (item, index) => `${item}${index === items.length - 1 ? "" : ","} `
      )}
    </DefaultInfoItemComponent>
  ),
};

const renderInfo = (
  info: { title: string; item: any | any[]; type?: string },
  config: {
    component?: any;
    renderMap?: any;
    useTitleAsFallbackType?: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
    bg?: "white";
=======
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
    bg?: "white";
>>>>>>> 8b5713c (OTAT-154 Add responsive layout to profile and connected services)
  } = {}
) => {
  const {
    component: Component = DefaultInfoItemComponent,
    renderMap = defaultRenderMap,
    useTitleAsFallbackType,
<<<<<<< HEAD
<<<<<<< HEAD
    bg,
=======
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
    bg,
>>>>>>> 8b5713c (OTAT-154 Add responsive layout to profile and connected services)
  } = config;
  const { title, item, type } = info;
  const key = useTitleAsFallbackType ? type || title : type;

  return key && renderMap[key] ? (
<<<<<<< HEAD
<<<<<<< HEAD
    renderMap[key](title, item, { bg })
  ) : (
    <Component title={title} bg={bg}>
      {item}
    </Component>
=======
    renderMap[key](title, item)
  ) : (
    <Component title={title}>{item}</Component>
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
    renderMap[key](title, item, { bg })
  ) : (
    <Component title={title} bg={bg}>
      {item}
    </Component>
>>>>>>> 8b5713c (OTAT-154 Add responsive layout to profile and connected services)
  );
};

export default InfoItem;
export { renderInfo };
