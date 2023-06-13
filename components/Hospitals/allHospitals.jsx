import React from "react";

export default function AllHospitals({ allHospitals }) {
  return (
    <div className="grid h-full grid-cols-1 overflow-scroll xl:grid-cols-3 md:grid-cols-2 md:gap-6 scrollbar-hide">
      {allHospitals &&
        allHospitals.map((hospital) => {
          return (
            <div
              key={hospital.id}
              className="w-[90%] shadow-lg max-w-[420px] mx-auto rounded-2xl bg-[#FCFCFC] flex items-center mb-10"
            >
              <div className="text-black flex flex-col justify-evenly p-[5%]">
                <h5 className="text-xl">{hospital.tags.name}</h5>{" "}
                <p className="text-base opacity-70">
                  {hospital.tags["addr:full"]}{" "}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
