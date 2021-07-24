import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import MidSection from "./MidSection";

import { Box, makeStyles } from "@material-ui/core";
import Slide from "./Slide";

const useStyle = makeStyles({
  component: {
    padding: 10,
    background: "#f2f2f2",
  },
});

export default function Home() {
  const classes = useStyle();
  return (
    <>
      <Navbar />
      <Box className={classes.component}>
        <Banner />
        <Slide timer={true} title="Deal of the day" />
      </Box>
      <MidSection />
      <Slide title="Discounts For You" />
      <Slide title="Suggested Items" />
    </>
  );
}
