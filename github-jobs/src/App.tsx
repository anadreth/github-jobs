import { Container, List, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.tsx/Navbar";
import githubJobs from "./api/githubJobs";
import JobList from "./components/JobList/JobList";
import SearchBar from "./components/SearchBar/SearchBar";
import Filter from "./components/Filter/Filter";

function App() {
  const [jobs, setJobs] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

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
      setErrorMessage("");
    } else {
      setErrorMessage("No jobs found");
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <Container>
      <Navbar />
      <SearchBar />
      <Filter />
      {!errorMessage ? (
        <JobList jobs={jobs} />
      ) : (
        <Typography variant="body1">{errorMessage}</Typography>
      )}
    </Container>
  );
}

export default App;
