import React from "react";

import Link from "../../components/Link";

import CompleteImg from "../../assets/icons/heart.svg";
import {
  Complete,
  CompleteContent,
  CompleteImage,
  Links,
  Text,
  Column,
  Section,
} from "./styles";

const Done = () => {
  return (
    <Section>
      <Column>
        <Complete>
          <CompleteContent>
            <CompleteImage src={CompleteImg} />
            <p>Você receberá um E-mail com a confirmação.</p>
          </CompleteContent>
        </Complete>
        <Links top="20">
          <Text>Deseja voltar a tela de login?</Text>
          <Link label="Clique aqui" to="/login" />
        </Links>
      </Column>
    </Section>
  );
};

export default Done;
