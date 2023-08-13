import Navbar from "@/Components/Navbar";
import React from "react";

const RootLayout = ({ children }) => {
  return (
    <div className="mx-auto container">
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default RootLayout;
