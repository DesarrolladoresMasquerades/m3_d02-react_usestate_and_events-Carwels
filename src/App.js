import { useState } from "react";
import Counter from "./components/Counter";
import WeatherWidget from "./components/WeatherWidget";

function App() {

  const [unit, setUnit] = useState("C")
  const [theme, setTheme] = useState("dark")

  function toggleTheme(event){
    setTheme(event.target.value)
  }
  return (
    <div className={`App ${theme}`}>
      <h1>React - state and events</h1>
      <Counter />
      <select onChange={toggleTheme}>
        <option value="light" selected>Light theme</option>
        <option value="dark" selected>Dark theme</option>
      </select>


      <button onClick={() => setUnit("C")}> °C </button>
      <button onClick={() => setUnit("F")}> °F </button>
      <WeatherWidget city="Miami" icon="🟡" celsius={29} unit={unit} />
      <WeatherWidget city="Mexico City" icon="⛈️" celsius={17} unit={unit} />
      <WeatherWidget city="Berlin" icon="🌥️" celsius={20} unit={unit} />
      <WeatherWidget city="Barcelona" icon="🌤️" celsius={28} unit={unit} />
    </div>
  );
}

export default App;
