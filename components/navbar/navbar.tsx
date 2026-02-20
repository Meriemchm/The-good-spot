"use client";

import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import { Container } from "../ui/container";
import MobileNavbar from "./mobile-navbar";
import DesktopNavbar from "./desktop-navbar";

const Navbar = () => {
  // const [isScrolled, setIsScrolled] = useState(false);
  // const ticking = useRef(false);

  // /* Navbar scroll trigger */

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!ticking.current) {
  //       window.requestAnimationFrame(() => {
  //         setIsScrolled(window.scrollY > 10);
  //         ticking.current = false;
  //       });
  //       ticking.current = true;
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div
      className={clsx(
        "absolute w-full z-50 top-2 transition-all duration-300 ",
        
      )}
    >
      {/* Navbar container */}
      <Container>
        <DesktopNavbar/>
        <MobileNavbar />
      </Container>
    </div>
  );
};

export default Navbar;
