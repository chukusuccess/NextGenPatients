import React from "react";

function Button({ cState, label, clickFunction }) {
  return (
    <button
      className={`relative md:text-xl hover:opacity-50 duration-300 ${
        cState ? "after:w-full" : ""
      } after:left-0 after:scale-x-110 after:content-[""] after:absolute after:-bottom-2  after:h-[2px] after:bg-[#2A9988]`}
      onClick={clickFunction}
    >
      {label}
    </button>
  );
}

export default Button;
