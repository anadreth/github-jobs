import {
  List,
  FormControl,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import theme from "../../theme/theme";
import { JobType } from "../JobList/JobList";
import { SetStateAction, SyntheticEvent, useState } from "react";

interface LocationFilterTypes {
  jobs: JobType[];
  handleLocationRadioFilter: (event: React.ChangeEvent<HTMLInputElement> | SyntheticEvent<Element, Event>, checked: boolean) => void
}

const LocationFilter = ({ jobs, handleLocationRadioFilter }: LocationFilterTypes) => {
  const [locationFilterText, setLocationFilterText] = useState<string>("");

  const noDuplicateJobs = jobs.filter((obj, index, arr) => {
    return index === arr.findIndex((t) => t.location === obj.location);
  }).sort((a, b) => a.location.localeCompare(b.location))

  const filteredJobs = noDuplicateJobs.filter(job => job.location.toLowerCase().match(locationFilterText.toLowerCase()))

  const handleLocationFilterText = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setLocationFilterText(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <Typography
        sx={{ pt: 1, pb: 2 }}
        variant="body2"
        color={theme.palette.primary.light}
      >
        LOCATION
      </Typography>
      <TextField
        variant="outlined"
        label="City, state, country..."
        color="secondary"
        onChange={handleLocationFilterText}
        value={locationFilterText}
        fullWidth
      ></TextField>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        <FormControlLabel
            key="none"
            value=""
            control={<Radio color="secondary" value="" />}
            label="No location"
            onChange={handleLocationRadioFilter}
          />
        {filteredJobs.length ? filteredJobs.slice(0, 4).map((job) => (
          <FormControlLabel
            key={job.slug}
            value={job.location}
            control={<Radio color="secondary" value={job.location} />}
            label={job.location}
            onChange={handleLocationRadioFilter}
          />
        )) : <Typography variant="body1" sx={{pt: 2}}>No location to select</Typography>}
      </RadioGroup>
    </FormControl>
  );
};

export default LocationFilter;
