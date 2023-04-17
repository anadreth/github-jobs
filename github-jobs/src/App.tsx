import { Container } from "@mui/material";
import Navbar from "./components/Navbar.tsx/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import { useFindNearestCity } from "./hooks/useFindNearestCity";

function App() {

  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":jobId" element={<JobDetails />} />
      </Routes>
    </Container>
  );
}

export default App;
