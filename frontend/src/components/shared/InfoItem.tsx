import React, { FC, PropsWithChildren } from "react";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { styles } from "../../config/styles";
<<<<<<< HEAD
import { Box } from "@mui/material";
=======
>>>>>>> 6640d72 (OTAT-154 Add profile page)

interface IInfoItems {
  renderMap?: Record<string, (...args: any) => JSX.Element>;
  component?: FC<{ title: string }>;
  info: { title: string; item: any | any[]; type?: string };
<<<<<<< HEAD
  bg?: "white";
}

const InfoItem = (props: IInfoItems) => {
  const { info, renderMap, component, bg } = props;

  return renderInfo(info, { component, renderMap, bg });
};

const DefaultInfoItemComponent = (
  props: PropsWithChildren<{ title: string; bg?: "white" }>
) => {
  const { title, children, bg } = props;
=======
}

const InfoItem = (props: IInfoItems) => {
  const { info, renderMap, component } = props;

  return renderInfo(info, { component, renderMap });
};

const DefaultInfoItemComponent = (
  props: PropsWithChildren<{ title: string }>
) => {
  const { title, children } = props;
>>>>>>> 6640d72 (OTAT-154 Add profile page)
  return (
    <Typography
      mb={1}
      variant="body2"
<<<<<<< HEAD
<<<<<<< HEAD
      sx={{
        ...styles.centerV,
        fontFamily: "Roboto",
        background: bg || "#f5f2f2",
        py: 0.6,
        px: 1,
        borderRadius: 1,
      }}
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
=======
      sx={{ ...styles.centerV, fontFamily: "RobotoRegular" }}
=======
      sx={{ ...styles.centerV, fontFamily: "Roboto" }}
>>>>>>> 11a534e (OTAT-266 add Vite)
      justifyContent="space-between"
    >
      {title}: <strong>{children}</strong>
>>>>>>> 6640d72 (OTAT-154 Add profile page)
    </Typography>
  );
};

const defaultRenderMap: Record<string, (...args: any) => JSX.Element> = {
<<<<<<< HEAD
  tags: (title: string, items: string[], props: any) => (
    <DefaultInfoItemComponent title={title} {...props}>
=======
  tags: (title: string, items: string[]) => (
    <DefaultInfoItemComponent title={title}>
>>>>>>> 6640d72 (OTAT-154 Add profile page)
      {items.map((item) => (
        <Chip size="small" label={item} sx={{ mr: 0.3 }} />
      ))}
    </DefaultInfoItemComponent>
  ),
<<<<<<< HEAD
  array: (title: string, items: string[], props: any) => (
    <DefaultInfoItemComponent title={title} {...props}>
=======
  array: (title: string, items: string[]) => (
    <DefaultInfoItemComponent title={title}>
>>>>>>> 6640d72 (OTAT-154 Add profile page)
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
    bg?: "white";
=======
>>>>>>> 6640d72 (OTAT-154 Add profile page)
  } = {}
) => {
  const {
    component: Component = DefaultInfoItemComponent,
    renderMap = defaultRenderMap,
    useTitleAsFallbackType,
<<<<<<< HEAD
    bg,
=======
>>>>>>> 6640d72 (OTAT-154 Add profile page)
  } = config;
  const { title, item, type } = info;
  const key = useTitleAsFallbackType ? type || title : type;

  return key && renderMap[key] ? (
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
  );
};

export default InfoItem;
export { renderInfo };
