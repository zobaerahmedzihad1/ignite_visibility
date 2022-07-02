import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./pages/Checkout/Checkout/Checkout";
import NotFound from "./pages/components/NotFound/NotFound";
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Home/Home";
import NavBar from "./pages/Home/NavBar/NavBar";
import MonthlyBilled from "./pages/Home/PricingPlan/MonthlyBilled/MonthlyBilled";
import YearlyBilled from "./pages/Home/PricingPlan/YearlyBilled/YearlyBilled";
import Login from "./pages/Login/Login/Login";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/home" element={<MonthlyBilled />} />
          <Route path="/" element={<MonthlyBilled />} />
          <Route path="/yearly-billed" element={<YearlyBilled />} />
        </Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="privacy__policy" element={<PrivacyPolicy />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
