import { loadFoodDetail } from "@/infrastructure/food-detail/food-detail.repository";
import { FoodDetails } from "@/domain/entities/food-detail.interface";

export const getFoodDetailById = (productId: string): FoodDetails | null => {
  // Details from repository
  const foodDetails = loadFoodDetail();

  // Search the product by id (name from the url)
  const food = foodDetails.find((item) => item.id === productId);

  if (!food) {
    return null;
  }

  let paragraphs: string[];

  if (food.description.includes("<br>")) {
    paragraphs = food.description.split("<br>").map((paragraph: string) => paragraph.trim());
  } else {
    paragraphs = [food.description.trim()];
  }

  return {
    ...food,
    paragraphs: paragraphs,
  };
};
