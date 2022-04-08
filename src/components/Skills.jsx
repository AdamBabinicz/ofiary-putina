import React from "react";
import styled from "styled-components";
import Title from "./Title";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { skillsBarAnimation } from "../animation";

function Skills() {
  const [element, controls] = useScroll();

  const skillsData = [
    {
      name: "Mao Zedong",
      amount: 80,
    },
    {
      name: "Józef Stalin",
      amount: 60,
    },
    {
      name: "Adolf Hitler",
      amount: 17,
    },
    {
      name: "Hideki Tōjō",
      amount: 8,
    },
    {
      name: "Pol Pot",
      amount: 3,
    },
  ];

  return (
    <Section id="zbrodnie" ref={element}>
      <Title value="mordy" />
      <div className="skills__title">
        <p>"Każda władza deprawuje, a władza absolutna deprawuje absolutnie"</p>
        <h2>Najwięksi zbrodniarze w historii ludzkości</h2>
      </div>
      <div className="skills">
        <div className="skills__bars">
          {skillsData.map(({ name, amount }) => {
            return (
              <motion.div
                className="skills__bars__bar"
                key={name}
                variants={skillsBarAnimation}
                animate={controls}
                transition={{
                  delay: 0.03,
                  type: "tween",
                  duration: 0.8,
                }}
              >
                <div className="container">
                  <progress value={amount} max="100" />
                  <span>{name}</span>
                </div>
                <h3>{amount}mln</h3>
              </motion.div>
            );
          })}
        </div>
        <div className="skills__content">
          <p className="title">
            <b>Rzeź w Buczy, również masakra w Buczy</b>
          </p>
          <p className="description">
            – zbrodnia wojenna dokonana w marcu 2022 roku w Buczy
            najprawdopodobniej przez Wojska Lądowe Federacji Rosyjskiej podczas
            inwazji Rosji na Ukrainę. W masakrze zginęło ponad 300
            nieuzbrojonych ukraińskich cywilów.
          </p>
          <p>
            Masakra została odkryta i podana do publicznej wiadomości, po
            wycofaniu się wojsk rosyjskich w dniu 2 kwietnia 2022 roku. W
            miejscowościach pod Kijowem, które opuściły wojska rosyjskie,
            znalezione zostały setki ciał cywilów. Wiele śladów wskazuje, że
            dokonano ich egzekucji. Symbolem dokonanych zbrodni jest miasto
            Bucza. Odkryto tam zbiorowe groby, w których pogrzebano 280 cywilów.
            Część z nich miała związane na plecach ręce. Jeden z grobów
            znajdujący się w Buczy zawierał 57 spalonych ciał. W samej Buczy
            znaleziono ok. 320 ciał. Łączna liczba zwłok znaleziona w obwodzie
            kijowskim w m.in. Buczy, Hostomelu i Irpieniu wynosi 410.
          </p>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  height: 140vh;
  background: #fff;

  .sideTitle {
    h1 {
      color: #fff;
      font-size: 9rem;
      z-index: 10;
    }
  }
  .skills__title {
    padding: 6rem 10rem;
    p {
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      color: var(--primary-color);
    }
    h2 {
      color: white;
      font-size: 2rem;
      font-family: "Nosifer", cursive;
      font-weight: lighter;
      color: var(--background-color);
    }
  }
  .skills {
    display: flex;
    padding: 0 5rem 0 20rem;
    gap: 10rem;

    &__bars {
      transform: rotate(-90deg);
      width: max-content;
      height: max-content;
      display: flex;
      flex-direction: column;
      gap: 4rem;
      /* justify-content: space-around; */

      &__bar {
        display: flex;
        flex-direction: row-reverse;
        gap: 1rem;
        font-family: "Stick", sans-serif;

        .container {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          span {
            text-transform: uppercase;
            letter-spacing: 0.2rem;
            color: var(--primary-color);
          }
          progress {
            width: 30rem;
            -webkit-appearance: none;
            appearance: none;

            &::-webkit-progress-bar {
              height: 3rem;
              background: var(--primary-color);
              border-radius: 20px;
            }
            &::-webkit-progress-value {
              background: var(--background-color);
              /* border-radius: 10px; */
            }
          }
        }
        h3 {
          transform: rotate(90deg);
          color: var(--primary-color);
          font-size: 2rem;
          width: 100%;
          display: flex;
          justify-content: center;
        }
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      color: var(--primary-color);
      z-index: 2;
      line-height: 1.6rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    overflow-x: hidden;
    padding: 2rem 0;
    .background {
      display: none;
    }
    .skills__title {
      padding: 2rem;
      text-align: center;
      h2 {
        font-size: 1.5rem;
      }
    }
    .skills {
      padding: 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      &__bars {
        padding: 0.2rem;
        gap: 0rem;
        align-items: center;
        justify-content: center;

        &__bar {
          width: 100%;
          max-height: 10rem;

          .container {
            gap: 1rem;
            margin-bottom: 1rem;

            progress {
              width: 12rem;
              height: 0.5rem;
              &::-webkit-progress-bar {
                height: 0.3rem;
              }
            }
          }
          h3 {
            font-size: 1rem;
          }
        }
      }
      &__content {
        padding: 0 2rem;
      }
    }
  }
`;

export default Skills;
