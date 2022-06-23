import React, { useEffect } from "react";
import CarouselFadeExample from "../CarouselBox/CarouselBox";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div style={{ textAlign: "center", marginTop: "120px" }}>
      <h1>Doctor Strange in the Multiverse of Madness</h1>
      <p>
        Marvel Studios debuts the teaser trailer and poster for “Doctor Strange
        in the Multiverse of Madness”—a thrilling ride through the Multiverse
        with Doctor Strange, his trusted friend Wong and Wanda Maximoff, aka
        Scarlet Witch.
      </p>
      <div style={{ width: "100%" }}>
        <video
          src="https://movietrailers.apple.com/movies/marvel/doctor-strange-in-the-multiverse-of-madness/doctor-strangelove-in-the-multiverse-of-madness-trailer-2_h480p.mov"
          muted
          autoPlay={"autoplay"}
          preload="auto"
          loop
          style={{ borderRadius: "15px", width: "100%" }}
        >
          {" "}
          something
        </video>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
        quibusdam pariatur maxime saepe porro recusandae repudiandae voluptas
        corrupti nisi, veritatis, accusantium modi ab officia iusto.
      </p>
      <div data-aos="flip-left">
        <CarouselFadeExample />
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
        repudiandae incidunt laborum rem, sit at repellendus fuga numquam vel
        unde ipsum id excepturi veritatis accusamus
      </p>
      <div
        data-aos="flip-right"
        style={{
          marginTop: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <img
          style={{ borderRadius: "25px", width: "35%" }}
          src="https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/ce63a1b8-e60a-400a-ad10-c375cb0fe7a7/1920x"
          alt=""
        />
      </div>
      <div
        data-aos="fade-up"
        style={{
          marginTop: "50px",
        }}
      >
        <img
          style={{ borderRadius: "25px", width: "35%" }}
          src="https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/ce63a1b8-e60a-400a-ad10-c375cb0fe7a7/1920x"
          alt=""
        />
      </div>
      <div
        data-aos="flip-left"
        style={{
          marginTop: "50px",
          display: "flex",
          alignItems: "center",
          flexDirection: "row-reverse",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <img
          style={{ borderRadius: "25px", width: "35%" }}
          src="https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/ce63a1b8-e60a-400a-ad10-c375cb0fe7a7/1920x"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomePage;
