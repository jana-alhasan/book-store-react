import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/Header/Header";
const RootPage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RootPage;
