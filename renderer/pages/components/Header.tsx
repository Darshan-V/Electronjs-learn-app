import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 ">
      <Breadcrumbs>
        <BreadcrumbItem href="/home">Home</BreadcrumbItem>
      </Breadcrumbs>
    </header>
  );
};

export default Header;
