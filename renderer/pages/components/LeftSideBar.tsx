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
    <div className="flex flex-col gap-4 w-full min-w-fit">
      <div className="  w-full h-fit  p-2 ">
        <div className="flex flex-col ">
          {menuItems.map((item) => (
            <Link href={`/${item.label.toLowerCase()}`} key={item.id}>
              <button
                key={item.id}
                className="flex text-amber-50 items-center shadow-md shadow-gray-750  py-2  rounded w-full justify-center hover:bg-gray-600 hover:text-white px-4 transition-colors duration-300 ease-in-out"
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
