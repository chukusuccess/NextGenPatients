/* eslint-disable react-hooks/exhaustive-deps */
import Nav from "@/components/Nav";
import React, { useEffect, useState } from "react";
import { states } from "@/data/arrays";
import specialistsDummy from "/data/specialistsDummyData.json";
import doctorsDummy from "/data/doctorsDummyData.json";
import Head from "next/head";
import { Ticket } from "@/components/Ticket/Ticket";
import { useRouter } from "next/router";
import {
  accountClient,
  databaseClient,
  storageClient,
} from "@/appWrite-client/settings.config";
import { ID } from "appwrite";
import { message } from "antd";

function Booking() {
  const [uId, setUId] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [selectedGender, setSelectedGender] = useState("Male");
  const [state, setState] = useState("");
  const [availableHospitals, setAvailableHospitals] = useState([]);
  const [hospital, setHospital] = useState("");
  const [department, setDepartment] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [complaint, setComplaint] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [images, setImages] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const specialistsArray = specialistsDummy.specialists;
  const doctorsArray = doctorsDummy.doctors;
  const router = useRouter();

  const databaseId =
    process.env.USERS_DATABASE_ID || process.env.NEXT_PUBLIC_USERS_DATABASE_ID;

  const upcomingCollection =
    process.env.UPCOMING_APPOINTMENTS_COLLECTION_ID ||
    process.env.NEXT_PUBLIC_UPCOMING_APPOINTMENTS_COLLECTION_ID;

  const historyCollection =
    process.env.APPOINTMENT_HISTORIES_COLLECTION_ID ||
    process.env.NEXT_PUBLIC_APPOINTMENT_HISTORIES_COLLECTION_ID;

  const bucketID = process.env.BUCKET_ID || process.env.NEXT_PUBLIC_BUCKET_ID;

  useEffect(() => {
    const userDetails = accountClient.get();
    userDetails.then(
      function (response) {
        setUId(response.email);
      },
      function (error) {
        message.error("Oops you're not logged in :(");
        router.push("/login");
        return;
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (uId) {
      // user is signed in, get their UID(email)
      const date = new Date();

      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();

      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");

      const randomIndex = Math.floor(Math.random() * images.length);
      const randomPic = storageClient.getFilePreview(
        bucketID,
        images[randomIndex].$id
      );

      const docId = ID.unique();

      const appointmentDetails = {
        identification: uId,
        dateOfBooking: `${day}/${month}/${year}`,
        timeOfBooking: `${hours}:${minutes}:${seconds}`,
        firstName: fname,
        lastName: lname,
        dateOfBirth: dob,
        address: address,
        gender: selectedGender,
        state: state,
        hospital: hospital,
        department: department,
        specialist: specialist,
        docImg: randomPic,
        complaint: complaint,
        appointmentDate: appointmentDate,
        appointmentTime: appointmentTime,
        qrString: fname + lname + appointmentTime,
      };

      try {
        await databaseClient.createDocument(
          databaseId,
          upcomingCollection,
          docId,
          appointmentDetails
        );

        await databaseClient.createDocument(
          databaseId,
          historyCollection,
          docId,
          appointmentDetails
        );

        message.success("Appointment successfully created!", 3);

        setShowConfirmation(true);
      } catch (error) {
        message.error("Appointment creation failed, please try again!", 3);
        console.log(error.message);
        return;
      }
    } else {
      // user is not signed in' redirect to the login page
      message.error("Oops you're not logged in :(");
      router.push("/login");
      return;
    }
  };

  async function handleAvailableHospitals(event) {
    const { value } = event.target;
    const hospitalQuery = `hospital in ${value} Nigeria`;

    const searchUrl = `https://nominatim.openstreetmap.org/search?q=${hospitalQuery}&format=json&limit=10`;

    const searchResponse = await fetch(searchUrl);
    const searchData = await searchResponse.json();
    setAvailableHospitals(searchData);
  }

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Booking | NEXTGEN Doctors</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`flex flex-col justify-center w-screen gap-6 xl:gap-0 p-6 xl:pt-32 px-4 text-white xl:h-screen xl:overflow-hidden ${
          showConfirmation
            ? "h-screen overflow-hidden"
            : "min-h-screen overflow-scroll"
        }`}
      >
        <Nav />

        <div>
          <button
            className="px-1 text-black dark:text-white"
            onClick={() => router.back()}
          >
            &larr; back
          </button>
        </div>

        <h1 className="text-3xl text-center text-[#2A9988] md:text-4xl xl:text-6xl">
          Book an appointment
        </h1>

        <div className="flex items-center justify-around mb-16">
          <form
            className="flex flex-col justify-center w-full max-w-xl p-4 py-5 h-fit md:p-8 gap-7 md:gap-10 xl:max-w-fit"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col items-center w-full gap-10 text-black dark:text-white xl:flex-row booking">
              <fieldset
                className={`w-full flex flex-col xl:flex-row items-center gap-10 rounded-lg basis-3/4`}
              >
                <div className="flex flex-col w-full gap-6">
                  <label>
                    Patients first name
                    <input
                      type="text"
                      className="w-full h-12 pl-3 rounded min-w-[300px] mt-1 border border-black dark:border-0"
                      name="fname"
                      pattern="[A-Za-z]+"
                      minLength="3"
                      maxLength="50"
                      required
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </label>

                  <label>
                    Patients last name
                    <input
                      type="text"
                      className="w-full h-12 pl-3 rounded min-w-[300px] mt-1 border border-black dark:border-0"
                      name="lname"
                      pattern="[A-Za-z]+"
                      minLength="3"
                      maxLength="50"
                      required
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                    />
                  </label>

                  <label className="">
                    Date of Birth
                    <input
                      type="date"
                      className="w-full h-12 px-3 mt-1 rounded border border-black dark:border-0"
                      name="dob"
                      required
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </label>

                  <label>
                    Address
                    <input
                      type="text"
                      className="w-full h-12 pl-3 mt-1 rounded border border-black dark:border-0"
                      name="address"
                      minLength="2"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </label>

                  <div className="flex items-center justify-around w-full pt-2 text-xl">
                    <label className="flex items-center">
                      <input
                        className="mr-2"
                        type="radio"
                        name="gender"
                        value="Male"
                        required
                        checked={selectedGender === "Male"}
                        onChange={(e) => {
                          handleGenderChange(e);
                          handleInputChange(e);
                        }}
                      />
                      Male
                    </label>

                    <label className="flex items-center">
                      <input
                        className="mr-2"
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={selectedGender === "Female"}
                        onChange={(e) => {
                          handleGenderChange(e);
                        }}
                      />
                      Female
                    </label>
                  </div>
                </div>

                <hr className="w-full xl:hidden" />

                <div className="flex flex-col w-full gap-6">
                  <label className="w-full">
                    State
                    <select
                      name="state"
                      className="w-full h-12 px-3 mt-1 rounded outline-none border border-black dark:border-0"
                      required
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                        handleAvailableHospitals(e);
                      }}
                    >
                      <option>Select</option>
                      {states.map((state) => (
                        <option key={state.id} value={state.state}>
                          {state.state}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="w-full">
                    Hospital
                    <select
                      name="hospital"
                      className="w-full h-12 px-3 mt-1 rounded outline-none border border-black dark:border-0"
                      required
                      value={hospital}
                      onChange={(e) => setHospital(e.target.value)}
                    >
                      <option>Select</option>
                      {availableHospitals.map((hospital) => {
                        const splitDisplay = hospital.display_name.split(",");
                        return (
                          <option
                            key={hospital.place_id}
                            value={splitDisplay[0]}
                          >
                            {splitDisplay[0]}
                          </option>
                        );
                      })}
                    </select>
                  </label>

                  <label className="w-full">
                    Department
                    <select
                      name="department"
                      className="w-full h-12 px-3 mt-1 rounded outline-none border border-black dark:border-0"
                      required
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                    >
                      <option>Select</option>
                      {specialistsArray.map((data) => (
                        <option key={data.id} value={data.type}>
                          {data.type}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="w-full">
                    Specialist
                    <select
                      name="specialist"
                      className="w-full h-12 px-3 mt-1 rounded outline-none border border-black dark:border-0"
                      required
                      value={specialist}
                      onChange={(e) => setSpecialist(e.target.value)}
                    >
                      <option>Select</option>
                      {doctorsArray.map((data) => (
                        <option key={data.id} value={data.name}>
                          {data.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </fieldset>

              <hr className={`w-full xl:hidden`} />

              <div className="flex flex-col w-full gap-6 basis-1/2">
                <label className="text-xl text-center">
                  Complaint
                  <textarea
                    name="complaint"
                    className="w-full p-3 mt-1 text-base rounded-lg outline-none border border-black dark:border-0"
                    maxLength={150}
                    rows={8}
                    cols={40}
                    minLength={50}
                    required
                    value={complaint}
                    placeholder="Please write down your complaint"
                    onChange={(e) => setComplaint(e.target.value)}
                  ></textarea>
                </label>

                <label className="w-full">
                  Appointment date
                  <input
                    type="date"
                    className="w-full h-12 px-3 mt-1 rounded border border-black dark:border-0"
                    name="appointmentDate"
                    required
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                  />
                </label>

                <label className="w-full">
                  Appointment time
                  <input
                    type="time"
                    className="w-full h-12 px-3 mt-1 rounded border border-black dark:border-0"
                    name="appointmentTime"
                    required
                    value={appointmentTime}
                    onChange={(e) => setAppointmentTime(e.target.value)}
                  />
                </label>
              </div>
            </div>

            <button
              className="bg-[#2a9988] hover:bg-[#1C665B] w-4/5 py-3 rounded-lg text-white max-w-md mx-auto"
              type="submit"
            >
              Confirm appointment
            </button>
          </form>
        </div>
      </main>

      {showConfirmation && (
        <div className="absolute top-0 flex items-center justify-center w-screen h-screen backdrop-brightness-[25%]">
          <div className="flex flex-col items-center justify-center w-4/5 max-w-xs gap-4 px-4 py-6 text-black bg-white rounded-lg">
            <Ticket
              patientName={fname + " " + lname}
              specialist={specialist}
              hospital={hospital}
              appointmentDate={appointmentDate}
              appointmentTime={appointmentTime}
              qrString={fname + lname + appointmentTime}
              complaint={complaint}
              gender={selectedGender}
              address={address}
            />
            <h1 className="text-sm text-center">
              Download your Ticket and Keep it safe. You will present it to the
              Doctor when you visit the hospital
            </h1>
          </div>
        </div>
      )}
    </>
  );
}

export default Booking;
