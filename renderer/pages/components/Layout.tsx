import React from "react";

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-4 px-6">Header</header>
      <div className="flex flex-grow">
        <aside className="bg-gray-700 w-1/4 p-4">Left Sidebar</aside>
        <main className=" flex-grow p-4">{children}</main>
      </div>
      <footer className="bg-gray-800 text-white py-4 px-6">Footer</footer>
    </div>
  );
};

export default LayoutWrapper;
