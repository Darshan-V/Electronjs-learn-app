import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import LayoutWrapper from "./components/Layout";

export default function NextPage() {
  return (
    <React.Fragment>
      <LayoutWrapper>
        <Head>
          <title>Next - Nextron (with-tailwindcss)</title>
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
          <span>⚡ Nextron ⚡</span>
        </div>
        <div className="mt-1 w-full flex-wrap flex justify-center">
          <Link href="/home">
            <button className="btn-blue">Go to home page</button>
          </Link>
        </div>
      </LayoutWrapper>
    </React.Fragment>
  );
}
