import React from "react";
import { Carousel, Row, Col, Button } from "antd";
const Slider = () => {
  const contentStyle = {
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div className="container">
      <Carousel autoplay effect="fade">
        <Row className="slider__content1">
          <Col className="slider__content1-text" lg={{ span: 12 }}>
            <h1 className="slider__content1-text--h1">
              GREAT OFFERS <br /> ON FRUITS <br /> AND VEGETABLES
            </h1>
            <p className="slider__content1-text--p">
              we supply highly quality, premium organic product
            </p>
            <br />
            <Button id="slider__content1-text--btn">SHOP NOW</Button>
          </Col>
          <Col lg={{ span: 12 }}>
            <img
              className="slider__content1-text--img"
              src="https://template.hasthemes.com/selena/selena/assets/img/slider/slide_1.jpg"
            />
          </Col>
        </Row>
        <Row className="slider__content1">
          <Col className="slider__content1-text" lg={{ span: 12 }}>
            <h1 className="slider__content1-text--h1">
              TASTY HEALTHY <br />
              WE SELL WHAT'S
              <br /> GOOD FOR YOU
            </h1>
            <p className="slider__content1-text--p">
              we supply highly quality, premium organic product
            </p>
            <br />
            <Button id="slider__content1-text--btn">SHOP NOW</Button>
          </Col>
          <Col lg={{ span: 12 }}>
            <img
              className="slider__content1-text--img"
              src="https://template.hasthemes.com/selena/selena/assets/img/slider/slide_2.jpg"
              style={contentStyle}
            />
          </Col>
        </Row>
      </Carousel>
    </div>
  );
};
export default Slider;
