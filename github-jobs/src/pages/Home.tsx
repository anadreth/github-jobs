import JobList from "./../components/JobList/JobList";
import SearchBar from "./../components/SearchBar/SearchBar";
import Filter from "./../components/Filter/Filter";
import { Box } from "@mui/material";
import { useState, useEffect, SyntheticEvent } from "react";
import githubJobs from "../api/githubJobs";
import { JobType } from "./../components/JobList/JobList";

const Home = () => {

  const [jobs, setJobs] = useState<JobType[]>([]);
  const [queriedJobs, setQueriedJobs] = useState<JobType[]>([]);
  const [checked, setChecked] = useState<boolean>(false);
  const [searchText, setSearchText] = useState("");
  const [cityValue, setCityValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState("");

  const allJobs = jobs.slice(0);
  const remoteJobs = jobs.slice(0).filter((job) => job.remote);
  const locationFilteredJobs = jobs
    .slice(0)
    .filter((job) => job.location == cityValue);
  const remoteAndLocationFilteredJobs = jobs
    .slice(0)
    .filter((job) => job.location == cityValue && job.remote);

  const searchBarFilteredJobs = jobs
    .slice(0)
    .filter(
      (j) =>
        j.company_name.toLowerCase().match(searchText.toLowerCase()) ||
        j.title.toLowerCase().match(searchText.toLowerCase()) ||
        j.location.toLowerCase().match(searchText.toLowerCase())
    );

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement> | SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    setCityValue(event.target.value);
  };

  const handleSearchBar = () => {
    setQueriedJobs(searchBarFilteredJobs);
  };

  const getJobs = async () => {
    const response = await githubJobs.get(
      "https://www.arbeitnow.com/api/job-board-api",
      {
        method: "GET",
      }
    );
    const data = await response.data.data;

    if (data.length > 0) {
      setJobs(data);
      setQueriedJobs(data);
      setErrorMessage("");
    } else {
      setErrorMessage("No jobs found");
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <Box>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearchBar={handleSearchBar}
      />
      <Filter
        checked={checked}
        setChecked={setChecked}
        jobs={allJobs}
        handleRadioChange={handleRadioChange}
      />
      <JobList
        jobs={
          checked && cityValue
            ? remoteAndLocationFilteredJobs
            : checked
            ? remoteJobs
            : cityValue
            ? locationFilteredJobs
            : queriedJobs
        }
      />
    </Box>
  );
};

export default Home;
