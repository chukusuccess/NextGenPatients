import React from "react";

export default function AllHospitals({ allHospitals }) {
  return (
    // A grid container to hold all the hospitals with columns for different screen sizes
    <div className="grid h-full grid-cols-1 overflow-scroll xl:grid-cols-3 md:grid-cols-2 md:gap-6 scrollbar-hide">
      {/* Check if allHospitals array exists and map through each hospital to create a grid item */}
      {allHospitals &&
        allHospitals.map((hospital) => {
          return (
            // Create a grid item for a single hospital
            <div
              key={hospital.id} // Set the key prop to the unique id of the hospital
              className="w-[90%] shadow-lg max-w-[420px] mx-auto rounded-2xl bg-[#FCFCFC] flex items-center mb-10"
            >
              {/* Create a section to hold the hospital name and address */}
              <div className="text-black flex flex-col justify-evenly p-[5%]">
                <h5 className="text-xl">{hospital.tags.name}</h5>{" "}
                {/* Display the hospital name */}
                <p className="text-base opacity-70">
                  {hospital.tags["addr:full"]}{" "}
                  {/* Display the full address of the hospital */}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
