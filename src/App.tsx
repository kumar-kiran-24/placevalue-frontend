import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/index";
import About from "./pages/about";
import Contact from "./pages/contact";
import Institutions from "./pages/institutions";
import Taskverse from "./pages/taskverse";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms-and-conditions";
import Ecosystem from "./pages/ecosytem";

import { ScrollToTop } from "./components/site/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/institutions" element={<Institutions />} />
        <Route path="/taskverse" element={<Taskverse />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/ecosytem" element={<Ecosystem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;