import React from "react";
import Nav from "@/components/Nav";
import Head from "next/head";

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
      <main className="pt-5 pb-24 xl:pt-24 space-y-5 h-screen w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl text-center md:text-6xl text-[#2A9988]">
          About us
        </h1>
        <div className="w-[90%] max-w-3xl mx-auto space-y-5">
          <p className="first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
            NextGenPatients is an open-source web application aiming to
            revolutionize healthcare by providing convenient access to
            consultations and appointments. It is a hackathon project developed
            by Chuku Success and Mainasara Olulanke.
          </p>

          <p>
            <b className="text-lg">
              While efforts have been made to ensure accuracy, NextGenPatients
              is not an actual medical website, and users are advised to consult
              qualified healthcare professionals for reliable advice.
            </b>
          </p>
          <p>
            The vision is to improve easy access to essential medical services
            and create a healthier future. Contribution or usage of our source
            code is permitted in compliance with our Open Source License and
            laws of medical authorities in your country, state or region.
          </p>
        </div>
      </main>

      <Nav />
    </>
  );
}

export default aboutus;
