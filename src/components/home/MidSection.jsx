import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { ImageURL } from "../../constance/Data";

const useStyle = makeStyles({
  wrapper: {
    display: "flex",
    marginTop: 30,
    justifyContent: "space-between",
  },
});

export default function MidSection() {
  const classes = useStyle();
  const coronaURL =
    "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";
  return (
    <>
      <Box className={classes.wrapper}>
        {ImageURL.map((image) => (
          <img src={image} style={{ width: "33%" }} alt="" />
        ))}
      </Box>
      <img src={coronaURL} style={{ width: "100%", marginTop: 20 }} alt="" />
    </>
  );
}
