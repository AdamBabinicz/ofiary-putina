import React from "react";
import styled from "styled-components";
import services1 from "../assets/1.jpg";
import services2 from "../assets/2.jfif";
import services3 from "../assets/3.jpg";
import play1 from "../assets/12.png";
import Title from "./Title";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import { servicesAnimations } from "../animation";

function Services() {
  const [element, controls] = useScroll();

  const data = [
    {
      type: "Tragedia młodych rodziców",
      text: "18-miesięczny Cyryl skonał na rękach taty.",
      image: services1,
      link: "https://www.se.pl/wiadomosci/polityka/wojna-na-ukrainie-cyryl-skonal-na-rekach-taty-tak-wyglada-wojna-rozpetana-przez-putina-aa-FkR2-Wti7-Q6RE.html",
    },
    {
      type: "Dramatyczne doniesienia o dzieciach",
      text: "Reanimacja rannego dziecka.",
      image: services2,
      link: "https://wiadomosci.wp.pl/wojna-w-ukrainie-dramatyczne-doniesienia-dotyczace-dzieci-6744345059375680a",
    },
    {
      type: "W prowizorycznym schronie",
      text: "Dramat noworodków.",
      image: services3,
      link: "https://www.fakt.pl/wydarzenia/swiat/wojna-na-ukrainie-dramat-noworodkow-w-szpitalu/rz4byqj",
    },
  ];

  return (
    <Section id="doniesienia" ref={element}>
      <Title value="doniesienia" />
      <div className="services">
        {data.map(({ type, text, image, link }, index) => {
          return (
            <motion.div
              className="services__service"
              variants={servicesAnimations}
              animate={controls}
              transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
            >
              <div className="services__service__image">
                <img src={image} alt="..." />
              </div>
              <div className="services__service__title">
                <span>0{index + 1}</span>
                <h3>{type}</h3>
              </div>
              <p className="services__service__description">{text}</p>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={play1} alt="..." className="arrow" />
              </a>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;

  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 100%;
    margin: 0 14rem;
    margin-top: 10rem;
    /* grid-row-gap: 0.2rem; */

    &__service {
      padding: 1rem;

      .arrow {
        width: 2rem;
      }

      &:nth-of-type(2) {
        background: var(--primary-color);

        .services__service__title {
          span {
            color: #fff;
          }
        }
        .services__service__description {
          color: #fff;
        }
      }
      &__image {
        margin-bottom: 3rem;

        img {
          width: 100%;
          height: 25rem;
          object-fit: cover;
        }
      }
      &__title {
        span {
          color: var(--primary-color);
          font-weight: bolder;
        }
        h3 {
          font-size: 1rem;
          line-height: 2.5rem;
          margin-bottom: 1rem;
          color: var(--background-color);
        }
      }
      &__description {
        margin-bottom: 2rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .services {
      margin: 2rem 0;
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 0 2rem;
    }
  }
`;

export default Services;
