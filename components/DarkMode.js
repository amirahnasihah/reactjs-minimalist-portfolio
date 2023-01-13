import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <div className={darkMode ? "dark" : ""}></div>
      <BsFillMoonStarsFill
        onClick={() => setDarkMode(!darkMode)}
        className="cursor-pointer text-2xl dark:text-white"
      />
    </div>
  );
};

export default DarkMode;
