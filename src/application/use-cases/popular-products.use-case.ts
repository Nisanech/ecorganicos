import { loadFoodDetail } from "@/infrastructure/food-detail/food-detail.repository";
import { PopularProducts } from "@/domain/entities/popular-products.interface";
import { FoodDetails } from "@/domain/entities/food-detail.interface";

export const getPopularProducts = (productId: string): PopularProducts[] | [] => {
  // Details from repository
  const foodDetails = loadFoodDetail();

  // Null if not found data
  if (!foodDetails || foodDetails.length === 0) return [];

  // Search the products different by id (name from the url)
  const popularProducts: FoodDetails[] = foodDetails.filter((item) => item.id !== productId);
  
  if (popularProducts.length === 0) return [];

  return popularProducts.map((product): PopularProducts => ({
    id: product.id,
    productName: product.productName,
    category: product.category,
    productImage: product.productImages[Math.floor(Math.random() * product.productImages.length)],
  }));
};
