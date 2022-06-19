import { Alert, Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { moviesContext } from "../../contexts/moviesContext";
import "./Add.css"

const AddSeries = () => {
  const { createSeries } = useContext(moviesContext);
  const navigate = useNavigate()
  //   console.log(createMovie);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState("");
  const [country, setCountry] = useState("");
  const [genre, setGenre] = useState("");
  const [duration, setDuration] = useState("");
  const [actors, setActors] = useState("");
  const [description, setDescription] = useState("");
  const [trailer, setTrailer] = useState("");
  const [price, setPrice] = useState("");


  
  function handleValues() {
    let newSeries = {
      title,
      image,
      year,
      country,
      genre,
      duration,
      actors,
      description,
      trailer,
      price
    };
    if(!title.trim() || !image.trim() || !year.trim() || !country.trim() || !genre.trim() || !duration.trim() || !actors.trim() || !description.trim() || !trailer.trim() || !price){
      alert('Fill to the filds')
      return
    }
    navigate(`/series`)
    createSeries(newSeries);
  }

  return (
    <div style={{marginTop: '100px'}}>
    <Container>
        <Row  className="mt-5" style={{display: "flex", justifyContent: 'center' ,alignItems: 'center'}}>
            <Col style={{display: "flex", justifyContent: 'center' }} lg={14} md={7} sm={12}>
                <img className="w-50" src='https://ismuniv.com/wp-content/uploads/2021/12/dm.gif' alt=""/>
            </Col>
            <Col lg={4} md={5} sm={12} className="text-center mt-5 p-3">
                <Form>
                    <Form.Group >
                        <div style={{display:'flex', justifyContent: "start"}}>Title</div>
                        <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
                    </Form.Group>

                    <Form.Group className="mt-3">
                        <div style={{display:'flex', justifyContent: "start"}}>Image</div>
                        <Form.Control value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter image" />
                    </Form.Group>

                    <Form.Group className="mt-3">
                        <div style={{display:'flex', justifyContent: "start"}}>Year</div>
                        <Form.Control value={year} onChange={(e) => setYear(e.target.value)} placeholder="Enter year" />
                    </Form.Group>

                    <Form.Group className="mt-3">
                        <div style={{display:'flex', justifyContent: "start"}}>Country</div>
                        <Form.Control value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Enter country" />
                    </Form.Group>

                    <Form.Group className="mt-3">
                        <div style={{display:'flex', justifyContent: "start"}}>Genre</div>
                        <Form.Control value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Enter genre" />
                    </Form.Group>

                    <Form.Group className="mt-3">
                        <div style={{display:'flex', justifyContent: "start"}}>Duration</div>
                        <Form.Control value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Enter duration" />
                    </Form.Group>

                    <Form.Group className="mt-3">
                        <div style={{display:'flex', justifyContent: "start"}}>Actors</div>
                        <Form.Control value={actors} onChange={(e) => setActors(e.target.value)} placeholder="Enter actors" />
                    </Form.Group>

                    <Form.Group className="mt-3">
                        <div style={{display:'flex', justifyContent: "start"}}>Description</div>
                        <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter discription" />
                    </Form.Group>

                    <Form.Group className="mt-3">
                        <div style={{display:'flex', justifyContent: "start"}}>Trailer</div>
                        <Form.Control value={trailer} onChange={(e) => setTrailer(e.target.value)} placeholder="Enter trailer" />
                    </Form.Group>

                    <Form.Group className="mt-3">
                        <div style={{display:'flex', justifyContent: "start"}}>Confirm the password</div>
                        <Form.Control value={price} onChange={(e) => setPrice(+e.target.value)} type="number"  placeholder="Enter price" />
                    </Form.Group>

                    <Button onClick={() => handleValues()} style={{width:'100%', backgroundColor: '#5f5f5f', color: 'white'}} variant="primary btn-block" className="mt-3" type="submit">Add Serial</Button>

                </Form>
            </Col>
        </Row>
    </Container>
</div>
  );
};

export default AddSeries;
