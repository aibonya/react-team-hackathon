import * as React from "react";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";

import { Box, CardActionArea, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SeriesCards({ item }) {
  const navigate = useNavigate()
  return (
    <>
      <Box margin={"16px"} onClick={() => navigate(`/series/${item.id}`)}>
        <Paper
          style={{ borderRadius: "30px" }}
          elevation={12}
          children={
            <Card style={{ borderRadius: "30px" }} sx={{ maxWidth: 200}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="280"
                  image={item.image}
                  alt={item.title}
                />
              </CardActionArea>
            </Card>
          }
        />
      </Box>
    </>
  );
}
