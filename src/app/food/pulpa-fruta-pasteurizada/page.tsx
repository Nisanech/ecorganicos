"use client";

import { useFoodDetail } from "@/shared/hooks/useFoodDetail";
import PulpaFrutaPasteurizadaBanner from "@/presentation/food/food-banners/PulpaFrutaPasteurizadaBanner";
import FoodDetail from "@/presentation/food/FoodDetail";

export default function PulpaFrutaPasteuriza() {
  const foodDetail = useFoodDetail();

  if (!foodDetail) {
    return <div>Producto no encontrado o cargando...</div>;
  }

  return (
    <>
      <PulpaFrutaPasteurizadaBanner />

      <FoodDetail data={foodDetail} background={"bg-[#4EBC57]/15"} />
    </>
  )
}