import React, { useState } from "react";
import styled from "styled-components";
import home from "../assets/14.jpg";
import home1 from "../assets/14.jfif";
import play from "../assets/12.png";
import img from "../assets/9.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "../animation";
import Modal from "./Portal/Modal";

function Home() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <Section id="start">
      <Navbar />
      <motion.div
        className="home"
        variants={homeAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="content">
          <div className="title">
            <h1>Ofiary zbrodniczej wojny Putina</h1>
          </div>
          <div className="subTitle">
            <p>
              – W tych miastach widać postapokaliptyczne obrazy z horroru. Wśród
              już znalezionych ofiar zbrodni wojennych są zgwałcone kobiety,
              które próbowano spalić, zabici przedstawiciele władz lokalnych,
              dzieci, starsi ludzie, mężczyźni, wiele osób ma związane ręce,
              ślady tortur. Zostali zabici strzałami w tył głowy – powiedział
              Arestowycz w niedzielę w krótkim wystąpieniu, które nazwał
              "specjalnym apelem".
            </p>
          </div>
          <img src={play} alt="..." onClick={() => Toggle()} />
        </div>
        <Modal
          show={modal}
          close={Toggle}
          title="Brutalny atak Rosjan na cywilów w Kramatorsku"
        >
          <p>
            Ponad 30 osób czekających na ewakuacje zginęło, a ponad 100 zostało
            rannych w rosyjskim ataku rakietowym na dworzec kolejowy w
            Kramatorsku na wschodzie Ukrainy. Na fragmencie jednej z rakiet,
            który znaleziono w miejscu ataku, był napis "Za dzieci".
          </p>
          <br />
          <p>
            <em>
              wiadomosci.onet.pl/swiat/wojna-rosja-ukraina-kramatorsk-brutalny-atak-rosjan-na-cywilow-relacja-na-zywo/1fc93lj
            </em>
          </p>
        </Modal>
      </motion.div>
      <motion.div
        className="info"
        variants={homeInfoAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="grid">
          <div className="col">
            <strong>Dzieci</strong>
            <p>- porywane, zabijane</p>
          </div>
          <div className="col">
            <strong>Kobiety</strong>
            <p>- gwałcone, zabijane</p>
          </div>
          <div className="col">
            <strong>Starcy</strong>
            <p>- zabijani</p>
          </div>
          <div className="col">
            <strong>Zakładnicy</strong>
            <p>- rozstrzeliwani</p>
          </div>
          <div className="col">
            <strong>Rodziny</strong>
            <p>- mordowane</p>
          </div>
          <div className="col">
            <img src={img} alt="..." />
            {/* <strong>tekst</strong>
            <p>Lorem, ipsum.</p> */}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  background: linear-gradient(rgba(255, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${home}) center/cover no-repeat;
  position: relative;
  min-height: 100vh;

  .home {
    height: 100%;

    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 60%;
      color: #fff;
      gap: 1.2rem;
      margin-top: 8rem;
      padding-left: 18rem;

      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
          font-family: "Freckle Face", cursive;
          font-weight: lighter;
        }
      }

      .subTitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
        }
      }

      img {
        width: 5rem;
        border: 1px solid transparent;
        padding: 1rem;
        cursor: pointer;
        transition: all 0.4s ease-in-out;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }

  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background: var(--background-color);
    padding: 4rem;

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 4rem;
      color: #fff;

      .col {
        &:last-child {
          border: 1px solid #fff;
          padding: 0.5rem;
          width: max-content;
        }
        img {
          width: 8rem;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    background: linear-gradient(rgba(255, 0, 0, 0.3), rgba(0, 0, 0, 0.9)),
      url(${home1}) top center/auto no-repeat;
    max-height: 100%;

    .home {
      /* height: 100vh; */
      /* background: transparent; */

      .content {
        padding-left: 2rem;
        width: 100%;
        margin-top: 1.8rem;
        .title {
          h1 {
            font-size: 3rem;
            line-height: 3rem;
          }
        }
        .subTitle {
          p {
            width: 100%;
            margin-bottom: 1rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Home;
