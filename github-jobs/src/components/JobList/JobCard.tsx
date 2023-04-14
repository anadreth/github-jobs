import { Card, CardContent, Box, Typography, IconButton } from "@mui/material";
import { BetweenBox } from "../styled/Boxes";
import BusinessIcon from "@mui/icons-material/Business";
import PublicIcon from "@mui/icons-material/Public";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { TruncatedTypography } from "../styled/Typographies";
import IconWithText from "../Details/IconWithText";
import { Link } from "react-router-dom";

type JobCardProps = {
  job: {
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
};

const defaultProps: JobCardProps = {
  job: {
    slug: "slug",
    company_name: "company_name",
    title: "title",
    description: "description",
    remote: true,
    url: "url",
    tags: [],
    job_types: [],
    location: "location",
    created_at: 1,
  },
};

const JobCard: React.FC<JobCardProps> = (props) => {
  const { job } = props;

  const daysAgo = job.created_at.toString().split("").slice(0, 2).join("");

  return (
    <Card sx={{ width: "100%" }} color="secondary">
      <Link to={`${job.slug}`} state={{ from: job }} style={{textDecoration: "none" }}>
        <CardContent
          sx={{ display: "flex", width: "100%" }}
        >
          <BusinessIcon
            sx={{ width: "70px", height: "auto", mx: 2, color: "black" }}
          />

          <Box
            sx={{
              height: "100px",
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Typography variant="button" color="primary">
              {job.company_name}
            </Typography>

            <TruncatedTypography
              text={job.title}
              color="primary"
              variant="h2"
              maxWidth="50vw"
            />

            {job.remote && (
              <Typography variant="button" color="primary">
                Remote
              </Typography>
            )}

            <BetweenBox>
              <IconWithText
                text={job.location}
                icon={<PublicIcon fontSize="small" />}
              />
              <IconWithText
                text={
                  daysAgo === "1" ? daysAgo + "day ago" : daysAgo + "days ago"
                }
                icon={<AccessTimeIcon fontSize="small" />}
              />
            </BetweenBox>
          </Box>
        </CardContent>
      </Link>
    </Card>
  );
};

JobCard.defaultProps = defaultProps;

export default JobCard;
