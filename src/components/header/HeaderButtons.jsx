import React from "react";
import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  login: {
    background: "#fff",
    color: "#2874f0 ",
    borderRadius: 2,
    padding: "5px 40px",
  },
  wrapper: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    marginRight: "7%",
    "& > *": {
      marginRight: 50,
      fontSize: 12,
    },
  },
  container: {
    display: "flex",
    color: "#fff",
    textDecoration: "none",
  },
});

export default function HeaderButtons() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.wrapper}>
        <Button className={classes.login}>Login</Button>
        <Typography>More</Typography>
        <Link to="/cart" className={classes.container}>
          <Badge badgeContent={4} color="secondary">
            <ShoppingCart />
          </Badge>
          <Typography>Cart</Typography>
        </Link>
      </Box>
    </>
  );
}
