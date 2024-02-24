import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const LayoutWrapper = ({ children }: any) => {
  return (
    <div className="flex flex-col h-screen gap-2 ">
      <div className="flex flex-col flex-1">
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
