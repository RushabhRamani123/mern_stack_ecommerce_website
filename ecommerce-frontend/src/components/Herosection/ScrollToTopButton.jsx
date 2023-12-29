import  { useState, useEffect } from "react";
import "./ScrollToTopButton.css"; // Import your CSS file for styling
import { BiSolidUpArrow } from "react-icons/bi";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on the scroll position
  const handleScroll = () => {
    if (window.pageYOffset > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {window.removeEventListener("scroll", handleScroll)}}, []);

  return (
    <button
      id="scrollToTopBtn"
      className={isVisible ? "show" : "hide"}
      onClick={scrollToTop}
    >
      <BiSolidUpArrow/>
    </button>
  );
};

export default ScrollToTopButton;
