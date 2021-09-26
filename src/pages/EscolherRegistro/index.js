import React, { useRef, useState } from "react";

import { Grid } from "@material-ui/core";
import FadeIn from "react-fade-in";
import { FaUserCircle } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { MdBusinessCenter } from "react-icons/md";

import Button from "../../components/Button";
import Form from "../../components/Form";
import logo from "../../assets/icons/heart.svg";

import {
  Title,
  Links,
  Text,
  Buttons,
  ButtonContent,
  Content,
  Img,
  Logo,
} from "./styles";

const Registrar = () => {
  const history = useHistory();

  const goToPf = (e) => {
    history.push("/registropf");
  };
  const goToPj = (e) => {
    history.push("/registropj");
  };

  return (
    <>
      <FadeIn>
        <Img>
          <Logo src={logo} />
        </Img>
        <Buttons>
          <ButtonContent width="48">
            <Grid item xs={12}>
              <Content>
                <Button
                  onClick={goToPf}
                  color="primary"
                  type="button"
                  size="large"
                  label="Pessoa Física"
                  Icon={FaUserCircle}
                  iconSize={28}
                  iconPosition="left"
                  fullWidth
                />
              </Content>
            </Grid>
          </ButtonContent>
          <ButtonContent>
            <Grid item xs={12}>
              <Content>
                <Button
                  onClick={goToPj}
                  color="primary"
                  type="button"
                  size="large"
                  label="Pessoa Jurídica"
                  Icon={MdBusinessCenter}
                  iconSize={28}
                  iconPosition="left"
                  fullWidth
                />
              </Content>
            </Grid>
          </ButtonContent>
        </Buttons>
      </FadeIn>
    </>
  );
};

export default Registrar;
