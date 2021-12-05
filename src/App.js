import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WeatherSearch />
      </header>
      <footer>
        <p>
          <a
            href="https://www.github.com/kirstenrc/weather-react"
            tartet="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          <span> by Kirsten Cox</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
