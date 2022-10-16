import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar";

const RootTemplate = () => {
  return (
    <div className='page-wrap'>
      <div className='container'>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default RootTemplate;
