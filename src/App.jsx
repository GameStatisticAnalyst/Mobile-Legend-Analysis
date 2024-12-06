import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { lazy } from "react";

const Page = lazy(() => import("./pages/Page"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Page />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
