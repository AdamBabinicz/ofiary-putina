import React, { useState } from "react";
import styled from "styled-components";
import img from "../assets/32.jpg";
import img1 from "../assets/33.jpg";
import img2 from "../assets/10.jfif";
import img3 from "../assets/28.jpg";
import img4 from "../assets/30.jpg";
import img5 from "../assets/29.jpg";
import img6 from "../assets/26.jpg";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { testimonialsAnimations } from "../animation";

function Testimonials() {
  const [element, controls] = useScroll();
  const [selected, setSelected] = useState(0);

  const testimonials = [
    {
      designation: "Zamordowani, bo byli Ukraińcami.",
      name: "☠",
      review:
        "Mieszkańcy Buczy na Ukrainie, zamordowani przez rosyjskich żołnierzy w marcu 2022.",
      image: img,
    },
    {
      designation: "Rosyjskie zbrodnie na Ukrainie.",
      name: "☠",
      review:
        "Ofiary skrępowane, zabijane strzałem w tył głowy, chowane w zbiorowych mogiłach.",
      image: img1,
    },
    {
      designation: "Rosjanie stali tu miesiąc.",
      name: "☠",
      review:
        "Zapowiadana przez Putina 'denazyfikacja' Ukrainy miała być tak naprawdę deukrainizacją Ukrainy.",
      image: img2,
    },
    {
      designation: "Ludobójstwo na Ukrainie.",
      name: "☠",
      review: "Rosyjskie potwory nie zatrzymują się w swoich działaniach.",
      image: img3,
    },
    {
      designation: "To zło, które nie ma granic.",
      name: "☠",
      review:
        "Horror, który świat zobaczył w Buczy jest jedynie przedsionkiem piekła, które Rosjanie rozpętali w Mariupolu.",
      image: img4,
    },
    {
      designation: "Rosjanom się nie wierzy z zasady!",
      name: "☠",
      review:
        "Od zawsze!! To kłamcy! A zawieszenie ognia dla korytarzy humanitarnych były kolejną ściemą.",
      image: img5,
    },
    {
      designation:
        "Rosjanie są pasywni w polu, ale nadal biorą na cel cywilów.",
      name: "☠",
      review:
        "Sposób działania rosyjskich oprawców, przypomina metody, które przed laty stosowali w Syrii.",
      image: img6,
    },
  ];

  return (
    <Section ref={element}>
      <div className="container">
        <motion.div
          className="testimonials"
          variants={testimonialsAnimations}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
        >
          {testimonials.map(({ designation, name, review, image }, index) => {
            return (
              <div
                className={`testimonial ${
                  selected === index ? "active" : "hidden"
                }`}
                key={index}
              >
                <div className="image">
                  <div className="circle2">
                    <img src={image} alt="..." />
                  </div>
                </div>

                <div className="title-container">
                  <span className="designation">{designation}</span>
                  <h3 className="title">{name}</h3>
                </div>
                <p className="description">{review}</p>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          className="controls"
          variants={testimonialsAnimations}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
        >
          <button
            className={selected === 0 ? "active" : ""}
            onClick={() => setSelected(0)}
          ></button>
          <button
            className={selected === 1 ? "active" : ""}
            onClick={() => setSelected(1)}
          ></button>
          <button
            className={selected === 2 ? "active" : ""}
            onClick={() => setSelected(2)}
          ></button>
          <button
            className={selected === 3 ? "active" : ""}
            onClick={() => setSelected(3)}
          ></button>
          <button
            className={selected === 4 ? "active" : ""}
            onClick={() => setSelected(4)}
          ></button>
          <button
            className={selected === 5 ? "active" : ""}
            onClick={() => setSelected(5)}
          ></button>
          <button
            className={selected === 6 ? "active" : ""}
            onClick={() => setSelected(6)}
          ></button>
        </motion.div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  overflow: hidden;

  .container {
    min-height: 100vh;
    background: var(--primary-color);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem 0;

    .testimonials {
      /* margin: 5rem 15rem; */
      display: flex;
      justify-content: center;
      gap: 1rem;
      text-align: center;

      .testimonial {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        gap: 1rem;

        .description {
          width: 100%;
          padding: 0 1rem;
          height: 100%;
        }

        .image {
          position: relative;

          .circle2 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            border-radius: 10rem;
            background: #8860e6b0;

            img {
              width: 80rem;
              height: auto;
              object-fit: cover;
            }
          }
        }
      }
      .hidden {
        display: none;
      }
      color: #fff;

      .designation {
        height: 8rem;
      }
    }
    .controls {
      display: flex;
      gap: 1rem;

      button {
        padding: 0.5rem;
        border-radius: 1rem;
        background: var(--secondary-color);
        border: 0.1rem solid transparent;
        cursor: pointer;
      }
      .active {
        background: transparent;
        border: 0.1rem solid var(--secondary-color);
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .image {
      .circle2 {
        img {
          width: 100% !important;
          height: 30rem !important;
          object-fit: contain;
        }
      }
    }
  }
`;

export default Testimonials;
