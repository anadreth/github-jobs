import { Card, CardContent, Box, Typography } from "@mui/material";
import { BetweenBox, CenteredBox } from "../styled/Boxes";
import BusinessIcon from "@mui/icons-material/Business";
import PublicIcon from "@mui/icons-material/Public";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import theme from "../../theme/theme";
import { TruncatedTypography } from "../styled/Typographies";

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

  return (
    <Card sx={{width: "100%"}}>
      <CardContent sx={{ display: "flex"}}>
          <BusinessIcon sx={{width: "70px", height:"auto", mx: 2}}/>
   
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

         <TruncatedTypography text={job.title} color="primary" variant="h2" maxWidth="50vw"/>

          {job.remote && (
            <Typography variant="button" color="primary" noWrap>
              Remote
            </Typography>
          )}

          <BetweenBox>
            <Typography variant="button" color={theme.palette.primary.light} noWrap>
              <PublicIcon fontSize="small" />
              {job.location}
            </Typography>
            <Typography variant="button" color={theme.palette.primary.light} noWrap>
              <AccessTimeIcon fontSize="small" />
              {job.created_at.toString().split("").slice(0, 2).join("")}
            </Typography>
          </BetweenBox>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobCard;
