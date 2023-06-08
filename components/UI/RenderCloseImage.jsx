import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function RenderCloseImage({ closeMenu }) {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      title="Close navigation menu"
      onClick={closeMenu}
      className="relative w-6 text-lg dark:text-white aspect-square"
    >
      {currentTheme === "dark" ? (
        <Image fill src={"/close.svg"} alt="closeMenu" />
      ) : (
        <Image fill src={"/closeCard.svg"} alt="closeMenu" />
      )}
    </button>
  );
}

export default RenderCloseImage;
