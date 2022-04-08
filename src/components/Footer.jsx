import React from "react";
import styled from "styled-components";
import { BsFacebook, BsTwitter, BsYoutube, BsPinterest } from "react-icons/bs";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { footerTextAnimation } from "../animation";

const Footer = () => {
  const [element, controls] = useScroll();

  return (
    <Foot ref={element}>
      <motion.span
        variants={footerTextAnimation}
        animate={controls}
        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.8,
        }}
      >
        2022 - {new Date().getFullYear()}.
      </motion.span>
      <motion.div
        className="footer__social__icons"
        variants={footerTextAnimation}
        animate={controls}
        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.8,
        }}
      >
        <a
          href="//www.facebook.com/groups/366739828076335"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFacebook />
        </a>
        <a
          href="//twitter.com/search?q=%23Bucza"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter />
        </a>
        <a
          href="//www.youtube.com/watch?v=b0O89XvGSSc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsYoutube />
        </a>
        <a
          href="//pl.pinterest.com/pin/601371356505165247"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsPinterest />
        </a>
      </motion.div>
    </Foot>
  );
};

const Foot = styled(motion.footer)`
  background: var(--primary-color);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;

  .footer__social__icons {
    display: flex;
    gap: 2rem;

    svg {
      font-size: 1.4rem;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      color: #fff;

      &:hover {
        color: var(--background-color);
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

export default Footer;
