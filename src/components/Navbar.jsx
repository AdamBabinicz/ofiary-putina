import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/5.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import { navAnimation } from "../animation";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [element, controls] = useScroll();

  return (
    <Nav
      ref={element}
      variants={navAnimation}
      transition={{ delay: 0.1 }}
      animate={controls}
      state={isNavOpen ? 1 : 0}
    >
      <div className="brand__container">
        <a href="#" className="brand">
          <img src={logo} alt="..." />
        </a>
        <div className="toggle">
          {isNavOpen ? (
            <MdClose onClick={() => setIsNavOpen(false)} />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setIsNavOpen(true);
              }}
            />
          )}
        </div>
      </div>
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul>
          <li className="active">
            <a href="#start">Start</a>
          </li>
          <li>
            <a href="#doniesienia">Doniesienia</a>
          </li>
          <li>
            <a href="#fotoreportaż">Fotoreportaż</a>
          </li>
          <li>
            <a href="#dzieci">Dzieci</a>
          </li>
          <li>
            <a href="#zbrodnie">Zbrodnie</a>
          </li>
          <li>
            <a href="#bucza">Bucza</a>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
  color: #fff;
  padding-top: 2rem;

  .brand__container {
    margin: 0 2rem;

    img {
      width: 4rem;
    }

    .toggle {
      display: none;
    }
  }
  .links {
    ul {
      list-style-type: none;
      display: flex;
      gap: 3rem;

      .active {
        a {
          border-bottom: 0.1rem solid yellow;
        }
      }

      li {
        a {
          color: rgb(50, 147, 212);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.9rem;
          text-transform: uppercase;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    position: relative;
    .brand__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        padding-right: 1rem;
        display: block;
        z-index: 1;
        cursor: pointer;
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      position: fixed;
      overflow-x: hidden;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: ${({ state }) => (state ? "100%" : "0%")};
      height: 100vh;
      background: var(--primary-color);
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
      }
    }
  }
`;

export default Navbar;
