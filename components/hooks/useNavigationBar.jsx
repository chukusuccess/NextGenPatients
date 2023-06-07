/* eslint-disable react-hooks/exhaustive-deps */ // Disables exhaustive-deps warning for useEffect
import { useEffect, useState } from "react";
// import useStore from "@/providers/appStore";

function useNavigationBar() {
  // Declare navMenu state and its updater function using useState hook, set initial value to "-right-full"
  const [navMenu, setMenu] = useState("-right-full");

  // Access dark mode value from appStore provider using custom hook
  // const { dark } = useStore();
  const dark = "#000";

  // Function to open navigation menu by setting navMenu state to "right-0"
  function openMenu() {
    setMenu("right-0");
  }

  // Function to close navigation menu by setting navMenu state to "-right-full"
  function closeMenu() {
    setMenu("-right-full");
  }

  // useEffect hook to update document's root element classList based on dark mode value
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.remove("light"); // Remove "light" class from root element's classList
      document.documentElement.classList.add("dark"); // Add "dark" class to root element's classList
    } else {
      document.documentElement.classList.remove("dark"); // Remove "dark" class from root element's classList
      document.documentElement.classList.add("light"); // Add "light" class to root element's classList
    }
  }, [dark]); // Run this effect only when "dark" value changes

  // Return navMenu state and its updater functions as an array
  return [navMenu, openMenu, closeMenu];
}

// Export useNavigationBar custom hook as default
export default useNavigationBar;
