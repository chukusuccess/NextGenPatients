import React from "react"; // import the React library

// Define a function component called 'Button'
function Button({ cState, label, clickFunction }) {
  return (
    // Render a button element
    <button
      // Define a dynamic className attribute with string interpolation
      className={`relative md:text-xl ${
        // If the 'cState' prop is true, add the 'after:w-full' class
        cState ? "after:w-full" : ""
      } after:left-0 after:scale-x-110 after:content-[""] after:absolute after:-bottom-2  after:h-[2px] after:bg-[#2A9988]`}
      // Attach an event handler to the button's 'onClick' event
      onClick={clickFunction}
    >
      {label} {/* Render the text label passed in as a prop */}
    </button>
  );
}

export default Button; // Export the 'Button' component as a default export
