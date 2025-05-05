import React, { useEffect, useState } from "react";
import { ToggleButton, MoonIcon, SunIcon } from "./styles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../../styles/theme"; 

interface DarkModeToggleProps {
  onToggle?: (isDarkMode: boolean) => void;
  setCurrentTheme: (theme: typeof lightTheme | typeof darkTheme) => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  onToggle,
  setCurrentTheme,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check for saved theme preference or use prefer-color-scheme
    const savedTheme = localStorage.getItem("theme");
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const shouldUseDarkMode =
      savedTheme === "dark" || (!savedTheme && prefersDarkMode);

    if (shouldUseDarkMode) {
      document.body.classList.add("dark-mode");
      setIsDarkMode(true);
      setCurrentTheme(darkTheme);
    } else {
      setCurrentTheme(lightTheme);
    }
  }, [setCurrentTheme]);

  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);

    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", newDarkModeState ? "dark" : "light");

    // Atualizar o tema no ThemeProvider
    setCurrentTheme(newDarkModeState ? darkTheme : lightTheme);

    if (onToggle) {
      onToggle(newDarkModeState);
    }
  };

  return (
    <ToggleButton onClick={toggleDarkMode}>
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </ToggleButton>
  );
};

export default DarkModeToggle;
