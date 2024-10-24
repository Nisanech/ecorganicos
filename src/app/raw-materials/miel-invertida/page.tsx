"use client";

import { useFoodDetail } from "@/shared/hooks/useFoodDetail";
import MielInvetidaBanner from "@/presentation/food/raw-materials-banners/MielInvetidaBanner";
import FoodDetail from "@/presentation/food/FoodDetail";
import DocumentationBanner from "@/presentation/food/DocumentationBanner";
import PopularProducts from "@/presentation/food/PopularProducts";

export default function MielInvertida() {
  const foodDetail = useFoodDetail().foodDetail;

  const popularProducts = useFoodDetail().popularProducts;

  if (!foodDetail) {
    return <div>Producto no encontrado o cargando...</div>;
  }

  return (
    <>
      <MielInvetidaBanner />

      <FoodDetail data={foodDetail} background={"bg-[#FEFFE9]"} />

      <DocumentationBanner data={foodDetail["technical-data"]} background="bg-dark-orange" textColor="text-dark-orange" category="raw-material" />

      <PopularProducts data={popularProducts} />
    </>
  )
}