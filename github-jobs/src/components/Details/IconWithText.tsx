import React from "react";
import { Typography, Box } from "@mui/material";
import theme from "../../theme/theme";
import { CenteredBox } from "../styled/Boxes";

interface IconWithTextTypes {
  text: string;
  icon: React.ReactNode;
}

const IconWithText = ({ text, icon }: IconWithTextTypes) => {
  return (
    <Box color={theme.palette.primary.light} sx={{display: "flex", alignItems: "center", justifyContent: "start"}}>
      {icon}
      <Typography variant="button" px="4px" noWrap>
        {text}
      </Typography>
    </Box>
  );
};

export default IconWithText;
