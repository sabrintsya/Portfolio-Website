import React, { useState, useEffect } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

import { Link } from "react-router-dom";


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={styles.navbar}>


      <div className={`${styles.menu} ${scrolled ? styles.scrolled : ""}`}  >
        <img className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("navIcon/closeIcon.svg")
              : getImageUrl("navIcon/menuIcon.svg")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/portfolio">All Work</Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
  <Link to="/about">About</Link>
</li>
        </ul>

      </div>
    </nav>
  );
};


