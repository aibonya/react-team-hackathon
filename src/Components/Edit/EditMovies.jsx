import { Alert, Box, Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { moviesContext } from "../../contexts/moviesContext";
import { Col, Container, Form, Row } from "react-bootstrap";

const EditMovies = () => {
  const { getOneMovie, oneMovie, updateMovie} = useContext(moviesContext);
  const {id} = useParams()
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
    let editedMovie = {
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
    updateMovie(id, editedMovie)
    navigate(`/movies`)
  }
  useEffect(() =>{getOneMovie(id)}, [])
  useEffect(() =>{
    if(oneMovie){
      setTitle(oneMovie.title)
      setImage(oneMovie.image)
      setYear(oneMovie.year)
      setCountry(oneMovie.country)
      setGenre(oneMovie.genre)
      setDuration(oneMovie.duration)
      setActors(oneMovie.actors)
      setDescription(oneMovie.description)
      setTrailer(oneMovie.trailer)
      setPrice(oneMovie.price)
    }
  }, [oneMovie])

  return (
    <div>
    <Container>
        <Row  className="mt-5" style={{display: "flex", justifyContent: 'center' ,alignItems: 'center'}}>
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

                    <Button onClick={() => handleValues()} style={{width:'100%', backgroundColor: '#5f5f5f', color: 'white'}} variant="primary btn-block" className="mt-3" type="submit">Edit</Button>

                </Form>
            </Col>
            <Col style={{display: "flex", justifyContent: 'center' }} lg={14} md={7} sm={12}>
                <img className="w-50" src='https://i.pinimg.com/originals/59/68/a7/5968a7b2d3a8799c5eaa7298ec409e1d.gif' alt=""/>
            </Col>
        </Row>
    </Container>
</div>
  );
};

export default EditMovies;
