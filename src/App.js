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
import { ToastContainer } from "react-toastify";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Profile from "./pages/Dashboard/Profile/Profile";
import AddReview from "./pages/Dashboard/AddReview/AddReview";
import MyOrders from "./pages/Dashboard/MyOrders/MyOrders";
import Blogs from "./pages/Blogs/Blogs/Blogs";
import Payment from "./pages/Dashboard/Payment/Payment/Payment";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard/AdminDashboard";
import ManageReview from "./pages/AdminDashboard/ManageReview/ManageReview";
import AllOrders from "./pages/AdminDashboard/AllOrders/AllOrders";
import AllUser from "./pages/AdminDashboard/AllUser/AllUser";
import MakeAdmin from "./pages/AdminDashboard/MakeAdmin/MakeAdmin";
import PaymentHistory from "./pages/Dashboard/PaymentHistory/PaymentHistory";
import { Toaster } from "react-hot-toast";
import AddBlog from "./pages/AdminDashboard/AddBlog/AddBlog";

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
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/privacy__policy" element={<PrivacyPolicy />} />
        <Route
          path="/checkout/:_id"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route path="/dashboard" element={<Profile />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/add-review" element={<AddReview />} />
          <Route path="/dashboard/my-orders" element={<MyOrders />} />
          <Route path="/dashboard/my-orders" element={<MyOrders />} />
          <Route path="/dashboard/payment/:_id" element={<Payment />} />
          <Route
            path="/dashboard/payment-history"
            element={<PaymentHistory />}
          />
        </Route>

        <Route
          path="/dashboard/admin"
          element={
            <RequireAuth>
              <AdminDashboard />
            </RequireAuth>
          }
        >
          <Route path="/dashboard/admin" element={<AllUser />} />
          <Route path="/dashboard/admin/all__user" element={<AllUser />} />
          <Route
            path="/dashboard/admin/manage__reviews"
            element={<ManageReview />}
          />
          <Route path="/dashboard/admin/all__orders" element={<AllOrders />} />
          <Route path="/dashboard/admin/add__blog" element={<AddBlog />} />
          <Route path="/dashboard/admin/payment/:_id" element={<Payment />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Toaster position="top-center" reverseOrder={false} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
