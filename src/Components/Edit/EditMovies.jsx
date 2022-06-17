import { Alert, Box, Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { moviesContext } from "../../contexts/moviesContext";

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
      trailer
    };
    if(!title.trim() || !image.trim() || !year.trim() || !country.trim() || !genre.trim() || !duration.trim() || !actors.trim() || !description.trim() || !trailer.trim()){
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
    }
  }, [oneMovie])

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          "& > :not(style)": { m: 1 },
        }}
      >
        <TextField
          helperText="Add title"
          id="demo-helper-text-misaligned"
          label="Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          helperText="Add image"
          id="demo-helper-text-misaligned"
          label="Name"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <TextField
          helperText="Add date"
          id="demo-helper-text-misaligned"
          label="Name"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <TextField
          helperText="Add country"
          id="demo-helper-text-misaligned"
          label="Name"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <TextField
          helperText="Add genre"
          id="demo-helper-text-misaligned"
          label="Name"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <TextField
          helperText="Add duration"
          id="demo-helper-text-misaligned"
          label="Name"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <TextField
          helperText="Add actors"
          id="demo-helper-text-misaligned"
          label="Name"
          value={actors}
          onChange={(e) => setActors(e.target.value)}
        />
        <TextField
          helperText="Add description"
          id="demo-helper-text-misaligned"
          label="Name"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          helperText="Add trailer"
          id="demo-helper-text-misaligned"
          label="Name"
          value={trailer}
          onChange={(e) => setTrailer(e.target.value)}
        />
      </Box>
      
        <Box style={{display: 'flex', justifyContent: 'center'}} onClick={() => handleValues()}>
        <button style={{width: '100px', height: '40px', borderRadius: '20px', border: 'none', backgroundColor: ''}} >Save</button>
        </Box>
    </div>
  );
};

export default EditMovies;
