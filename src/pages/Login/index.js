import React from "react";

import { Grid } from "@material-ui/core";
import FadeIn from "react-fade-in";

import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Link from "../../components/Link";

import logo from "../../assets/icons/heart.svg";

import { Container, Links, Text, Logo, Img } from "./styles";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const goTo = (e) => {
    history.push("/");
  };

  return (
    <>
      <Container>
        <FadeIn>
          <Img>
            <Logo src={logo} />
          </Img>
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Input
                  label="CPF / CNPJ"
                  name="doc"
                  variant="border"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <Input
                  type="password"
                  name="password"
                  label="Senha"
                  variant="border"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Links bottom="20" content="flex-end">
              <Link
                label="Esqueci minha senha"
                to="/esqueciminhasenha"
                justifyContent="flex-end"
              />
            </Links>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button
                  onClick={goTo}
                  color="primary"
                  type="button"
                  label="ENTRAR"
                  size="large"
                  fullWidth
                />
              </Grid>
              <Links top="20">
                <Text>Ainda não tem uma conta?</Text>
                <Link label="Clique aqui" to="/registro" />
              </Links>
            </Grid>
          </Form>
        </FadeIn>
      </Container>
    </>
  );
};

export default Login;
