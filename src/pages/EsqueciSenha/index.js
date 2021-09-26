/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";

import { Grid } from "@material-ui/core";
import FadeIn from "react-fade-in";

import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Link from "../../components/Link";
import useToast from "../../hooks/useToast";

import { Container, Buttons, Links } from "./styles";

const EsqueciSenha = ({ history }) => {
  const formRef = useRef(null);
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <FadeIn>
        <Form title="Esqueci minha senha" ref={formRef}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                name="email"
                variant="border"
                label="Seu E-mail"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Buttons>
                <Button
                  color="default"
                  type="button"
                  loading={loading}
                  size="large"
                  label="Recuperar senha"
                  fullWidth
                />
              </Buttons>
            </Grid>
          </Grid>
          <Links>
            <Link label="Voltar para login" to="/login" />
          </Links>
        </Form>
      </FadeIn>
    </Container>
  );
};

export default EsqueciSenha;
