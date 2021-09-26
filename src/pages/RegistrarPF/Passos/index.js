import React from "react";

import { Container, Row } from "./styles";

const Passos = ({ step, stepers = [] }) => {
  return (
    <>
      {step > 3 ? undefined : (
        <Container>
          <ul className="progressbar">
            {stepers.map((element, index) => (
              <Row
                key={index}
                step={step}
                className={`${step === index ? "active" : ""}`}
              >
                <label className={`${step === index ? "activeLabel" : ""}`}>
                  {element}
                </label>
              </Row>
            ))}
          </ul>
        </Container>
      )}
    </>
  );
};

export default Passos;
