import React, { FunctionComponent } from "react";
import styles from "../../styles/Carousel.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e: any) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
const items = [
  <div
  draggable={false}
  key={1}
    style={{ backgroundImage: "url('/boudha.jpg')" }}
    className={`${styles.carousel_item} `}
  >
    <h2 className={styles.carousel_title} draggable={false} >Boudhanath</h2>
  </div>,
  <div
  draggable={false}
  key={2}  
  style={{ backgroundImage: "url('/tilicho.jpg')" }}
    className={styles.carousel_item}
  >
    <h2 className={styles.carousel_title}>Tilicho</h2>
  </div>,
  <div
  draggable={false}
  key={3}  
  style={{ backgroundImage: "url('/boudha.jpg')" }}
    className={styles.carousel_item}
  ></div>,
  <div
  key={4}
    style={{ backgroundImage: "url('/tilicho.jpg')" }}
    className={styles.carousel_item}
  ></div>,
];

interface CustomCarouselProps {}

const CustomCarousel: any = () => {
  return (
    <div className="d-block position-relative">
      <AliceCarousel
        mouseTracking={true}
        items={items} 
        autoPlay={false}
        autoPlayStrategy="all"
        disableButtonsControls={true}
        disableDotsControls={true}
        responsive={responsive}
        controlsStrategy="alternate"
      />
     
        <button className={`${styles.carousel_controls_left} card`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"  viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg></button>
        <button className={`${styles.carousel_controls_right} card`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></button>
    </div>
  );
};

export default CustomCarousel;
