import React from "react";
import styled from "styled-components";
import img from "../assets/15.png";
import img1 from "../assets/9.jpg";
import img2 from "../assets/10.jpg";
import img3 from "../assets/5.jpg";
import Title from "./Title";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { blogsAnimation } from "../animation";

function Blog() {
  const [element, controls] = useScroll();

  const blogsData = [
    {
      title: "Trzeba tworzyć oddziały w schronach",
      type: "Nikt z nas nie myślał, że jeszcze w naszych czasach takie bestialstwo może się wydarzyć.",
      description:
        "Od początku wojny urodziło się 4,3 tys. dzieci. To tragedia, że ukraińskie noworodki trzeba znieść do schronów. Tam bomby spadają na szpitale.",
      image: img1,
      link: "https://natemat.pl/400389,bomby-spadaja-na-szpitale-cierpia-bezbronne-noworodki-w-tym-wczesniaki",
    },
    {
      title: "Nagminnie przywożą nam krwawiące dzieci z ranami",
      type: "Dzieci ofiarami inwazji Rosji na Ukrainę. „Nie mamy czasu na rozpacz”.",
      description:
        "Rosja cynicznie łamie prawa dzieci. W walkach ostrzeliwane są korytarze humanitarne, którymi z piekła wojny próbują wydostać się kobiety i dzieci.",
      image: img2,
      link: "https://player.pl/programy-online/uwaga-odcinki,351/odcinek-6683,S37E6683,228018",
    },
    {
      title: "60% dzieci musiało opuścić swój dom",
      type: "Dwa miliony dzieci z Ukrainy przekroczyły granice z krajami ościennymi.",
      description:
        "Kobiety z dziećmi uciekają. Ponadto 2,5 mln dzieci zostało przesiedlonych wewnątrz kraju.",
      image: img3,
      link: "https://www.pap.pl/aktualnosci/news%2C1137897%2Cunicef-60-proc-ukrainskich-dzieci-musialo-opuscic-swoj-dom.html",
    },
  ];

  return (
    <Section id="dzieci" ref={element}>
      <Title value="dzieci" />
      <div className="blogs">
        {blogsData.map(({ title, type, description, image, link }) => {
          return (
            <motion.div
              className="blog"
              variants={blogsAnimation}
              animate={controls}
              transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
            >
              <img src={image} alt="..." />
              {/* <div className="image"></div> */}
              <div className="title">
                <h3>{title}</h3>
              </div>
              <span className="type">{type}</span>
              <div className="description">
                <p>{description}</p>
              </div>
              <div className="more">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img src={img} alt="..." className="arrow" />
                </a>
                <span>Czytaj</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  position: relative;

  .blogs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    margin: 5rem 15rem;

    .blog {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      img {
        width: 100%;
        height: 20rem;
        object-fit: cover;
      }

      .title {
        h3 {
          color: var(--background-color);
          font-size: 1.5rem;
        }
      }
      .type {
        color: var(--primary-color);
        font-weight: bolder;
        text-transform: uppercase;
      }
      .description {
        height: 10rem;
        color: var(--primary-color);
        justify-self: stretch;
      }
      .more {
        display: flex;
        gap: 1rem;
        width: max-content;

        .arrow {
          cursor: pointer;
          width: 1rem;
          height: auto;
          margin-bottom: 3rem;
          transition: all 0.4s ease-in-out;

          &:hover {
            opacity: 0.7;
          }
        }

        span {
          letter-spacing: 0.1rem;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 0;
    .blogs {
      padding: 0 2rem;
      grid-template-columns: 1fr;
      margin: 0 1rem;
    }
  }
`;

export default Blog;
