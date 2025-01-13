import React, { ReactNode, useRef } from "react";
import { NavBar } from "../../components/navBar/navBar";
import { Footer } from "../../UI/footer/footer";
export const Layout = ({ children }) => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <NavBar onContactClick={scrollToContact} />
      {children}
      <Footer ref={contactRef} />
    </div>
  );
};
