import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { THUMBNAIL_PREFIX_URL } from "../config";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Controller,
  EffectFade,
} from "swiper";
import { Card } from "react-bootstrap";
import "swiper/swiper-bundle.css";
import "./SwiperSlide.css";

SwiperCore.use([Navigation, Pagination, Autoplay, Controller, EffectFade]);
const SwiperSlideComponent = (props) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [controlledSwiper2, setControlledSwiper2] = useState(null);
  const [articles, setArticles] = useState([]);

  React.useEffect(() => {
    setArticles(props.articles);
  }, [props.articles]);

  const renderPrimaryCarousel = () => {
    var slides = [];
    for (let i = 0; i < articles.length; i++) {
      if (articles[i].thumbnail !== undefined) {
        slides.push(
          <SwiperSlide key={articles[i].id}>
            <img
              className="image-carousel-primary"
              src={`${THUMBNAIL_PREFIX_URL}` + articles[i].thumbnail.hash}
              alt={`${articles[i].title}`}
            />
          </SwiperSlide>
        );
      }
    }
    return slides;
  };

  const renderSecondaryCarousel = () => {
    var slides2 = [];
    for (let j = 0; j < articles.length; j++) {
      slides2.push(
        <SwiperSlide key={articles[j].id} className="swiper-slide-container">
          <Card className="carouselcaption-container">
            <Card.Body
              style={{ padding: "8px 12px", width: "100%", maxHeight: 704 }}
            >
              <div className="carousel-title-text">{`${articles[j].title}`}</div>
            </Card.Body>
          </Card>
        </SwiperSlide>
      );
    }
    return slides2;
  };

  return (
    <div style={{ width: "100%" }}>
      <Swiper
        className="swiper-carousel-primary"
        effect="fade"
        initialSlide={0}
        controller={{ control: controlledSwiper }}
        spaceBetween={50}
        slidesPerView={1}
        // loop={true}
        navigation
        autoplay={true}
        pagination={{ clickable: true }}
        onSwiper={setControlledSwiper2}
      >
        {renderPrimaryCarousel()}
      </Swiper>

      <Swiper
        id="controller"
        className="swiper-carousel-secondary"
        initialSlide={0}
        controller={{ control: controlledSwiper2 }}
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={setControlledSwiper}
      >
        {renderSecondaryCarousel()}
      </Swiper>
    </div>
  );
};

export { SwiperSlideComponent };
