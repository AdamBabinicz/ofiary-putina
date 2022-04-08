import React from "react";
import styled from "styled-components";
import Title from "./Title";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { contactAnimation } from "../animation";
import img from "../assets/25.jpg";

function Contact() {
  const [element, controls] = useScroll();

  return (
    <Section id="bucza" ref={element}>
      <Title value="bucza" />
      <motion.div
        className="contact"
        variants={contactAnimation}
        animate={controls}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
      >
        <div className="contact__title">
          <p>Świat nigdy nie zapomni</p>
          <h2>Ukraińska Srebrenica</h2>
        </div>
        <div className="contact__data">
          <div className="contact__data__description">
            <h4>Prezydent o rzezi w Buczy</h4>
            <p>
              Setki zabitych ludzi, zakatowanych, rozstrzelanych cywilów. Ciała
              na ulicach, zaminowane terytorium, zaminowane są nawet ciała
              zabitych. Wszędzie skutki szabrownictwa… Na naszej ziemi było
              skoncentrowane zło: zabójcy, kaci, gwałciciele, szabrownicy,
              którzy nazywają siebie armią. (…)
            </p>
            <p>
              Chciałbym, żeby każda matka rosyjskiego żołnierza zobaczyła ciała
              zabitych ludzi z Buczy, Irpienia, Hostomla. Co zrobili, dlaczego
              ich zabili? Co zrobił mężczyzna, który jechał rowerem po ulicy? Po
              co torturowali na śmierć zwykłych ludzi w zwykłym mieście?
            </p>
            <p>
              Dlaczego dusili kobiety po tym, jak wyrywali im kolczyki z uszu?
              Jak można było gwałcić kobiety i zabijać je na oczach dzieci?
              Znęcać się nad ich ciałami nawet po śmierci? Po co miażdżyli
              czołgami ciała ludzi? Co zrobiło waszej Rosji ukraińskie miasto
              Bucza?
            </p>
          </div>
          <div className="contact__data__form">
            <img src={img} alt="..." />
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  .contact {
    color: var(--primary-color);
    margin: 0 18rem;
    &__title {
      margin: 6rem 0 2rem 0;
      p {
        text-transform: uppercase;
        color: var(--primary-color);
      }
      h2 {
        font-size: 2rem;
        color: var(--background-color);
      }
    }
    &__data {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 4rem;
      &__description {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h4 {
          font-size: 1.5rem;
        }
        p {
          text-align: justify;
          margin-top: 20px;
        }
        div {
          p {
            strong {
              text-transform: uppercase;
            }
          }
        }
      }
      &__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;

        img {
          width: 100%;
        }

        button {
          width: 100%;
          background-color: transparent;
          border: 0.1rem solid var(--secondary-color);
          height: 3rem;
          color: var(--secondary-color);
          text-transform: uppercase;
          cursor: pointer;
          transition: 0.5s ease-in-out;
          &:hover {
            background-color: var(--secondary-color);
            color: #fff;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .contact {
      margin: 1rem;
      padding: 0 1rem;
      &__title {
        margin: 0;
        text-align: center;
        p {
          font-size: 0.8rem;
        }
        h2 {
          font-size: 1.3rem;
        }
      }
      &__data {
        grid-template-columns: 1fr;
        margin: 0;
        p {
          text-align: left;
        }
        &__form {
          button {
            height: 6rem;
          }
        }
      }
    }
  }
`;

export default Contact;
