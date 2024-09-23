type TMealResponse = {
  meals: Array<Meal>;
};

type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
};
export type { TMealResponse };
