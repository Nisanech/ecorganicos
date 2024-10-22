import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import type { FoodDetails } from "@/domain/entities/food-detail.interface";
import { getFoodDetailById } from "@/application/use-cases/food-detail.use-case";

export const useFoodDetail = () => {
  const pathname = usePathname(); // Obtener la ruta actual
  const [foodDetail, setFoodDetail] = useState<FoodDetails | null>(null);

  useEffect(() => {
    if (pathname) {
      // Extraer el último segmento de la URL como productId
      const segments: string[] = pathname.split("/");
      const productId: string = segments[segments.length - 1];

      // Obtener datos del producto
      const foodData: FoodDetails | null = getFoodDetailById(productId);
      setFoodDetail(foodData);
    }
  }, [pathname]); // Dependencia en la pathname

  return foodDetail; // Retornar los datos del producto
};