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
      <main className="pt-5 pb-24 xl:pt-24 space-y-10">
        <h1 className="text-4xl text-center md:text-6xl text-[#2A9988]">
          About us
        </h1>

        <div className="w-[90%] max-w-3xl mx-auto space-y-10">
          <p className="first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
            Welcome to NextGenPatients, the revolutionary open-source web
            application that aims to transform the healthcare sector. Our
            mission is to make healthcare accessible and convenient by enabling
            users to receive consultations from the comfort of their homes and
            book appointments with specialists.
          </p>

          <p>
            At NextGenPatients, we believe that everyone deserves easy access to
            quality healthcare services. Our platform empowers users to connect
            with medical professionals, seek expert advice, and receive
            personalized care, all through a user-friendly interface.
          </p>

          <p>
            The brains behind this innovative project are Chuku Success and
            Mainasara Olulanke. As passionate developers, we recognized the need
            for a more convenient and efficient healthcare system. With our
            combined expertise and dedication, we have designed and built
            NextGenPatients to address these challenges and provide an intuitive
            solution for patients and healthcare providers alike.
          </p>

          <p>
            It&apos;s important to note that NextGenPatients was developed as
            part of a hackathon project. While we have made every effort to
            ensure the accuracy and reliability of the information presented, we
            strongly advise users to exercise caution and not consider any
            information on the web app as fact or truth without consulting a
            qualified healthcare professional.
          </p>

          <p>
            Join us on this journey as we strive to revolutionize the healthcare
            sector and improve access to essential medical services. Together,
            we can make a positive impact on people&apos;s lives and create a
            healthier future for all.
          </p>

          <p>
            Thank you for choosing NextGenPatients. We are excited to have you
            onboard!
          </p>

          <p>
            Disclaimer: NextGenPatients is a hackathon project and should not be
            considered as a substitute for professional medical advice. Always
            consult a qualified healthcare provider for accurate diagnosis and
            treatment options.
          </p>
        </div>
      </main>

      <Nav />
    </>
  );
}

export default aboutus;
