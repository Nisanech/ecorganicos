import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import type { FoodDetails } from "@/domain/entities/food-detail.interface";
import { getFoodDetailById } from "@/application/use-cases/food-detail.use-case";
import { PopularProducts } from "@/domain/entities/popular-products.interface";
import { getPopularProducts } from "@/application/use-cases/popular-products.use-case";

export const useFoodDetail = () => {
  const pathname = usePathname(); // Obtener la ruta actual
  const [foodDetail, setFoodDetail] = useState<FoodDetails | null>(null);
  const [popularProducts, setPopularProducts] = useState<PopularProducts[]>([]);

  useEffect(() => {
    if (pathname) {
      // Extraer el último segmento de la URL como productId
      const segments: string[] = pathname.split("/");
      const productId: string = segments[segments.length - 1];

      // Obtener datos del producto
      const foodData: FoodDetails | null = getFoodDetailById(productId);
      setFoodDetail(foodData);

      // Obtener datos de los productos populares
      const popularProductsData: PopularProducts[] = getPopularProducts(productId);
      setPopularProducts(popularProductsData);
    }
  }, [pathname]); // Dependencia en la pathname

  return {foodDetail, popularProducts}; // Retornar los datos del producto
};