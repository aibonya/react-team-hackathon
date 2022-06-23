import { Box, Pagination } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { moviesContext } from "../../contexts/moviesContext";
import SeriesCards from "../Cards/SeriesCards";
import SeriesCarousel from "../CarouselBox/SeriesCarousel";
import FiltersForSeries from "../Filters for series/FiltersForSeries";

const Series = () => {
  const { getSeries, series, seriesPages } = useContext(moviesContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [price, setPrice] = useState([100, 600]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  useEffect(() => {
    setSearchParams({
      q: search,
      price_gte: price[0],
      price_lte: price[1],
      _page: page,
      _limit: 3,
    });
  }, []);
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
    getSeries();
  }, [searchParams]);
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "90px",
      }}
    >
      <FiltersForSeries
        search={search}
        setSearch={setSearch}
        price={price}
        setPrice={setPrice}
      />
      {/* <SeriesCarousel /> */}
      <Box
        margin={"16px"}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          flexFlow: "wrap",
        }}
      >
        {series.map((item) => (
          <SeriesCards key={item.id} item={item} />
        ))}
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Pagination
          page={page}
          count={isNaN(seriesPages) ? 0 : seriesPages}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => setPage(value)}
        />
      </Box>
    </Box>
  );
};

export default Series;
