import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
        <Weather city="Athens" />
      </header>
    </div>
  );
}

export default App;
