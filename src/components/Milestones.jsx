import React from "react";
import styled from "styled-components";
import milestone1 from "../assets/24.jpg";
import milestone2 from "../assets/22.jpg";
import milestone3 from "../assets/23.jpg";
import img from "../assets/16.jpg";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { milestonesAnimations } from "../animation";

function Milestones() {
  const [element, controls] = useScroll();

  const milestone = [
    {
      image: milestone1,
      data: "uczyła się w IV klasie, zginęła wraz z rodzicami i bratem",
      amount: "Polina",
    },
    {
      image: milestone2,
      data: "nie dożyła 8 lat, zginęła wraz z dziadkiem, który okrył ją sobą",
      amount: "Alicja",
    },
    {
      image: milestone3,
      data: "6-latka zastrzelona z jej półtoramiesięcznym bratem, matką, babcią i dziadkiem",
      amount: "Sofijka",
    },
  ];

  return (
    <Section ref={element}>
      <div className="background">{/* <img src={img} alt="..." /> */}</div>
      <div className="milestones">
        {milestone.map(({ image, data, amount }) => {
          return (
            <motion.div
              className="milestone"
              variants={milestonesAnimations}
              animate={controls}
              transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
            >
              <p>&nbsp;{amount} &nbsp;</p>
              <span>{data}</span>
              <img src={image} alt="..." />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 100vh;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),
    url(${img}) center/cover no-repeat fixed;
  padding: 0 10rem;
  position: relative;
  .background {
    position: absolute;
    left: 0;
    bottom: -30%;
    /* img {
      z-index: 2;
      height: 43rem;
    } */
  }
  .milestones {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    color: #fff;
    align-items: center;
    height: 100%;
    .milestone {
      z-index: 20;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      p {
        font-size: 5rem;
        font-weight: bolder;
        line-height: 3rem;
        font-family: "Zilla Slab Highlight", cursive;
      }
      span {
        color: #ffffffc7;
        width: 100%;
        margin-right: 1 rem;
      }
      img {
        height: 26rem;
        width: 100%;
        object-fit: cover;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 5rem 2rem;
    min-height: 100ch;
    height: 100%;
    .background {
      display: none;
    }
    .milestones {
      grid-template-columns: 1fr;
      gap: 5rem;
    }
  }
`;

export default Milestones;
