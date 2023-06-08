import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useRouter } from "next/router";

function RenderThemeToggler() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (currentTheme === "dark") {
    return (
      <button
        title="Toggle theme"
        onClick={(e) => {
          e.preventDefault();
          setTheme("light");
        }}
        className={`${
          router.pathname === "/" ? "absolute top-10 mx-auto" : "flex"
        } items-center justify-center w-10 h-10 text-2xl rounded-full dark:text-white`}
      >
        <FaSun />
      </button>
    );
  } else {
    return (
      <button
        title="Toggle theme"
        onClick={(e) => {
          e.preventDefault();
          setTheme("dark");
        }}
        className={`${
          router.pathname === "/" ? "absolute top-10 mx-auto" : "flex"
        } items-center justify-center w-10 h-10 text-2xl rounded-full dark:text-white`}
      >
        <FaMoon />
      </button>
    );
  }
}

export default RenderThemeToggler;
