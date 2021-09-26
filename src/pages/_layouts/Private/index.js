import React, { useState, useEffect } from "react";

import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import clsx from "clsx";
import PropTypes from "prop-types";

import Drawer from "../../../components/Drawer";

import useStyles, { Container, Content } from "./styles";

const Private = ({ children, title, width }) => {
  const classes = useStyles();

  const [mobile, setMobile] = useState(false);

  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    setMobile(!isWidthUp("sm", width));
  }, [width]);

  useEffect(() => {
    if (mobile) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [mobile]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Drawer
        mobile={mobile}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <div
        className={clsx(classes.content, {
          [classes.contentShift]: !mobile && open,
        })}
      >
        <Content>{children}</Content>
      </div>
    </Container>
  );
};

Private.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withWidth()(Private);
