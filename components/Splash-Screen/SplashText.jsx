import React from "react";
import { motion } from "framer-motion";

function SplashText() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        transition: { duration: 0.4, delay: 1 },
      }}
      className="flex flex-col items-center justify-center text-white"
    >
      <h1 className="xl:text-9xl 2xl:text-[160px] lg:text-8xl md:text-7xl text-4xl font-thin">
        NEXT<span className="font-semibold">GEN</span>
      </h1>
      <h1 className="pt-1 md:pt-2 lg:pt-3 xl:pt-6 xl:text-8xl 2xl:text-[160px] lg:text-6xl md:text-4xl text-2xl font-thin tracking-[0.2em]">
        PATIENTS(NG)
      </h1>
    </motion.div>
  );
}

export default SplashText;
