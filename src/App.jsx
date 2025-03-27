import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./Hero";
import Banner from "./Banner";
import WhyChoose from "./WhyChoose";
import Aboutus from "./Aboutus";
import Footer from "./Footer";
import Popup from "./Popup";
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

    // Refresh AOS only if necessary
    const handleResize = () => Aos.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Navbar HandlePopup={handlePopup} />
      <Hero />
      <Banner />
      <WhyChoose />
      <Aboutus HandlePopup={handlePopup} />
      <Footer />
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />{" "}
      {/* Ensure Popup is used */}
    </div>
  );
}

export default App;
