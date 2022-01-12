import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Downloads from "../components/Downloads";
import SideBar from "../components/SideBar";

const Profile = () => {
  return (
    <div className="notfound">
      <p>Welocme back jamal kaksouri!</p>
      <SideBar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/downloads" element={<Downloads />} />
      </Routes>
    </div>
  );
};

export default Profile;
