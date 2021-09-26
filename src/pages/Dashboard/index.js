import { Grid } from "@material-ui/core";

import Button from "../../components/Button";
import React, { useState } from "react";

import { format } from "date-fns";

import Table from "../../components/Table";
import {
  Container,
  Card,
  TitlePage,
  TitleCard,
  Buttons,
  Section,
  Title,
  Price,
  Text,
  Header,
} from "./styles";
import Avatar from "../../components/Avatar";

const Dashboard = ({ history }) => {
  return (
    <Container>
      <Header>
        <TitlePage>Dashboard</TitlePage>
        <Avatar />
      </Header>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card>
            <TitleCard>Memorando</TitleCard>

            <Buttons>
              <Button
                label="Ver detalhes..."
                color="default"
                size="default"
                height={36}
                fullWidth
                type="button"
              />
            </Buttons>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <Section>
              {/*           <TitleCard>Saldo em Conta corrente</TitleCard>
              <Title>Seu saldo é de </Title>
              <Price>R$ 3790,35</Price>
              <Title> {"  "} </Title>
              <Title>Cartão de Crédito (fatura atual)* </Title>
              <Price>R$ 1390,35</Price>
              <Text>Limite disponível de R$ 155,33</Text> */}
            </Section>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
