/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Input, message } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import doctorsDummyData from "/data/doctorsDummyData.json";
import {
  accountClient,
  databaseClient,
  storageClient,
} from "@/appWrite-client/settings.config";
import Nav from "@/components/Nav";
import { EditOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import HomeCarousel from "@/components/HomeCarousel";

const Home = () => {
  const [value, setValue] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [images, setImages] = useState(null);
  const [searchField, setSearchField] = useState("");
  const [name, setName] = useState();
  const router = useRouter();

  const doctorsArray = doctorsDummyData.doctors;

  const dbID = process.env.DATABASE_ID || process.env.NEXT_PUBLIC_DATABASE_ID;
  const collID =
    process.env.COLLECTION_ID || process.env.NEXT_PUBLIC_COLLECTION_ID;
  const bucketID = process.env.BUCKET_ID || process.env.NEXT_PUBLIC_BUCKET_ID;

  useEffect(() => {
    const userDetails = accountClient.get();
    userDetails.then(
      function (response) {
        setName(response.name.split(" ")[0]);
      },
      function (error) {
        message.error("Oops you're not logged in :(");
        router.push("/login");
        return;
      }
    );

    const database = databaseClient.listDocuments(dbID, collID);
    database.then(
      function (response) {
        setValue(response.documents);
        setOriginalData(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );

    const storage = storageClient.listFiles(bucketID);
    storage.then(
      function (response) {
        setImages(response.files);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  const onSearch = (e) => {
    setSearchField(e.target.value);

    if (e.target.value.length <= 0) {
      setValue(originalData);
      return null;
    }

    const filterData = originalData.filter((data) => {
      return data.type.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setValue(filterData);
  };

  const prefix = (
    <SearchOutlined
      onChange={(e) => onSearch(e)}
      style={{
        fontSize: 16,
        cursor: "pointer",
        marginRight: "5px",
      }}
    />
  );

  return (
    <>
      <Head>
        <title>Home | NEXTGEN Doctors</title>
        <meta
          name="description"
          content="Get Consultation from the comfort of your own home"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-start w-full min-h-screen py-8 xl:pb-0 xl:pt-24">
        <div className="flex flex-col items-center justify-start w-full h-full px-3 md:px-8 lg:px-12">
          <div className="flex flex-row items-center justify-between w-full">
            <div>
              <h1 className="text-xl font-semibold dark:text-white sm:text-3xl">
                Hi
                <span className="text-[#2A9988]">{", " + name}</span>
              </h1>
            </div>
            <div className="flex flex-row gap-5 lg:gap-5">
              <img
                src="/WalletIcon.svg"
                alt="notification"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <Link href={"/appointments"} className="flex items-center">
                <img
                  src="/Notification.svg"
                  alt="wallet"
                  height={20}
                  width={20}
                  className="cursor-pointer"
                />
              </Link>
              <Link
                href={"/editprofile"}
                className="relative w-10 text-lg text-white rounded-full sm:w-6 aspect-square xl:hidden"
              >
                <img src={"/user.png"} alt="closeMenu" />
              </Link>
              <Link
                href={"/editprofile"}
                className="items-center gap-2 sm:px-16 px-5 text-sm py-2 text-white bg-[#2a9988] hover:bg-[#1C665B] duration-500 rounded-lg xl:flex hidden"
              >
                <EditOutlined /> Edit Profile
              </Link>
            </div>
          </div>
          <br />
          <div className="flex flex-row items-center justify-center w-full">
            <Input
              enterButton="Search"
              size="large"
              onChange={(e) => onSearch(e)}
              prefix={prefix}
              placeholder="Search for Doctors"
              className="w-full px-4 text-lg border border-green-600 rounded-lg lg:w-2/3 md:w-2/3 sm:p-4 sm:px-4 searchDoc"
            />
          </div>

          <HomeCarousel searchField={searchField} />

          <br />

          <div className="flex flex-col w-full gap-3 mt-0 lg:gap-10 lg:mt-10">
            <h1
              data-testid="find-txt"
              className="font-bold text-2xl md:text-3xl lg:text-5xl text-[#2A9988] text-center"
            >
              Find your Doctor
            </h1>
            <div className="grid grid-cols-4 text-black gap-x-2 gap-y-6 h-fit lg:grid-cols-6 md:gap-6 lg:gap-8 xl:gap-10 dark:text-white">
              {value.slice(0, 7).map((data) => {
                return (
                  <Link href={data.link} key={data.$id}>
                    <div className="flex flex-col items-center justify-center">
                      <div className="relative w-20 h-20 max-w-full lg:w-36 lg:h-32">
                        <Image fill src={data.imgSrc} alt="docPic" />
                      </div>
                      <p className="text-xs lg:text-lg">{data.type}</p>
                    </div>
                  </Link>
                );
              })}
              <div className="flex flex-col items-center justify-between pt-2">
                <Link
                  href={"/specialists"}
                  className="flex flex-col items-center justify-center max-w-full text-2xl font-bold rounded-full shadow-lg dark:bg-white dark:text-black w-14 aspect-square lg:w-24"
                >
                  +
                </Link>
                <p className="text-xs lg:text-lg">More</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="w-full flex flex-col items-start justify-center bg-[#2A9988] text-white px-4 overflow-auto grow">
          <div className="flex flex-row items-center justify-between w-full py-8 overflow-hidden">
            <h1 className="font-semibold md:text-2xl lg:text-4xl">
              Our Doctors
            </h1>
            <Link
              href={"/specialists"}
              className="text-sm font-light cursor-pointer md:text-xl lg:text-xl"
            >
              view more
            </Link>
          </div>
          <div className="w-full overflow-auto">
            <div className="flex gap-5 pb-16 overflow-x-auto w-fit">
              {images &&
                doctorsArray.slice(0, 7).map((data, index) => {
                  const imageURL = storageClient.getFilePreview(
                    bucketID,
                    images[index].$id
                  );

                  return (
                    <div
                      key={data.id}
                      className="flex flex-row items-center justify-start py-3 bg-white w-72 rounded-xl"
                    >
                      <div className="relative flex flex-col items-center justify-center w-2/5 p-2">
                        <img
                          className="rounded-full"
                          width={80}
                          height={80}
                          alt="docPic"
                          src={imageURL}
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center w-3/5 text-black">
                        <h1>{data.name}</h1>
                        <p>{data.degrees}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <Nav />
    </>
  );
};

export default Home;
