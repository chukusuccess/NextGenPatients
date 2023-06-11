import React, { useEffect, useState } from "react";

// This component displays nearby hospitals based on the user's current location
export default function NearbyHospitals() {
  const [nearbyHospitals, setNearbyHospitals] = useState([]);

  // Function to format an array of address parts into a single string
  function getAddress(array) {
    let result = "";
    for (let index = 1; index < array.length; index++) {
      let element = array[index];
      if (index !== array.length - 1) {
        element += ", ";
      }
      result += element;
    }
    return result;
  }

  // Use the useEffect hook to get the user's location and nearby hospitals on component mount
  useEffect(() => {
    if (navigator.geolocation) {
      // Get the user's current position using the Geolocation API
      navigator.geolocation.getCurrentPosition(getPositions);

      async function getPositions(position) {
        // Extract the latitude and longitude from the position object
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Construct a URL to reverse geocode the user's coordinates and get the state and country
        const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&zoom=18`;

        // Send a request to the OpenStreetMap Nominatim API to get the state and country
        const response = await fetch(url);
        const data = await response.json();

        // Extract the state and country from the address object returned by the API
        const state = data.address.state;
        const country = data.address.country;

        // Construct a search query for nearby hospitals based on the state and country
        const hospitalQuery = `hospital in ${state} ${country}`;

        // Construct a URL to search for nearby hospitals
        const searchUrl = `https://nominatim.openstreetmap.org/search?q=${hospitalQuery}&format=json&limit=10`;

        // Send a request to the OpenStreetMap Nominatim API to search for nearby hospitals
        const searchResponse = await fetch(searchUrl);
        const searchData = await searchResponse.json();

        // Set the nearby hospitals state variable to the array of search results
        setNearbyHospitals(searchData);
      }
    } else {
      // If geolocation is not supported by the browser, show an alert message
      alert("Geolocation is not supported by this browser.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`grid h-full grid-cols-1 overflow-scroll ${
        nearbyHospitals.length > 0 ? "xl:grid-cols-3 md:grid-cols-2" : ""
      }  md:gap-6 scrollbar-hide`}
    >
      {nearbyHospitals.length > 0 ? (
        nearbyHospitals.map((hospital) => {
          const splitDisplay = hospital.display_name.split(",");
          return (
            <div
              key={hospital.place_id}
              className="w-[90%] h-fit shadow-lg max-w-[420px] mx-auto rounded-2xl bg-[#FCFCFC] flex items-center mb-10"
            >
              <div className="text-black flex flex-col justify-evenly p-[5%]">
                <h5 className="text-lg">{splitDisplay[0]}</h5>
                <p className="text-base opacity-70">
                  {getAddress(splitDisplay)}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <>
          <div className="flex items-center justify-center w-full h-full gap-2 text-3xl backdrop-brightness-50 dark:backdrop-brightness-100">
            <svg
              className="animate-spin aspect-square w-10 text-[#2A9988]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="text-white"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <p className="text-white">Locating...</p>
          </div>
        </>
      )}
    </div>
  );
}
