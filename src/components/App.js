import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="sunset" />
      </div>
    </div>
  );
}
