import { Box, List, ListItem } from "@mui/material";
import JobCard from "./JobCard";
import { useState } from "react";
import usePagination from "../../hooks/usePagination";
import { Pagination } from "@mui/material";
import { CenteredBox } from "../styled/Boxes";
import { Link } from "react-router-dom";

export type JobType = {
  slug: string;
  company_name: string;
  title: string;
  description: string;
  remote: boolean;
  url: string;
  tags: string[];
  job_types: string[];
  location: string;
  created_at: number;
};

interface JobListTypes {
  jobs: JobType[];
}

const JobList = ({ jobs }: JobListTypes) => {
  const [currentPage, setCurrentPage] = useState(1);
  const PER_PAGE = 5;

  const count = Math.ceil(jobs.length / PER_PAGE);
  const _DATA = usePagination(jobs, PER_PAGE);

  const handlePaginationCount = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
    _DATA.jump(page);
  };

  //JOB SLUG === unique ID

  return (
    <Box>
      <List>
        {_DATA.currentData().map((job: JobType) => (
          <ListItem key={job.slug} sx={{ px: 0 }}>
            <JobCard job={job} />
          </ListItem>
        ))}
      </List>
      <CenteredBox>
        <Pagination
          count={count}
          page={currentPage}
          siblingCount={screen.width > 400 ? 1 : 0}
          onChange={handlePaginationCount}
          color="secondary"
          shape="rounded"
        />
      </CenteredBox>
    </Box>
  );
};

export default JobList;
