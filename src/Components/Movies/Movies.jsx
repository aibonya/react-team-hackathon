import { Box, Pagination } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { moviesContext } from "../../contexts/moviesContext";
import MoviesCards from "../Cards/MoviesCards";
import SeriesCards from "../Cards/SeriesCards";

import CarouselBox from "../CarouselBox/CarouselBox";
import Filters from "../Filters/Filters";

const Movies = () => {
  const { getMovies, movies, moviesPages } = useContext(moviesContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [price, setPrice] = useState([100, 600]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(searchParams.get("q") ? searchParams.get("q") : "");
  useEffect(() => {getMovies()}, []);
  useEffect(() => {
    setSearchParams({
      q: search,
      price_gte: price[0],
      price_lte: price[1],
      _page: page,
      _limit: 3,
    });
  }, [search, price, page]);
  useEffect(() => {
    getMovies();
  }, [searchParams]);
  // console.log(movies);

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: '90px'
      }}
    >
      <Filters
        search={search}
        setSearch={setSearch}
        price={price}
        setPrice={setPrice}
      />
      {/* <CarouselBox/> */}
      <Box
        margin={"16px"}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          flexFlow: "wrap",
        }}
      >
        {movies.map((item) => (
          <MoviesCards key={item.id} item={item} />
        ))}
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Pagination
          page={page}
          count={isNaN(moviesPages) ? 0 : moviesPages}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => setPage(value)}
        />
      </Box>
    </Box>
  );
};

export default Movies;
