import React from "react";

import { Drawer as DrawerMat, Grid } from "@material-ui/core/";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import Logo from "../../assets/icons/heart.svg";

import { ReactComponent as Prontuario } from "../../assets/icons/medical.svg";
import { ReactComponent as Paciente } from "../../assets/icons/patient.svg";
import { ReactComponent as Dashboard } from "../../assets/icons/monitor.svg";

import Item from "./Item";
import useStyles, { LogoDrawer } from "./styles";

const routesClient = [
  {
    label: "Dashboard",
    to: "/",
    disabled: false,
    icon: Dashboard,
  },
  {
    label: "Paciente",
    to: "/paciente",
    disabled: false,
    icon: Paciente,
  },
  {
    label: "Prontuário",
    to: "/prontuario",
    disabled: false,
    icon: Prontuario,
  },
];

function Drawer({ open, handleDrawerClose, mobile, width }) {
  const history = useHistory();
  const classes = useStyles();
  const { pathname } = useLocation();

  const routes = routesClient;
  const onChangePage = (to) => {
    history.push(to);
    if (mobile && open) {
      handleDrawerClose();
    }
  };

  const changeTo = (to) => {
    if (pathname === "/" && to === "/") return true;

    if (to === "/") return false;

    return pathname.startsWith(to);
  };

  return (
    <DrawerMat
      variant={mobile ? "temporary" : "persistent"}
      className={clsx(classes.drawer)}
      classes={{
        paper: clsx(classes.drawerPaper),
      }}
      open={open}
      onClose={handleDrawerClose}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.logoGrid}>
          <LogoDrawer src={Logo} alt="logo" onClick={() => history.push("/")} />
        </Grid>
        {routes.map((item) => (
          <Grid item xs={12}>
            <Item
              navigatePage={() => onChangePage(item.to)}
              disabled={item.disabled}
              label={item.label}
              active={changeTo(item.to)}
              submenu={item.subMenu}
              icon={item.icon}
            />
          </Grid>
        ))}
      </Grid>
    </DrawerMat>
  );
}

export default withWidth()(Drawer);
