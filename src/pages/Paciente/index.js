import React, { useState, useRef, useCallback } from "react";

import { Grid } from "@material-ui/core";
import Avatar from "../../components/Avatar";

import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";

import {
  Container,
  Card,
  Header,
  Column,
  ButtonContent,
  Buttons,
  Content,
  TitlePage,
  TitleCard,
} from "./styles";
import { useHistory } from "react-router-dom";

const Paciente = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const history = useHistory();
  const Back = (e) => {
    history.push("/");
  };
  return (
    <Container>
      <Header>
        <TitlePage>Paciente</TitlePage>
        <Avatar />
      </Header>
      <Card>
        <Form ref={formRef}>
          <Column>
            <TitleCard>Novo Paciente</TitleCard>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Input name="nome" label="Nome" defaultValue="" />
              </Grid>
              <Grid item xs={4}>
                <Input name="nomeMeio" label="Nome do Meio" defaultValue="" />
              </Grid>
              <Grid item xs={4}>
                <Input name="ultimoNome" label="Último Nome" defaultValue="" />
              </Grid>
              <Grid item xs={4}>
                <Input name="doc" label="CPF/CNPJ" />
              </Grid>
            </Grid>
          </Column>
          <Column>
            <TitleCard>Endereço</TitleCard>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Input name="cep" placeholder="" label="CEP" mask="zipcode" />
              </Grid>
              <Grid item xs={4}>
                <Input name="rua" placeholder="" label="Rua" />
              </Grid>
              <Grid item xs={4}>
                <Input name="numero" placeholder="" label="Número" />
              </Grid>
              <Grid item xs={4}>
                <Input name="bairro" placeholder="" label="Bairro" />
              </Grid>
              <Grid item xs={12}>
                <Input
                  name="complemento"
                  label="Complemento"
                  placeholder=""
                  variant="border"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <Input
                  name="cidade"
                  label="Cidade"
                  placeholder=""
                  variant="border"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <Input
                  name="estado"
                  label="Estado"
                  placeholder=""
                  variant="border"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <Buttons>
                  <ButtonContent width="15">
                    <Grid item xs={12}>
                      <Content>
                        <Button
                          onClick={Back}
                          color="back"
                          type="button"
                          size="large"
                          label="VOLTAR"
                          iconSize={28}
                          iconPosition="left"
                          fullWidth
                        />
                      </Content>
                    </Grid>
                  </ButtonContent>
                  <ButtonContent width="20">
                    <Grid item xs={12}>
                      <Content>
                        <Button
                          onClick={Back}
                          color="primary"
                          type="button"
                          loading={loading}
                          size="large"
                          label="Salvar"
                          iconSize={28}
                          iconPosition="right"
                          fullWidth
                        />
                      </Content>
                    </Grid>
                  </ButtonContent>
                </Buttons>
              </Grid>
            </Grid>
          </Column>
        </Form>
      </Card>
    </Container>
  );
};

export default Paciente;
