"use client";

import { useFoodDetail } from "@/shared/hooks/useFoodDetail";
import MielInvetidaBanner from "@/presentation/food/raw-materials-banners/MielInvetidaBanner";
import FoodDetail from "@/presentation/food/FoodDetail";

export default function MielInvertida() {
  const foodDetail = useFoodDetail();

  if (!foodDetail) {
    return <div>Producto no encontrado o cargando...</div>;
  }

  return (
    <>
      <MielInvetidaBanner />

      <FoodDetail data={foodDetail} background={"bg-[#FEFFE9]"} />
    </>
  )
}