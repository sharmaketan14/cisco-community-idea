import Topbar from "./components/topbar/Topbar";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/write" element={<Write/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/single" element={<Single/>} />
      </Routes>
    </Router>
  );
}

export default App;
