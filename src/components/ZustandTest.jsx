import useThemeStore from "./useThemeStore";
const ZustandTest = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme)

  return (
    <main className={`p-4 ${theme === "light" ? "bg-white" : "bg-gray-800 text-white"} `}>
      <h2 className="text-lg font-semibold">Zustand Test</h2>
      <p>this theme is changing to  {theme}</p>
      <button
      onClick={toggleTheme}
      className={` text-white p-2 rounded ${theme === "light" ? "bg-green-400 text-blue-600 " : "bg-gray-400"}`}
      >
        change Mode
      </button>
    </main>
  );
};

export default ZustandTest;