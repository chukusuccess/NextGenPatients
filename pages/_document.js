import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#F8FFFE" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="NextGen Patients" />
        <meta name="twitter:card" content="NextGen Patients" />
        <meta
          name="twitter:url"
          content="https://next-gen-patients.vercel.app"
        />
        <meta name="twitter:title" content="NextGenPatients" />
        <meta
          name="twitter:description"
          content="Get Consultation from the comfort of your own home"
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NextGen" />
        <meta
          property="og:description"
          content="Get Consultation from the comfort of your own home"
        />
        <meta property="og:site_name" content="NextGen Patients" />
        <meta
          property="og:url"
          content="https://next-gen-patients.vercel.app"
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        />
      </Head>
      <body className="bg-[#F8FFFE] dark:bg-[#0e1217]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
