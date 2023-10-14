import Home from "./pages/home";
import AboutUs from "./pages/about";
import ContactUs from "./pages/contact";
import Donate from "./pages/donate";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route index path="/about-us" element={<AboutUs />} />
      <Route index path="/contact-us" element={<ContactUs />} />
      <Route index path="/donate" element={<Donate />} />
    </Routes>
  );
}

export default App;
