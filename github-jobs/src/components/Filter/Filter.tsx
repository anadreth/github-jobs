import { Checkbox, Radio } from "@mui/material";
import {
  Box,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { useState } from "react";

const Filter = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [cityValue, setCityValue] = useState<string>("");

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCityValue(event?.target.value);
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

      <FormControl fullWidth>
        <FormLabel sx={{ pt: 1, pb: 2 }} children="LOCATION" />
        <TextField
          variant="outlined"
          label="City, state, country..."
          color="secondary"
          fullWidth
        ></TextField>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          value={cityValue}
          onChange={handleRadioChange}
        >
          <FormControlLabel
            value="rosenberg"
            control={<Radio color="secondary" />}
            label="Rosenberg"
          />
          <FormControlLabel
            value="london"
            control={<Radio color="secondary" />}
            label="London"
          />
          <FormControlLabel
            value="prague"
            control={<Radio color="secondary" />}
            label="Prague"
          />
          <FormControlLabel
            value="bratislava"
            control={<Radio color="secondary" />}
            label="Bratislava"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default Filter;
