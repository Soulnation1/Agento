import React, { useEffect } from "react";
import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const LiveCounter = () => {
  const [textCount, setTextCount] = useState("");
  const textCounter = textCount.length;
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    console.log("Text count updated:", textCounter);
  }, [textCount, textCounter]);

  return (
    <div
      className={`p-4 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-blue-500 text-black"}`}
    >
      <button
        onClick={toggleTheme}
        className={`mb-4 px-4 py-2 rounded ${theme === "dark" ? "bg-gray-600 text-white" : "bg-white text-black"}`}
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
      <h1 className="text-xl font-bold">Live Counter</h1>
      <p className="mb-2">Character Count: {textCounter}</p>
      <input
        type="text"
        value={textCount}
        onChange={(e) => setTextCount(e.target.value)}
        className={`border p-2 rounded ${theme === "dark" ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-300"}`}
      />
    </div>
  );
};

export default LiveCounter;
