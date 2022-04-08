import React, { useState } from "react";
import styled from "styled-components";
import loadmore from "../assets/15.png";
import portfolio3 from "../assets/5.webp";
import portfolio4 from "../assets/17.png";
import portfolio5 from "../assets/12.jfif";
import portfolio6 from "../assets/27.jpg";
import portfolio7 from "../assets/3.webp";
import portfolio8 from "../assets/13.jfif";
import portfolio9 from "../assets/4.jpg";
import portfolio10 from "../assets/14.jfif";
import img from "../assets/19.jpg";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { portfolioAnimations } from "../animation";
import Modal from "./Portal/Modal";

function Portfolio() {
  const [element, controls] = useScroll();
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <Section id="fotoreportaż" ref={element}>
      <div className="grid">
        <motion.div
          variants={portfolioAnimations}
          animate={controls}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
          className="child-one grid-box"
        ></motion.div>
        <motion.div
          variants={portfolioAnimations}
          animate={controls}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
          className="child-two grid-box"
        ></motion.div>
        <motion.div
          variants={portfolioAnimations}
          animate={controls}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
          className="child-three grid-box"
        ></motion.div>
        <motion.div
          variants={portfolioAnimations}
          animate={controls}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
          className="child-four grid-box"
        ></motion.div>
        <motion.div
          variants={portfolioAnimations}
          animate={controls}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
          className="child-five grid-box"
        ></motion.div>
        <motion.div
          variants={portfolioAnimations}
          animate={controls}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
          className="child-six grid-box"
        ></motion.div>
        <motion.div
          variants={portfolioAnimations}
          animate={controls}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
          className="child-seven grid-box"
        ></motion.div>
        <motion.div
          variants={portfolioAnimations}
          animate={controls}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
          className="child-eight grid-box"
        ></motion.div>
      </div>
      <div className="portfolio-more">
        <span>Czytaj</span>
        <img src={loadmore} alt="Load More" onClick={() => Toggle()} />
      </div>
      <Modal
        show={modal}
        close={Toggle}
        title=" Rosja jest krajem terrorystycznym"
      >
        <p>
          "Rosja udowodniła swój status kraju-terrorysty. Jaki kraj jest zdolny
          do tego, by celowo zaatakować pociskami dworzec, gdzie tysiące ludzi
          czekają na ewakuację?" - napisał Szmyhal na Twitterze. "Dziesiątki
          zabitych, w tym dzieci. Ostrzał Kramatorska to zbrodnia Rosji, za
          którą powinna ona ponieść karę" - dodał premier Ukrainy.
        </p>
        <br />
        <p>
          <em>
            wiadomosci.onet.pl/swiat/wojna-rosja-ukraina-kramatorsk-brutalny-atak-rosjan-na-cywilow-relacja-na-zywo/1fc93lj
          </em>
        </p>
      </Modal>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  padding-bottom: 2rem;
  background: url(${img}) center/cover no-repeat;
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "one one two two"
      "one one three four"
      "five six seven seven"
      "eight six seven seven";
    .grid-box {
      height: 15rem;
      width: 100%;
      border: 1px solid #fff;
      &:nth-of-type(1) {
        grid-area: one;
        background: url(${portfolio3}) no-repeat right center/cover;
        height: 100%;
        z-index: 10;
      }
      &:nth-of-type(2) {
        grid-area: two;
        background: url(${portfolio4}) no-repeat center center/cover;
        z-index: 10;
      }
      &:nth-of-type(3) {
        grid-area: three;
        background: url(${portfolio5}) no-repeat right center/cover;
      }
      &:nth-of-type(4) {
        grid-area: four;
        background: url(${portfolio10}) no-repeat center center/cover;
      }
      &:nth-of-type(5) {
        z-index: 10;
        grid-area: five;
        background: url(${portfolio7}) no-repeat right center/cover;
      }
      &:nth-of-type(6) {
        grid-area: six;
        background: url(${portfolio8}) no-repeat center center/cover;
        height: 100%;
      }
      &:nth-of-type(7) {
        grid-area: seven;
        background: url(${portfolio9}) no-repeat right center/cover;
        height: 100%;
      }
      &:nth-of-type(8) {
        grid-area: eight;
        background: url(${portfolio6}) no-repeat right center/cover;
        z-index: 10;
      }
    }
  }
  .portfolio-more {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin: 4rem 0;

    img {
      width: 2rem;
      cursor: pointer;
      transition: all 0.4s ease-in-out;

      &:hover {
        opacity: 0.7;
      }
    }
    span {
      color: #fff;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .grid {
      padding: 0;
      grid-template-columns: 1fr;
      grid-template-areas:
        "one"
        "two"
        "three"
        "four"
        "five"
        "six"
        "seven"
        "eight";
      .grid-box {
        height: 25rem !important;
      }
    }
  }
`;

export default Portfolio;
