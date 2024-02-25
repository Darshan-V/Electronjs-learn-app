import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const LayoutWrapper = ({ children }: any) => {
  return (
    <div className=" ">
      <div className="">
        <Header />
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LayoutWrapper;
