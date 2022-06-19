import Carousel from "react-bootstrap/Carousel";

function CarouselFadeExample() {
  return (
    <Carousel variant="dark" fade style={{marginTop: '60px'}}>
      <Carousel.Item style={{ display: 'flex', justifyContent: 'center'}}>
        <img
          style={{ borderRadius: "15px", marginBottom: "29px" }}
          className="d-block w-50"
          src="https://obzor.city/afisha/data/action/270/26987.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{ display: 'flex', justifyContent: 'center'}}>
        <img
          style={{ borderRadius: "15px", marginBottom: "29px" }}
          className="d-block w-50"
          src="https://obzor.city/afisha/data/action/270/26987.jpg"
        />
      </Carousel.Item>
      <Carousel.Item style={{ display: 'flex', justifyContent: 'center'}}>
        <img
          style={{ borderRadius: "15px", marginBottom: "29px" }}
          className="d-block w-50"
          src="https://s.bishkek.kg/section/afisha_event/upload/pers/219/img/afisha/000/000/002/800_61827472400c3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
