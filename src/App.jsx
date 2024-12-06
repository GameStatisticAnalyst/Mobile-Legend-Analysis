import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { lazy } from "react";

const Page = lazy(() => import("./pages/Page"));
const Login = lazy(() => import("./pages/login"));
const Register = lazy(() => import("./pages/register"));

const NotFound = lazy(() => import("./pages/notFound"));

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Page />} />
      </Routes>
    </Router>
  );
}

