"use client";

import FoodDetail from "@/presentation/food/FoodDetail";
import { useFoodDetail } from "@/shared/hooks/useFoodDetail";
import FrutasDeshidratadasBanner from "@/presentation/food/food-banners/FrutasDeshidratadasBanner";
import DocumentationBanner from "@/presentation/food/DocumentationBanner";
import PopularProducts from "@/presentation/food/PopularProducts";

export default function FrutasDeshidratadas(){
  const foodDetail = useFoodDetail().foodDetail;

  const popularProducts = useFoodDetail().popularProducts;

  if (!foodDetail) {
    return <div>Producto no encontrado o cargando...</div>;
  }

  return (
    <>
      <FrutasDeshidratadasBanner />

      <FoodDetail data={foodDetail} background={"bg-[#4EBC57]/15"} />

      <DocumentationBanner data={foodDetail["technical-data"]} background="bg-light-green" textColor="text-light-green" category="food"  />

      <PopularProducts data={popularProducts} />
    </>
  )
}