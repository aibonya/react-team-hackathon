import * as React from "react";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";

import { Box, CardActionArea, Paper } from "@mui/material";

export default function ActionAreaCard() {
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
                  image="https://s4.vcdn.biz/static/f/2875493551/image.jpg/pt/r300x423x4"
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
                  image="https://m.media-amazon.com/images/M/MV5BYzgwMWI4ZGMtOGYyMi00ZmYyLWE0MzUtYmU5MjE1NDQ5MDhmXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_FMjpg_UX1000_.jpg"
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
                  image="https://lumiere-a.akamaihd.net/v1/images/p_fyc_hsmtmts_19097_eaf2f1c8.jpeg"
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
                  image="https://sarahjmaas.com/wp-content/uploads/2021/12/2_HOSAB.jpg"
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
