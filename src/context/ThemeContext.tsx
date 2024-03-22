"use client";
import React, { useState } from "react";
type Theme = "light" | "dark";
type ThemeData = { mode: Theme; toggleMode: () => void };


export const ThemeContext = React.createContext<ThemeData>(
  {} as ThemeData
);

export const ThemeProvider: React.FC = ({ children }) => {

  const [mode, setMode] = useState<Theme>("dark");

  const toggleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  const color = mode === "light" ? "#333" : "#FFF";
  const backgroundColor = mode === "light" ? "#FFF" : "#333";


  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <main className={`theme ${mode}`}>{children}</main>
    </ThemeContext.Provider>
  );
};