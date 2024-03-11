import React from "react";
import LeftSideBar from "./LeftSideBar";
import Header from "./Header";

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <header className="bg-gray-800 text-white py-4 px-6 ">
        <Header />
      </header>
      <div className="flex flex-grow flex-wrap">
        <div className="bg-gray-700 min-w-fit w-full sm:w-1/6 p-4 hidden sm:flex">
          <LeftSideBar />
        </div>
        <div className="sm:hidden flex relative h-fit ">
          <button className="absolute px-4">hello</button>
        </div>
        <button></button>
        <main className="flex-grow p-4 bg-gradient-to-br from-cyan-900 to-gray-800">
          {children}
        </main>
      </div>
      <footer className="bg-gray-800 text-white py-4 min-h-32 px-6">
        Footer
      </footer>
    </div>
  );
};

export default LayoutWrapper;
