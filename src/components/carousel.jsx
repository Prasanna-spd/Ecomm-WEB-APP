import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel({ images }) {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <div className="imgslider">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id} className="carousel">
              <img className="carousel-image" src={item.src} alt={item.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
export default Carousel;
