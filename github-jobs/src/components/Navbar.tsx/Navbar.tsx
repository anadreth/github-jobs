import { Typography } from "@mui/material";
import { NavBox } from "../styled/Boxes";

const Navbar = () => {
  return (
    <NavBox>
      <Typography variant="h1">
        Github <span style={{fontWeight: 300}}>Jobs De</span>
      </Typography>
    </NavBox>
  );
};

export default Navbar;
