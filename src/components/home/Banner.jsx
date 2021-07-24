import React from "react";
import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../constance/Data";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  image: {
    width: "100%",
  },
});

export default function Banner() {
  const classes = useStyle();
  return (
    <Carousel
      autoPlay={true}
      animation={"slide"}
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          background: "#fff",
          color: "#494949",
          borderRadius: 10,
        },
      }}
    >
      {bannerData.map((image) => (
        <img className={classes.image} src={image} alt="" />
      ))}
    </Carousel>
  );
}
