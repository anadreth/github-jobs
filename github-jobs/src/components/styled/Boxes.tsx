import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const NavBox = styled(Box)({
    width:"100%",
    paddingBottom: "2rem",
    display: "flex",
    justifyContent: "start",
    alignItems: "center"
})

export const BetweenBox = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
})

export const CenteredBox = styled(BetweenBox)({
    justifyContent: "center",
})

export const AroundBox = styled(Box)({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "start"
})