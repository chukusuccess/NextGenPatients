import React from "react";
import { motion } from "framer-motion";
import SplashText from "./SplashText";

function Splash() {
  return (
    // A motion component that animates its children
    <motion.div
      // The animation to perform
      animate={{
        height: 0, // Reduce the height to 0
        transition: { duration: 0.6, delay: 1.5 }, // The duration of the animation and delay before it starts
      }}
      // The class names for the component
      className="absolute top-0 z-50 flex items-center justify-center w-screen h-screen overflow-hidden bg-[#2A9988]"
    >
      {/* The child component to animate */}
      <SplashText />
    </motion.div>
  );
}

export default Splash;
