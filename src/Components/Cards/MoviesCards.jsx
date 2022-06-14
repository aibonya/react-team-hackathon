import * as React from "react";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";

import { Box, CardActionArea, Paper } from "@mui/material";

export default function MoviesCards({ item }) {
  console.log(item);
  return (
    <>
      <Box margin={"16px"}>
        <Paper
          style={{ borderRadius: "30px" }}
          elevation={12}
          children={
            <Card style={{ borderRadius: "30px" }} sx={{ maxWidth: 200 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="280"
                  image="https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/4ae92a3a-b7fd-4d21-923b-c55c4f2aac7c/600x900"
                  alt="green bugatti"
                />
                {/* <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Название фильма
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam, magni?
                  </Typography>
                </CardContent> */}
              </CardActionArea>
            </Card>
          }
        />
      </Box>
    </>
  );
}
