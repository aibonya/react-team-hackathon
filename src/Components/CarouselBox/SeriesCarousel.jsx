import Carousel from "react-bootstrap/Carousel";

function SeriesCarousel() {
  return (
    <Carousel fade  style={{marginTop: '60px', marginBottom: "50px"}}>
      <Carousel.Item>
        <img
          style={{ borderRadius: "50px", marginBottom: "29px" }}
          className="d-block w-100"
          src="https://images.hdqwalls.com/wallpapers/sub-zero-x-night-king-8b.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Game of Thrones</h3>
          <p>
            И краткое описание Nulla vitae elit libero, a pharetra augue mollis
            interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ borderRadius: "30px", marginBottom: "29px" }}
          className="d-block w-100"
          src="https://images.hdqwalls.com/wallpapers/the-simpsons-tv-show-4k-su.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>The Simpsons</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ borderRadius: "30px", marginBottom: "29px" }}
          className="d-block w-100"
          src="https://www.kino-teatr.ru/news/18644/167625.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Острые Козырьки</h3>
          <p>
            Краткое описание фильма Praesent commodo cursus magna, vel
            scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SeriesCarousel;
