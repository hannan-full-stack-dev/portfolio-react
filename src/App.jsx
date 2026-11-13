import { Routes, Route } from "react-router-dom";
import ScrollManager from "./components/ScrollManager.jsx";
import useSmoothScroll from "./hooks/useSmoothScroll.js";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Gallery from "./pages/Gallery.jsx";

export default function App() {
  useSmoothScroll();
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* Unknown URL -> Home (Netlify already serves index.html for every path) */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
