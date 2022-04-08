import React from "react";
import styled from "styled-components";

function Title({ value }) {
  return (
    <Div>
      <h2>{value}</h2>
    </Div>
  );
}

const Div = styled.div`
  position: relative;

  h2 {
    position: absolute;
    transform: translateX(-30%) translateY(20vw) rotate(-90deg);
    font-size: 7rem;
    font-family: "Stick", sans-serif;
    text-transform: uppercase;
    color: var(--background-color);

    @media screen and (min-width: 280px) and (max-width: 1080px) {
      display: none;
    }
  }
`;

export default Title;
