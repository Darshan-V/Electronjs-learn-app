import Link from "next/link";
import React from "react";

const LeftSideBar: React.FC = () => {
  const menuItems = [
    { id: 1, label: "Home", icon: "home" },
    { id: 2, label: "About", icon: "info" },
    { id: 3, label: "Settings", icon: "settings" },
    // Add more menu items as needed
  ];

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className=" shadow-md w-full h-fit  p-2 ">
        <div className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <Link href={""}>
              <button
                key={item.id}
                className="flex items-center space-x-2 py-2 border border-white rounded w-full text-left hover:bg-gray-600 hover:text-white px-4 transition-colors duration-300 ease-in-out"
              >
                <span className={`icon ${item.icon}`} />
                <span className="label">{item.label}</span>
              </button>
            </Link>
          ))}
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray-500" />
      <div className=" shadow-md w-full h-fit   p-2 ">
        <div className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <Link href={""}>
              <button
                key={item.id}
                className="flex items-center space-x-2 py-2 border border-white rounded w-full text-left hover:bg-gray-600 hover:text-white px-4 transition-colors duration-300 ease-in-out"
              >
                <span className={`icon ${item.icon}`} />
                <span className="label">{item.label}</span>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
