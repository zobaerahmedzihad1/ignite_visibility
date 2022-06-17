import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/components/NotFound/NotFound";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="login" element={<Login/>} />
        <Route path="sign-up" element={<SignUp/>} />
        <Route path="privacy__policy" element={<PrivacyPolicy/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
