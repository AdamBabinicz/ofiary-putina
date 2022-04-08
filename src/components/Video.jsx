import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/1.mp4";
import img from "../assets/25.jpg";
import { motion } from "framer-motion";
import { videoAnimations } from "../animation";
import { useScroll } from "./useScroll";

function Video() {
  const [element, controls] = useScroll();

  return (
    <Section ref={element}>
      <div className="background"></div>
      <motion.div
        className="video"
        variants={videoAnimations}
        animate={controls}
        transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
      >
        <video src={MainVideo} type="video/mp4" autoPlay muted loop />
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  background: url(${img}) center/cover no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  video {
    z-index: 10;
    width: 100vw;
    min-height: 100vh;
    object-fit: cover;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    /* height: 100%; */
    /* padding: 6rem 2rem; */
    video {
      margin-bottom: -0.5rem;
    }
  }
`;

export default Video;
