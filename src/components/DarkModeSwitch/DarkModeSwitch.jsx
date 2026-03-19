import { useState, useEffect } from "react";

function DarkModeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [isDarkMode]);

  return (
    <section>
      <h2>Dark Mode</h2>
      <p>Dabartinė tema: {isDarkMode ? "Tamsi" : "Šviesi"}</p>

      <button onClick={() => setIsDarkMode((prev) => !prev)}>
        Pakeisti temą
      </button>
    </section>
  );
}

export default DarkModeSwitch;
