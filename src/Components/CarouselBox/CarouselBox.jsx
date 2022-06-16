import Carousel from "react-bootstrap/Carousel";

function CarouselFadeExample() {
  return (
    <Carousel fade style={{marginTop: '60px', marginBottom: "50px"}}>
      <Carousel.Item>
        <img
          style={{ marginBottom: "29px" }}
          className="d-block w-100"
          src="https://images.hdqwalls.com/wallpapers/mandalorian-fan-art-5k-fq.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='carusel'>
          <h3>Тут будет название фильма</h3>
          <p>
            И краткое описание Nulla vitae elit libero, a pharetra augue mollis
            interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ borderRadius: "15px", marginBottom: "29px" }}
          className="d-block w-100"
          src="https://images.hdqwalls.com/wallpapers/lamborghini-countach-concept-2022-1q.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Второй фильм</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ borderRadius: "15px", marginBottom: "29px" }}
          className="d-block w-100"
          src="https://images.hdqwalls.com/wallpapers/2022-lamborghini-countach-concept-side-view-5k-tw.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Третий фильм</h3>
          <p>
            Краткое описание фильма Praesent commodo cursus magna, vel
            scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
