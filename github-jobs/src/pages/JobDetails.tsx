import { Box, Typography, Button, Link } from "@mui/material";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { JobType } from "../components/JobList/JobList";
import IconWithText from "../components/Details/IconWithText";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BusinessIcon from "@mui/icons-material/Business";
import PublicIcon from "@mui/icons-material/Public";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { AroundBox, BetweenBox } from "../components/styled/Boxes";
import theme from "../theme/theme";

const JobDetails = () => {
  let { jobId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { from } = location.state;

  console.log(from)

  const currentJob = from

  const daysAgo = currentJob.created_at
    .toString()
    .split("")
    .slice(0, 2)
    .join("");

  return (
    <Box>
      <Box sx={{pb: 3}}>
        <Button onClick={() => navigate(-1)} color="secondary" sx={{pl: 0}}>
          <KeyboardBackspaceIcon fontSize="small" sx={{pr: 1}}/>Back to Search
        </Button>
        <Typography variant="body2" color={theme.palette.primary.light}>HOW TO APPLY</Typography>
        <Typography>
          If interested, please visit{" "}
          <Link href={currentJob.url} color="primary">
            ArbeitNow.
          </Link>
        </Typography>
      </Box>
      <Box sx={{pb: 3}}>
        <Typography variant="h1" sx={{ fontSize: "24px" }} color="primary">
          {currentJob.title}
        </Typography>
        {currentJob.remote && (
          <Typography variant="button" color="primary" noWrap>
            Remote
          </Typography>
        )}
        <IconWithText
          text={daysAgo === "1" ? daysAgo + " day ago" : daysAgo + " days ago"}
          icon={<AccessTimeIcon fontSize="small" />}
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <BusinessIcon sx={{ width: "70px", height: "auto", pr: 1 }} />
        <AroundBox sx={{ flexDirection: "column" }}>
          <Typography color="primary">{currentJob.company_name}</Typography>
          <IconWithText
            text={currentJob.location}
            icon={<PublicIcon fontSize="small" />}
          />
        </AroundBox>
      </Box>
      <Box>
        <Typography
          variant="body1"
          color="primary"
          dangerouslySetInnerHTML={{ __html: currentJob.description }}
        />
      </Box>
    </Box>
  );
};

export default JobDetails;
