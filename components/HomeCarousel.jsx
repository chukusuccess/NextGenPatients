import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Carousel } from "antd";

const HomeCarousel = ({ searchField }) => {
  return (
    <>
      {searchField === "" ? (
        <div className="block w-full md:hidden lg:hidden">
          <Carousel className="w-full h-full" pauseOnHover autoplay>
            <div className="block w-full px-1 pt-16 md:hidden">
              <div className="text-white w-full bg-[#2A9988] rounded-xl relative flex flex-row">
                <div className="flex flex-col items-start justify-start w-2/3 px-4 py-4">
                  <h1 className="text-lg font-light">
                    Learn How to Stay Healthy From these Tips!
                  </h1>
                  <p className="text-xs font-light">
                    Eat fruits, Drink water, Exercise regularly, avoid
                    smoking...
                  </p>
                  <br />
                  <Link
                    href={"/appointments"}
                    className="px-3 py-2 rounded-md font-semibold text-base text-[#22796c] bg-[#ffffff]"
                  >
                    Get consultation
                  </Link>
                </div>
                <Image
                  width={150}
                  height={250}
                  priority
                  className="absolute bottom-0 right-0 z-10 overflow-visible"
                  src="/doctor.png"
                  alt="doctor"
                />
              </div>
            </div>

            <div className="block w-full px-1 pt-14 md:hidden">
              <div className="text-white w-full bg-[#2A9988] rounded-xl relative flex flex-row">
                <div className="flex flex-col items-start justify-start w-2/3 px-4 py-4">
                  <h1 className="text-lg font-light">
                    Learn How to Manage Stress in Your Daily Life!
                  </h1>
                  <p className="text-xs font-light">
                    Practice meditation, Exercise regularly, Take breaks,
                    Practice self-care...
                  </p>
                  <br />
                  <Link
                    href={"/appointments"}
                    className="px-3 py-2 rounded-md font-semibold text-base text-[#22796c] bg-[#ffffff]"
                  >
                    Get consultation
                  </Link>
                </div>
                <Image
                  width={175}
                  height={250}
                  priority
                  className="absolute bottom-0 right-0 z-10 overflow-visible"
                  src="/doctorLg.png"
                  alt="doctor"
                />
              </div>
            </div>

            <div className="block w-full px-1 pt-16 md:hidden">
              <div className="text-white w-full bg-[#2A9988] rounded-xl relative flex flex-row">
                <div className="flex flex-col items-start justify-start w-2/3 px-4 py-4">
                  <h1 className="text-lg font-light">
                    Learn these Tips for a Healthy and Balanced Diet!
                  </h1>
                  <p className="text-xs font-light">
                    Eat whole grains, Drink water, Limit processed foods, Limit
                    sugary foods...
                  </p>
                  <br />
                  <Link
                    href={"/appointments"}
                    className="px-3 py-2 rounded-md font-semibold text-base text-[#22796c] bg-[#ffffff]"
                  >
                    Get consultation
                  </Link>
                </div>
                <Image
                  width={160}
                  height={250}
                  priority
                  className="absolute bottom-0 right-0 z-10 overflow-visible"
                  src="/doctorWomanLg.png"
                  alt="doctor"
                />
              </div>
            </div>
          </Carousel>
        </div>
      ) : (
        ""
      )}
      {searchField === "" ? (
        <div className="hidden w-full md:block lg:hidden">
          <Carousel className="w-full h-full" autoplay pauseOnHover>
            <div className="hidden w-full px-2 pt-20 md:block lg:hidden">
              <div className="text-white w-full bg-[#2A9988] rounded-xl relative flex flex-row">
                <div className="flex flex-col items-start justify-start w-2/3 py-5 pl-8 pr-0">
                  <h1 className="text-2xl font-semibold">
                    Learn how to stay Healthy from these tips!
                  </h1>
                  <p className="text-xl font-light">
                    Eat fruits, <br /> Drink water, <br /> Exercise regularly,
                    <br />
                    and avoid smoking...
                  </p>
                  <br />
                  <Link
                    href={"/appointments"}
                    className="px-6 py-3 rounded-md font-semibold text-lg text-[#22796c] bg-[#ffffff]"
                  >
                    Get consultation
                  </Link>
                </div>
                <Image
                  width={200}
                  height={200}
                  priority
                  className="absolute bottom-0 right-0 z-10 overflow-visible"
                  src="/doctor.png"
                  alt="doctor"
                />
              </div>
            </div>
            <div className="hidden w-full px-2 pt-20 md:block lg:hidden">
              <div className="text-white w-full bg-[#2A9988] rounded-xl relative flex flex-row">
                <div className="flex flex-col items-start justify-start w-2/3 px-8 py-5">
                  <h1 className="text-2xl font-semibold">
                    Learn How to Manage Stress Daily!
                  </h1>
                  <p className="text-xl font-light">
                    Practice meditation,
                    <br /> Exercise regularly,
                    <br /> Take breaks,
                    <br />
                    Practice self-care...
                  </p>
                  <br />
                  <Link
                    href={"/appointments"}
                    className="px-6 py-3 rounded-md font-semibold text-lg text-[#22796c] bg-[#ffffff]"
                  >
                    Get consultation
                  </Link>
                </div>
                <Image
                  width={260}
                  height={200}
                  priority
                  className="absolute bottom-0 right-0 z-10 overflow-visible"
                  src="/doctorLg.png"
                  alt="doctor"
                />
              </div>
            </div>
            <div className="hidden w-full px-2 pt-20 md:block lg:hidden">
              <div className="text-white w-full bg-[#2A9988] rounded-xl relative flex flex-row">
                <div className="flex flex-col items-start justify-start w-2/3 px-8 py-5">
                  <h1 className="text-2xl font-semibold">
                    Learn these Tips for a Healthy Diet!
                  </h1>
                  <p className="text-xl font-light">
                    Eat whole grains,
                    <br /> Drink water,
                    <br /> Limit processed foods,
                    <br />
                    Limit sugary foods...
                  </p>
                  <br />
                  <Link
                    href={"/appointments"}
                    className="px-6 py-3 rounded-md font-semibold text-lg text-[#22796c] bg-[#ffffff]"
                  >
                    Get consultation
                  </Link>
                </div>
                <Image
                  width={200}
                  height={200}
                  priority
                  className="absolute bottom-0 right-0 z-10 overflow-visible"
                  src="/doctorWomanLg.png"
                  alt="doctor"
                />
              </div>
            </div>
          </Carousel>
        </div>
      ) : (
        ""
      )}
      {searchField === "" ? (
        <div className="hidden w-full pt-20 md:hidden lg:flex">
          <div className="text-white w-full bg-[#2A9988] rounded-xl relative flex flex-row">
            <div className="flex flex-col items-start justify-start w-1/2 gap-5 py-8 pl-10">
              <h1 className="text-5xl font-semibold">
                Learn how to stay Healthy from these tips!
              </h1>
              <ul className="text-2xl ">
                <li>• Eat plenty of fruits daily</li>
                <li>• Drink enough water daily</li>
                <li>• Exercise regularly everyday</li>
                <li>• Avoid smoking...</li>
              </ul>
              <Link
                href={"/appointments"}
                className="px-8 py-2 rounded-xl text-2xl bg-[#3EE5CC]"
              >
                Get consultation
              </Link>
            </div>
            <Image
              width={400}
              height={50}
              priority
              className="absolute bottom-0 z-20 overflow-visible right-40"
              src="/doctorLg.png"
              alt="doctor"
            />
            <Image
              width={300}
              height={50}
              priority
              className="absolute bottom-0 right-0 z-10"
              src="/doctorWomanLg.png"
              alt="doctor"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default HomeCarousel;
