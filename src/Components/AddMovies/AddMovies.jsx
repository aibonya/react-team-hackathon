import { Box, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { moviesContext } from "../../contexts/moviesContext";

const AddMovies = () => {
  const { createMovie } = useContext(moviesContext);
  console.log(createMovie);

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
    let newMovie = {
      title,
      image,
      year,
      country,
      genre,
      duration,
      actors,
      description,
      trailer,
    };
    createMovie(newMovie);
    console.log(newMovie);
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          "& > :not(style)": { m: 1 },
        }}
      >
        <TextField
          helperText="Please enter your name"
          id="demo-helper-text-misaligned"
          label="Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          helperText="Please enter your name"
          id="demo-helper-text-misaligned"
          label="Name"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <TextField
          helperText="Please enter your name"
          id="demo-helper-text-misaligned"
          label="Name"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <TextField
          helperText="Please enter your name"
          id="demo-helper-text-misaligned"
          label="Name"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <TextField
          helperText="Please enter your name"
          id="demo-helper-text-misaligned"
          label="Name"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <TextField
          helperText="Please enter your name"
          id="demo-helper-text-misaligned"
          label="Name"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <TextField
          helperText="Please enter your name"
          id="demo-helper-text-misaligned"
          label="Name"
          value={actors}
          onChange={(e) => setActors(e.target.value)}
        />
        <TextField
          helperText="Please enter your name"
          id="demo-helper-text-misaligned"
          label="Name"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          helperText="Please enter your name"
          id="demo-helper-text-misaligned"
          label="Name"
          value={trailer}
          onChange={(e) => setTrailer(e.target.value)}
        />

        <button onClick={handleValues}>Save</button>
      </Box>
    </div>
  );
};

export default AddMovies;
