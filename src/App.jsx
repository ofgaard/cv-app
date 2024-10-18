import { useState } from "react";
import Personal from "./Personal";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <div
        className={`${
          darkMode
            ? "bg-neutral-800 text-neutral-200"
            : "bg-neutral-200 text-slate-800"
        }`}
      >
        <div
          className={`${
            darkMode ? "bg-neutral-800" : "bg-neutral-200"
          } h-screen flex flex-col overflow-auto print:text-black min-w-96 max-w-3xl mx-auto p-5`}
        >
          {/* Contact header */}
          <div>
            <Personal></Personal>
          </div>
          {/* Experience section */}
          <div></div>
          {/* Education section */}
          <div></div>
          {/* Add buton */}
          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;
