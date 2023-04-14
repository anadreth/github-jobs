import { Checkbox } from "@mui/material";
import {
  Box,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import theme from "../../theme/theme";
import LocationFilter from "./LocationFilter";
import { JobType } from "../JobList/JobList";

interface FilterTypes {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  jobs: JobType[];
  handleLocationRadioFilter: (event: React.ChangeEvent<HTMLInputElement> | SyntheticEvent<Element, Event>, checked: boolean) => void
}

const Filter = ({ checked, setChecked, jobs, handleRadioChange }: FilterTypes) => {


  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              color="secondary"
              checked={checked}
              onChange={handleCheckboxChange}
            />
          }
          label="Remote"
        />
      </FormGroup>
      <LocationFilter jobs={jobs} handleLocationRadioFilter={handleRadioChange}/>
    </Box>
  );
};

export default Filter;
