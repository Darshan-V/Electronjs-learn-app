import React from "react";
import Head from "next/head";
import Image from "next/image";
import LayoutWrapper from "../components/Layout";

const AboutPage: React.FC = () => {
  return (
    <LayoutWrapper>
      <Head>
        <title>About - Nextron (with-tailwindcss)</title>
      </Head>
      <div className="grid grid-col-1 text-2xl w-full text-center">
        <div>
          <Image
            className="ml-auto mr-auto"
            src="/images/logo.png"
            alt="Logo image"
            width="256"
            height="256"
          />
        </div>
        <span>⚡ Electron ⚡</span>
        <span>+</span>
        <span>Next.js</span>
        <span>+</span>
        <span>tailwindcss</span>
        <span>=</span>
        <span>💕 </span>
      </div>
    </LayoutWrapper>
  );
};

export default AboutPage;
