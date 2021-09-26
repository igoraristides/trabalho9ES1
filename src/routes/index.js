import React from "react";

import { BrowserRouter, Switch } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard";
import Prontuario from "../pages/Prontuario";
import Paciente from "../pages/Paciente";
import Login from "../pages/Login";
import RegistrarPF from "../pages/RegistrarPF";
import EsqueciSenha from "../pages/EsqueciSenha";
import Done from "../pages/Done";
import Registrar from "../pages/EscolherRegistro";
import RegistrarPJ from "../pages/RegistrarPJ";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" component={Dashboard} exact />
        <PrivateRoute path="/prontuario" component={Prontuario} />
        <PrivateRoute path="/paciente" component={Paciente} />
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/registro" component={Registrar} />
        <PublicRoute path="/registropf" component={RegistrarPF} />
        <PublicRoute path="/registropj" component={RegistrarPJ} />
        <PublicRoute path="/esqueciminhasenha" component={EsqueciSenha} />
        <PublicRoute path="/done" component={Done} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
