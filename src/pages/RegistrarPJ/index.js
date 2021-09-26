import React, { useRef, useState } from "react";

import { Grid } from "@material-ui/core";
import FadeIn from "react-fade-in";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import Form from "../../components/Form";
import Link from "../../components/Link";
import DadosJuridicos from "../../components/PassosS/DadosJuridico";
import Endereco from "../../components/PassosS/Endereco";
import Passos from "./Passos";

import { Title, Links, Text, Buttons, ButtonContent, Content } from "./styles";

const RegistrarPJ = () => {
  const formRef = useRef(null);
  const history = useHistory();

  const goTo = (e) => {
    history.push("/done");
  };

  const [steper, setSteper] = useState(0);

  const changeStep = async (step) => {
    setSteper(step + 1);
  };
  const goBackstep = async (step) => {
    setSteper(step - 1);
  };

  const RenderButton = () => {
    if (steper === 1) {
      return (
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Buttons>
              <ButtonContent width="48">
                <Grid item xs={12}>
                  <Content>
                    <Button
                      onClick={() => goBackstep(steper)}
                      color="back"
                      type="button"
                      size="large"
                      label="VOLTAR"
                      Icon={IoIosArrowRoundBack}
                      iconSize={28}
                      iconPosition="left"
                      fullWidth
                    />
                  </Content>
                </Grid>
              </ButtonContent>
              <ButtonContent width="48">
                <Grid item xs={12}>
                  <Content>
                    <Button
                      onClick={goTo}
                      color="primary"
                      type="button"
                      size="large"
                      label="FINALIZAR"
                      iconSize={28}
                      iconPosition="right"
                      fullWidth
                    />
                  </Content>
                </Grid>
              </ButtonContent>
            </Buttons>
          </Grid>
          <Links top="60">
            <Text>Já tem uma conta?</Text>
            <Link label="Clique aqui" to="/login" />
          </Links>
        </Grid>
      );
    }

    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Buttons>
            {steper === 0 ? undefined : (
              <ButtonContent width="48">
                <Grid item xs={12}>
                  <Content>
                    <Button
                      onClick={() => goBackstep(steper)}
                      color="back"
                      type="button"
                      size="large"
                      label="VOLTAR"
                      Icon={IoIosArrowRoundBack}
                      iconSize={28}
                      iconPosition="left"
                      fullWidth
                    />
                  </Content>
                </Grid>
              </ButtonContent>
            )}
            <ButtonContent width="48">
              <Grid item xs={12}>
                <Content>
                  <Button
                    onClick={() => changeStep(steper)}
                    color="default"
                    type="button"
                    size="large"
                    label="CONTINUAR"
                    Icon={IoIosArrowRoundForward}
                    iconSize={28}
                    iconPosition="right"
                    fullWidth
                  />
                </Content>
              </Grid>
            </ButtonContent>
          </Buttons>
        </Grid>
        <Links top="60">
          <Text>Já tem uma conta?</Text>
          <Link label="Clique aqui" to="/login" />
        </Links>
      </Grid>
    );
  };

  return (
    <>
      <FadeIn>
        {steper > 1 ? undefined : <Title>Cadastro</Title>}
        <Passos
          stepers={["Dados", "Endereço"]}
          step={steper}
          onChange={changeStep}
        />
        <Form ref={formRef}>
          <DadosJuridicos step={steper} />
          <Endereco step={steper} formRef={formRef} />
          <RenderButton />
        </Form>
      </FadeIn>
    </>
  );
};

export default RegistrarPJ;
