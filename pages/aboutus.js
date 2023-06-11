import Nav from "@/components/Nav";
import Head from "next/head";
import React from "react";

function aboutus() {
  return (
    <>
      <Head>
        <title>About us | NEXTGEN Patients</title>
        <meta
          name="description"
          content="Get Consultation from the comfort of your own home"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-5 pb-14 xl:pt-24">
        <h1 className="text-4xl text-center md:text-6xl text-[#2A9988]">
          About us
        </h1>

        <div></div>
      </main>

      <Nav />
    </>
  );
}

export default aboutus;
