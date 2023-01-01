import Dictionary from "./Dictionary";
import "./App.css";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="sunset" />
        <Footer />
      </div>
    </div>
  );
}
