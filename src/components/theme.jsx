import React, { useState, useEffect } from "react";

const Theme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setIsDarkTheme(storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => {
      const newTheme = !prevTheme ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return !prevTheme;
    });
  };

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const footer = document.querySelector(".footer");

    const navlinks = navbar.getElementsByTagName("a");
    for (let i = 0; i < navlinks.length; i++) {
      navlinks[i].classList.toggle("text-light", isDarkTheme);
    }

    const footlinks = footer.getElementsByTagName("a");
    for (let i = 0; i < footlinks.length; i++) {
      footlinks[i].classList.toggle("text-light", isDarkTheme);
    }

    document.body.classList.toggle("dark-theme", isDarkTheme);
    navbar.classList.toggle("bg-dark", isDarkTheme);
    navbar.classList.toggle("bg-light", !isDarkTheme);
    navbar.classList.toggle("text-light", isDarkTheme);
    footer.classList.toggle("bg-dark", isDarkTheme);
    footer.classList.toggle("bg-gray-200", !isDarkTheme);
    footer.classList.toggle("text-light", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <button onClick={toggleTheme}>
      Switch to {isDarkTheme ? "Light" : "Dark"} Theme
    </button>
  );
};

export default Theme;
