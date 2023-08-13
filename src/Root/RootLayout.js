import Navbar from "@/Components/Navbar";
import React from "react";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default RootLayout;
