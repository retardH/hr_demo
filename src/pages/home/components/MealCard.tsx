import { FavoriteBorderOutlined, FavoriteOutlined } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";

const MealCard = ({ img, name }: { img: string; name: string }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={img}
        alt="meal"
        sx={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          objectPosition: "center",
          borderRadius: "5px",
        }}
      />
      <Stack
        direction="row"
        px={0.2}
        pb={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="body2">{name}</Typography>
        <IconButton onClick={() => setIsFavorite(!isFavorite)} color="error">
          {isFavorite ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
        </IconButton>
      </Stack>
    </Box>
  );
};

export default MealCard;
