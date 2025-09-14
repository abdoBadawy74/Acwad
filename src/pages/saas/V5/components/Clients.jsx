import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";
import { clients } from "@/pages/saas/V4/data";
const Clients = () => {
  const swiperOptions = {
    loop: false,
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      576: {
        "slidesPerView": 2
      },
      768: {
        "slidesPerView": 3
      },
      992: {
        "slidesPerView": 4
      },
      1200: {
        "slidesPerView": 6
      }
    },
    wrapperClass: "align-items-center"
  };
  return <section className="pt-0">
            <Container className="text-center">

                <p className="heading-color fw-semibold mb-4">Used by the world best companies</p>

                <Swiper {...swiperOptions}>
                    {clients.map((client, idx) => <SwiperSlide key={idx}>
                                <img src={client.image} className="grayscale px-sm-4 ps-0" alt="client-img" />
                            </SwiperSlide>)}
                </Swiper>
            </Container>
        </section>;
};
export default Clients;