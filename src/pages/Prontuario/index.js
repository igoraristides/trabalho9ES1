import React, { useState, useEffect } from "react";

import { Grid } from "@material-ui/core";

import { IoIosArrowRoundBack } from "react-icons/io";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";

import Loader from "react-loader-spinner";

import {
  Container,
  Card,
  TitlePage,
  TitleCard,
  Section,
  Title,
  Text,
  Content,
  Subtitle,
} from "./styles";

const Prontuario = ({ history }) => {
  const { id } = useParams();
  const [geo, setGeo] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(geo);

  /*  async function fetchGeo() {
    try {
      setLoading(true);
      const { data } = await api.get(`/GeometricShapes/geo/${id}`);
      setGeo(data);
      setLoading(false);
    } catch (error) {
      toast.error("Não foi possível retornar os dados da forma geométrica");
    }
  } */

  /*   useEffect(() => {
    fetchGeo();
  }, []); */

  return (
    <Container>
      <TitlePage>Prontuário Paciente</TitlePage>

      <Card>
        <TitleCard>Prontuário Igor Santos</TitleCard>
        {loading ? (
          <Loader type="TailSpin" color="#9163AE" height={50} width={50} />
        ) : (
          <Content>
            <Section>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Title>Cód. Paciente</Title>
                  <Text>4bc25c82-88d4-4d7c-b578-9d5750323b9b</Text>
                </Grid>
                <Grid item xs={4}>
                  <Title>Nome Paciente</Title>
                  <Text>Igor Aristides Amaral dos Santos</Text>
                </Grid>
                <Grid item xs={4}>
                  <Title>CPF</Title>
                  <Text>111.111.111-66</Text>
                </Grid>
                <Grid item xs={4}>
                  <Title>Data Nascimento</Title>
                  <Text>22/04/1982</Text>
                </Grid>{" "}
                <Grid item xs={4}>
                  <Title>Sexo</Title>
                  <Text>M</Text>
                </Grid>
                <Grid item xs={12}>
                  <Subtitle>Endereço</Subtitle>
                </Grid>
                <Grid item xs={4}>
                  <Title>CEP</Title>
                  <Text>69982-970</Text>
                </Grid>
                <Grid item xs={4}>
                  <Title>Rua</Title>
                  <Text>Projetada, s/n</Text>
                </Grid>
                <Grid item xs={4}>
                  <Title>Número</Title>
                  <Text>1234</Text>
                </Grid>{" "}
                <Grid item xs={4}>
                  <Title>Bairro</Title>
                  <Text>Centro</Text>
                </Grid>
                <Grid item xs={4}>
                  <Title>Cidade</Title>
                  <Text>Porto Walter</Text>
                </Grid>
                <Grid item xs={4}>
                  <Title>UF</Title>
                  <Text>AC</Text>
                </Grid>{" "}
                <Grid item xs={12}>
                  <Title>Complemento</Title>
                  <Text>Casa</Text>
                </Grid>{" "}
                <Grid item xs={12}>
                  <Subtitle>Dados de Contato</Subtitle>
                </Grid>
                <Grid item xs={6}>
                  <Title>Telefones</Title>
                  <Text>(45)9 9998-2108, (45)9 9998-2398 </Text>
                </Grid>{" "}
                <Grid item xs={6}>
                  <Title>E-mail</Title>
                  <Text>igor@gmail.com</Text>
                </Grid>{" "}
                <Grid item xs={12}>
                  <Subtitle>Consultas Realizadas</Subtitle>
                </Grid>
                <Grid item xs={2}>
                  <Title>Data Consulta</Title>
                  <Text>22/04/2020</Text>
                </Grid>
                <Grid item xs={2}>
                  <Title>Tipo Consulta</Title>
                  <Text>Conulta com Clínico Geral</Text>
                </Grid>
                <Grid item xs={2}>
                  <Title>CID Consulta</Title>
                  <Text>A90</Text>
                </Grid>{" "}
                <Grid item xs={2}>
                  <Title>Nome Médico</Title>
                  <Text>Geraldo Batista</Text>
                </Grid>
                <Grid item xs={2}>
                  <Title>CRM Médico</Title>
                  <Text>00000000-0/BR</Text>
                </Grid>
                <Grid item xs={12}>
                  <Subtitle>Exames Realizados</Subtitle>
                </Grid>
                <Grid item xs={4}>
                  <Title>Data Exame</Title>
                  <Text>22/04/2020</Text>
                </Grid>
                <Grid item xs={4}>
                  <Title>Tipo Exame</Title>
                  <Text>Exame de Sangue</Text>
                </Grid>
                <Grid item xs={4}>
                  <Title>Resultado</Title>
                  <Text>...</Text>
                </Grid>
                <Grid item xs={12}>
                  <Subtitle>Remédios Prescritos</Subtitle>
                </Grid>
                <Grid item xs={4}>
                  <Title>Data</Title>
                  <Text>22/04/2020</Text>
                </Grid>
                <Grid item xs={4}>
                  <Title>Remédio</Title>
                  <Text>Ibuprofeno</Text>
                </Grid>
                <Grid item xs={4}>
                  <Title>Posologia</Title>
                  <Text>8 em 8 horas, dois comprimidos</Text>
                </Grid>
              </Grid>
            </Section>
          </Content>
        )}
        {/*         <div style={{ marginTop: "20px" }}>
          <Button
            type="button"
            label="Voltar"
            Icon={IoIosArrowRoundBack}
            iconPosition="left"
            fullWidth
            onClick={() => window.history.back()}
          />
        </div> */}
      </Card>
    </Container>
  );
};

export default Prontuario;
