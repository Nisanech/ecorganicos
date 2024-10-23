"use client";

import FoodDetail from "@/presentation/food/FoodDetail";
import DocumentationBanner from "@/presentation/food/DocumentationBanner";
import ProductsCarousel from "@/presentation/food/ProductsCarousel";
import PanelaOrganicaBanner from "@/presentation/food/food-banners/PanelaOrganicaBanner";
import { useFoodDetail } from "@/shared/hooks/useFoodDetail";

export default function PanelaOrganica() {
  const foodDetail = useFoodDetail();
  console.log("PanelaOrganica", foodDetail);
  

  if (!foodDetail) {
    return <div>Producto no encontrado o cargando...</div>;
  }

  return (
    <>
      <PanelaOrganicaBanner />

      <FoodDetail data={foodDetail} background={"bg-[#4EBC57]/15"} />

      <DocumentationBanner data={foodDetail["technical-data"]} background="bg-light-green" textColor="text-light-green" category="food"  />

      <ProductsCarousel />
    </>
  )
}