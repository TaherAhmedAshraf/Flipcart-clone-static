import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { products } from "../../constance/Data";
import {
  makeStyles,
  Box,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
import Countdown from "react-countdown";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const useStyle = makeStyles({
  image: {
    height: 150,
  },
  component: {
    marginTop: 12,
    background: "#fff",
  },
  deal: {
    padding: "15px 20px",
    display: "flex ",
  },
  dealText: {
    fontSize: 22,
    fontWeight: 600,
    // lineHeight: 32,
    marginRight: 25,
  },
  timer: {
    color: "#7f7f7f",
    marginLeft: 15,
    display: "flex",
    alignItems: "center",
  },
  button: {
    marginLeft: "auto",
    background: "#2874f0",
    color: "#fff",
    borderRadius: 2,
  },
  text: {
    fontSize: 14,
    marginTop: 5,
  },
  wrapper: {
    padding: "25px 15px",
  },
});

export default function Slide({ timer, title }) {
  const classes = useStyle();

  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span className={classes.timer}>
        {hours} : {minutes} : {seconds} Left
      </span>
    );
  };
  return (
    <Box className={classes.component}>
      <Box className={classes.deal}>
        <Typography className={classes.dealText}>{title}</Typography>
        {timer && (
          <>
            <img src={timerURL} style={{ width: 24 }} />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
            <Button className={classes.button}>View All</Button>
          </>
        )}
      </Box>
      <Divider />
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map((product) => (
          <Box className={classes.wrapper}>
            <img className={classes.image} src={product.url} />
            <Typography
              className={classes.text}
              style={{ fontWeight: 600, color: "#212121" }}
            >
              {product.title.shortTitle}
            </Typography>
            <Typography className={classes.text} style={{ color: "green" }}>
              {product.discount}
            </Typography>
            <Typography
              className={classes.text}
              style={{ color: "#212121", opacity: 0.6 }}
            >
              {product.tagline}
            </Typography>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
