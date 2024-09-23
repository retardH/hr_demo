import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useGetMealsByAreaName } from "./hooks";
import MealCard from "./components/MealCard";

const HomePage = () => {
  const { data, isLoading } = useGetMealsByAreaName("American");

  if (isLoading) {
    return (
      <Box
        py={4}
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box py={4}>
      <Typography variant="h5" fontWeight={500} mb={2}>
        American Meals
      </Typography>
      <Grid container spacing={2}>
        {data?.meals?.map((meal) => {
          return (
            <Grid key={meal.idMeal} item xs={12} sm={6} md={3} lg={2}>
              <MealCard img={meal.strMealThumb} name={meal.strMeal} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default HomePage;
