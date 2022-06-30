import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/components/NotFound/NotFound";
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Home/Home";
import NavBar from "./pages/Home/NavBar/NavBar";
// import Monthly from "./pages/Home/PricingPlan/Monthly/Monthly";
// import Yearly from "./pages/Home/PricingPlan/Yearly/Yearly";
import Login from "./pages/Login/Login/Login";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}> 
          {/* <Route path="/monthly" element={<Monthly/>} />
          <Route path="/yearly" element={<Yearly/>} /> */}
        </Route>
        <Route path="/home" element={<Home />} ></Route>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="privacy__policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
