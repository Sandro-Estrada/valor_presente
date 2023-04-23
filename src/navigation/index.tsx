import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout";
import Home from "../pages/Home";
import Error from "../pages/Errors";
import { EErrorTypes } from "../types/errors";

function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="error" element={<Error type={EErrorTypes.NOT_FOUND} />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<Error type={EErrorTypes.NOT_FOUND} />} />
      </Route>
    </Routes>
  );
}

export default Navigation;
