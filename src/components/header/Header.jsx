import React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  MenuIcon,
  Typography,
  IconButton,
  Button,
  Box,
} from "@material-ui/core";
import SearchBar from "./SearchBar";

const useStyle = makeStyles({
  header: {
    backgroundColor: "#2874f0",
  },
  logo: {
    width: 75,
  },
  subURL: {
    width: 10,
    height: 10,
    marginLeft: 4,
  },
  container: {
    display: "flex",
  },
  component: {
    marginLeft: "12%",
    lineHeight: 0,
  },
  subHeading: {
    fontSize: 12,
    fontStyle: "italic",
  },
});

export default function Header() {
  const classes = useStyle();
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Box className={classes.component}>
            <img src={logoURL} alt="Flipcart" className={classes.logo} />
            <Box className={classes.container}>
              <Typography className={classes.subHeading}>
                Export{" "}
                <Box component="span" style={{ color: "#ffe500" }}>
                  Plus
                </Box>
              </Typography>
              <img src={subURL} alt="star" className={classes.subURL} />
            </Box>
          </Box>
          <SearchBar />
        </Toolbar>
      </AppBar>
    </>
  );
}
