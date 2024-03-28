import React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material/";
import Fab from "@mui/material/Fab";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import { Adder } from "../../redux/reducer/actions";
import Button from "@mui/material/Button";

const LandingPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(Adder(1));
  };
  return (
    <Grid container direction="row" mt={3} bgcolor="#6DBAC6">
      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        alignItems="center"
        justifyContent="center"
      ></Grid>
    </Grid>
  );
};

export default LandingPage;
