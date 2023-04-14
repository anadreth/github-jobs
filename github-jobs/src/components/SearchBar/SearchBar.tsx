import { Button, TextField, Box, Input } from "@mui/material";
import { BetweenBox, CenteredBox } from "../styled/Boxes";
import InputAdornment from "@mui/material/InputAdornment";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import background from "./../../assets/searchBackground.jpeg";
import theme from "../../theme/theme";
import { useState } from "react";

interface SearchBarTypes {
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
  handleSearchBar: () => void
}


const SearchBar = ({handleSearchBar, searchText, setSearchText}: SearchBarTypes) => {
  
  return (
    <CenteredBox
      sx={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        width: "100%",
        height: "130px",
        borderRadius: "8px",
      }}
    >
      <TextField
        placeholder="Company or other..."
        color="secondary"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        sx={{
          outline: "none",
          border: "none",
          backgroundColor: "white",
          borderRadius: "8px",
          width: "80%",
        }}
        InputLabelProps={{}}
        InputProps={{
          endAdornment: (
            <Button
              size="large"
              variant="contained"
              color="secondary"
              onClick={handleSearchBar}
              sx={{ zIndex: 100, py: "14px" }}
            >
              Search
            </Button>
          ),
        }}
      ></TextField>
    </CenteredBox>
  );
};

export default SearchBar;
