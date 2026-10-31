import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import Start from "./Components/Start.jsx";
import Quiz from "./Components/Quiz.jsx";
import Result from "./Components/Result.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
