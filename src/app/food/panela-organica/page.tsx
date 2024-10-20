"use client";

import FoodBanner from "@/presentation/food/components/FoodBanner";
import FoodDetail from "@/presentation/food/components/FoodDetail";
import DocumentationBanner from "@/presentation/food/components/DocumentationBanner";
import ProductsCarousel from "@/presentation/food/components/ProductsCarousel";

export default function PanelaOrganica() {
  return (
    <>
      <FoodBanner />

      <FoodDetail />

      <DocumentationBanner />

      <ProductsCarousel />
    </>
  )
}