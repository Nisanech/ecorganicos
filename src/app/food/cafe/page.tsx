"use client";

import { useFoodDetail } from "@/shared/hooks/useFoodDetail";
import FoodDetail from "@/presentation/food/FoodDetail";
import CafeBanner from "@/presentation/food/food-banners/CafeBanner";

export default function Cafe() {
  const foodDetail = useFoodDetail();

  if (!foodDetail) {
    return <div>Producto no encontrado o cargando...</div>;
  }

  return (
    <>
      <CafeBanner />

      <FoodDetail data={foodDetail} background={"bg-[#4EBC57]/15"} />
    </>
  )
}