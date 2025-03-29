import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TestNavbar from "./Navbar";
import Hero from "./Hero";
import Banner from "./Banner";
import WhyChoose from "./WhyChoose";
import Aboutus from "./Aboutus";
import Footer from "./Footer";
import Popup from "./Popup";
import Promotions from "./Promotion";
import Burgers from "./Burgers";
import Specials from "./Specials";
import Contactus from "./Contactus"; // Import the new Contactus component
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [showPopup, setShowPopup] = React.useState(false);

  const handlePopup = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });

    const handleResize = () => Aos.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Router>
      <div className="overflow-x-hidden">
        <TestNavbar HandlePopup={handlePopup} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Banner />
                <WhyChoose />
                <Aboutus HandlePopup={handlePopup} />
              </>
            }
          />
          <Route
            path="/about"
            element={<Aboutus HandlePopup={handlePopup} />}
          />
          <Route path="/contact" element={<Contactus />} />{" "}
          {/* Updated to use Contactus */}
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/burgers" element={<Burgers />} />
          <Route path="/specials" element={<Specials />} />
        </Routes>
        <Footer />
        <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
      </div>
    </Router>
  );
}

export default App;
