import React from "react";
import { navData } from "../../constance/Data";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  component: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 7%",
  },
  container: {
    textAlign: "center",
  },
  image: {
    width: 64,
  },
  text: {
    fontSize: 14,
    fontWeight: 600,
  },
});

export default function Navbar() {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.component}>
        {navData.map((data) => {
          return (
            <Box className={classes.container}>
              <img className={classes.image} src={data.url} alt="" />
              <Typography className={classes.text}>{data.text}</Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
