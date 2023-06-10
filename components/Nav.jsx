/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { EditOutlined } from "@ant-design/icons";
import useNavigationBar from "./hooks/useNavigationBar";
import { useRouter } from "next/router";
import RenderThemeToggler from "./UI/RenderThemeToggler";
import RenderCloseImage from "./UI/RenderCloseImage";
import { accountClient } from "@/appWrite-client/settings.config";

function Nav() {
  const [navMenu, openMenu, closeMenu] = useNavigationBar(); // Get navigation bar state and functions for opening/closing the menu
  const [arrayUsed, setArrayUsed] = useState([]); // Define state for storing array of upcoming appointments
  const router = useRouter();
  const links = [
    {
      id: 1,
      link: "/home",
      imgSrc: "/home.svg",
      label: "Home",
    },
    {
      id: 2,
      link: "/appointments",
      imgSrc: "/cross.svg",
      label: "Appointments",
    },
    {
      id: 3,
      link: "/specialists",
      imgSrc: "/specialists.svg",
      label: "Specialists",
    },
    {
      id: 4,
      link: "/hospitals",
      imgSrc: "/hospitals.svg",
      label: "Hospitals",
    },
    {
      id: 5,
      link: "/aboutus",
      imgSrc: "/aboutus.svg",
      label: "About us",
    },
  ];

  // Define function for loading user's upcoming appointments from AppWrite
  const handleLoad = async () => {};

  useEffect(() => {
    handleLoad();
  }, []);

  // Function for transitioning to the appointments page
  const handleTransition = () => {
    if (navMenu) {
      // If the menu is open
      closeMenu();
    }
    router.push("/appointments");
  };

  // Function for logging out
  const handleLogOut = () => {
    try {
      accountClient.deleteSession("current").then(function () {
        router.push("/login");
      });
    } catch (error) {
      console.log("Error logging out", error.message);
    }
  };

  return (
    <nav
      className={`fixed bottom-0 xl:top-0 left-0 z-30 h-16 w-screen bg-[#2A9988]`}
    >
      <div className="flex items-center justify-around h-full xl:px-10">
        <Link href="/" className={`xl:flex items-center hidden `}>
          <h1 className="text-2xl font-thin text-white">
            NEXT<span className="font-normal">GEN</span>
          </h1>
        </Link>

        <ul className="flex w-full h-full text-base">
          <div className="flex items-center justify-around w-full h-full py-0 text-white xl:justify-end xl:gap-14">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.link}
                  className="xl:duration-300 hover:opacity-50"
                >
                  <div className="relative w-5 sm:w-6 aspect-square xl:hidden">
                    <Image fill src={link.imgSrc} alt="closeMenu" />
                  </div>

                  <div className="hidden xl:block">
                    <p>{link.label}</p>
                  </div>
                </Link>
              </li>
            ))}

            <div className="hidden xl:block">
              <RenderThemeToggler />
            </div>

            <button
              onClick={() => handleLogOut()}
              className="hidden xl:flex items-center justify-center py-2 px-4 bg-white hover:bg-[#1C665B] text-[#2a9988] hover:text-white duration-500 rounded-lg shadow-lg"
            >
              Logout
            </button>

            <button
              title="Open navigation menu"
              onClick={openMenu}
              className="relative w-5 text-lg text-white sm:w-6 aspect-square xl:hidden"
            >
              <Image fill src={"/open.svg"} alt="closeMenu" />
            </button>
          </div>
        </ul>

        <div
          className={`flex flex-col gap-6 px-6 items-start justify-center text-base absolute bottom-0 h-screen w-full bg-[#F8FFFE] dark:bg-[#0e1217] xl:hidden duration-500 ${navMenu}`}
        >
          <div className="flex items-center justify-between w-full mt-24">
            <Link
              href={"/editprofile"}
              className="flex flex-row items-center gap-2 sm:px-16 px-5 text-sm py-2 text-white bg-[#2a9988] hover:bg-[#1C665B] rounded-lg xl:hidden"
            >
              <EditOutlined /> Edit Profile
            </Link>

            <RenderThemeToggler />

            <RenderCloseImage closeMenu={closeMenu} />
          </div>

          <div className="relative w-full h-full pt-10 pb-8 overflow-hidden scrollbar-hide">
            <div
              className={`w-full h-full ${
                arrayUsed.length == 0
                  ? "flex flex-col items-center justify-center gap-10"
                  : "md:grid md:grid-cols-2 md:gap-4 xl:gap-10"
              } overflow-scroll scrollbar-hide`}
            >
              {arrayUsed.length > 0 ? (
                arrayUsed.map((data) => {
                  return (
                    <div
                      className="flex h-fit flex-col mx-auto w-[95%] bg-[#FCFCFC] rounded-lg shadow-lg mb-8"
                      key={data.id}
                    >
                      <div className="flex items-center justify-between p-4 border-b">
                        <p className="text-sm xl:text-lg">
                          {data.appointmentDate + " | " + data.appointmentTime}
                        </p>

                        <button
                          onClick={() => handleTransition()}
                          className="px-3 py-1 text-red-500 border border-red-500 rounded-lg"
                        >
                          Cancel app.
                        </button>
                      </div>
                      <div className="flex items-center justify-between w-full p-4">
                        <div className="flex items-center gap-2">
                          <div className="relative w-20 overflow-hidden rounded-full xl:w-32 aspect-square">
                            <Image
                              fill
                              src={data.doc}
                              priority
                              alt="ProfilePic"
                            />
                          </div>
                          <div>
                            <h1 className="xl:text-2xl">{data.specialist}</h1>
                            <p className="text-sm xl:text-lg">
                              {data.department}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleTransition()}
                          className="px-3 py-1 text-white border bg-[#1C665B] rounded-lg"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <>
                  <p className="text-black dark:text-white md:text-xl">
                    No appointment(s) found
                  </p>
                  <div className="relative w-40 md:w-48 aspect-square">
                    <Image
                      src={"/emptyList.svg"}
                      fill
                      priority
                      alt="placeholderImg"
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex justify-center w-full gap-6 mb-8">
            <Link
              className="flex items-center justify-center gap-2 w-1/2 sm:w-1/4 text-sm py-3 bg-[#2a9988] hover:bg-[#1C665B] text-white rounded-lg shadow-lg"
              href={"/booking"}
            >
              <div className="relative w-5 h-5">
                <Image src={"/cross.svg"} fill alt="placeholderImg" />
              </div>
              Book appointment
            </Link>
            <button
              onClick={() => handleLogOut()}
              className="flex w-1/2 sm:w-1/4 items-center justify-center text-sm gap-2 py-3 bg-[#2a9988] hover:bg-[#1C665B] text-white rounded-lg shadow-lg"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
