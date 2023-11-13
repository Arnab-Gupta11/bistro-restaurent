import SectionTitle from "../../components/Shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
//Import image

// import slide1 from "../../assets/home/slide1.jpg";
// import slide2 from "../../assets/home/slide2.jpg";
// import slide3 from "../../assets/home/slide3.jpg";
// import slide4 from "../../assets/home/slide4.jpg";
// import slide5 from "../../assets/home/slide5.jpg";
const OrderOnline = () => {
  return (
    <div>
      <SectionTitle heading={"ORDER ONLINE"} subHeading={"---From 11:00am to 10:00pm---"}></SectionTitle>

      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>

      {/* <div>
        <img src={slide2} alt="" />
      </div>
      <div>
        <img src={slide3} alt="" />
      </div>
      <div>
        <img src={slide4} alt="" />
      </div>
      <div>
        <img src={slide5} alt="" />
      </div>
      <div>
        <img src={slide1} alt="" />
      </div> */}

      <div></div>
    </div>
  );
};

export default OrderOnline;
