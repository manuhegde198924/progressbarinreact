import "./App.css";
import ProgressBar from "./ProgressBar.js";

function App() {
  return (
    <div className="App">
      <h1
        className="progressing"
        style={({ fontSize: "50px" }, { backgroundColor: "yellow" })}
      >
        A PROGRESS BAR
      </h1>

      <ProgressBar />
    </div>
  );
}

export default App;
