import React from "react";
import LeftSideBar from "./LeftSideBar";

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-4 px-6">Header</header>
      <div className="flex flex-grow flex-wrap">
        <div className="bg-gray-700 w-full sm:w-1/6 p-4 hidden sm:flex">
          <LeftSideBar />
        </div>
        <main className="flex-grow p-4">{children}</main>
      </div>
      <footer className="bg-gray-800 text-white py-4 px-6">Footer</footer>
    </div>
  );
};

export default LayoutWrapper;
