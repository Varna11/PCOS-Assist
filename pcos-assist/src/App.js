import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./LandingPage/LandingPage";
import CommunityForum from "./CommunityForum/CommunityForum";
// import PreventiveMeasures from "./PreventiveMeasures/PreventiveMeasures";
import Awareness from "./Awareness/Awareness";
import NavBar from "./NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Login />}> */}
        <Route index element={<LandingPage />} />
        <Route path="communityForum" element={<CommunityForum />} />
        {/* <Route path="preventiveMeasures" element={<PreventiveMeasures />} /> */}
        <Route path="awareness" element={<Awareness />} />
      </Routes>
    </div>
  );
}

export default App;
