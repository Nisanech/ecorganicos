import Image from "next/image";
import { useState } from "react";

const productImages: string[] = [
  "/assets/food/images/panela-organica/panela-1.jpg",
  "/assets/food/images/panela-organica/panela-2.jpg",
  "/assets/food/images/panela-organica/panela-3.jpg",
  "/assets/food/images/panela-organica/panela-4.jpg",
  "/assets/food/images/panela-organica/panela-5.jpg",
  "/assets/food/images/panela-organica/panela-6.jpg",
  "/assets/food/images/panela-organica/panela-7.jpg",
  "/assets/food/images/panela-organica/panela-8.jpg",
  "/assets/food/images/panela-organica/panela-9.jpg",
  "/assets/food/images/panela-organica/panela-10.jpg",
  "/assets/food/images/panela-organica/panela-11.jpg",
  "/assets/food/images/panela-organica/panela-12.jpg",
];

export default function FoodDetail() {
  const [currentImage, setCurrentImage] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const prevThumbnails = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const nextThumbnails = () => {
    setStartIndex((prevIndex) =>
      Math.min(productImages.length - 4, prevIndex + 1)
    );
  };

  return (
    <>
      <main className={`bg-[#4EBC57]/15 w-full md:mt-[45px]`}>
        <div className={`px-1 py-6 md:mx-[20px] md:py-10 lg:py-20`}>
          <div className={`grid gap-4 md:grid-cols-2 md:gap-10 lg:gap-0`}>
            <div className={`order-1 md:order-1`}>
              <div
                className={`relative rounded-lg border-2 border-[#4EBC57] w-full max-w-[400px] h-[500px] bg-eco-white mx-auto`}
              >
                <Image
                  className={`object-contain h-full w-full`}
                  src={productImages[currentImage]}
                  alt={`Producto ${currentImage + 1}`}
                  width={400}
                  height={500}
                />
              </div>

              <div className={`mt-5 md:hidden max-w-[360px] mx-auto`}>
                <div className={`flex justify-center mb-4`}>
                  <button
                    className={`rounded-full mr-2`}
                    onClick={prevThumbnails}
                    disabled={startIndex === 0}
                  >
                    <div
                      className={`rounded-full w-8 h-8 flex items-center justify-center ${startIndex === 0 ? "bg-medium-gray" : "bg-medium-green"}`}
                    >
                      <Image
                        src={"/assets/common/icons/row-menu-icon.svg"}
                        alt={"Icon"}
                        width={20}
                        height={20}
                      />
                    </div>
                  </button>

                  <button
                    className={`rounded-full mr-2`}
                    onClick={nextThumbnails}
                    disabled={startIndex >= productImages.length - 4}
                  >
                    <div
                      className={`rounded-full w-7 h-7 flex items-center justify-center ${startIndex >= productImages.length - 4 ? "bg-medium-gray" : "bg-medium-green"}`}
                    >
                      {">"}
                    </div>
                  </button>
                </div>

                <div
                  className={`flex gap-2 overflow-x-auto p-2 justify-center`}
                >
                  {productImages
                    .slice(startIndex, startIndex + 4)
                    .map((img, index) => (
                      <button
                        key={startIndex + index}
                        className={`relative flex-shrink-0 w-[80px] h-[80px] rounded-md overflow-x-hidden ${currentImage === startIndex + index ? "ring-2 ring-medium-green" : ""}`}
                        onClick={() => setCurrentImage(startIndex + index)}
                      >
                        <Image
                          src={img}
                          alt={`Miniatura ${startIndex + index + 1}`}
                          width={80}
                          height={80}
                          className={`object-contain w-full h-full`}
                        />
                      </button>
                    ))}
                </div>
              </div>
            </div>

            <div
              className={`order-2 md:order-2 px-4 flex flex-col justify-between w-[90%]`}
            >
              <div className={`w-full`}>
                <h2
                  className={`font-kumbh text-xl text-darker-green font-semibold md:text-2xl lg:text-3xl`}
                >
                  Panela pulverizada orgánica
                </h2>

                <div className={`flex gap-3 my-7 items-center`}>
                  <Image
                    src={"/assets/common/icons/vineta-icon.svg"}
                    alt={"Icono"}
                    width={20}
                    height={35}
                  />

                  <h3
                    className={`font-kumbh text-xl text-darker-green font-semibold lg:text-2xl`}
                  >
                    Descripción
                  </h3>
                </div>

                <div className={`flex flex-col gap-7`}>
                  <p
                    className={`font-kumbh text-[14px] text-eco-black font-normal lg:text-[16px]`}
                  >
                    Producto alimenticio elaborado a partir de la caña de azúcar
                    100% orgánica, sin adición de químicos, pesticidas,
                    aditivos. Este producto puede ser utilizado como endulzante
                    natural saludable y alimenticio tomando en cuenta los
                    minerales y vitaminas que contiene la Panela, también puede
                    ser usada como materia prima en la elaboración de diversos
                    productos en la industria alimenticia.
                  </p>

                  <p
                    className={`font-kumbh text-[14px] text-eco-black font-normal lg:text-[16px]`}
                  >
                    La panela es una gran fuente de energía para el cuerpo
                    humano, nos aporta nutrientes esenciales para el organismo y
                    es rico en vitaminas A, B, C, D, y E. La panela sin sabor se
                    utiliza como endulzante natural en diferentes comidas y
                    bebidas.
                  </p>
                </div>
              </div>

              <div className={`mt-5 hidden md:block w-full`}>
                <div className={`flex justify-end mb-4`}>
                  <button
                    className={`rounded-full mr-2`}
                    onClick={prevThumbnails}
                    disabled={startIndex === 0}
                  >
                    <div
                      className={`rounded-full w-8 h-8 flex items-center justify-center rotate-90 ${startIndex === 0 ? "bg-medium-gray" : "bg-medium-green"}`}
                    >
                      <Image
                        src={"/assets/common/icons/row-menu-icon.svg"}
                        alt={"Icon"}
                        width={20}
                        height={20}
                      />
                    </div>
                  </button>

                  <button
                    className={`rounded-full mr-2`}
                    onClick={nextThumbnails}
                    disabled={startIndex >= productImages.length - 4}
                  >
                    <div
                      className={`rounded-full w-7 h-7 flex items-center justify-center -rotate-90 ${startIndex >= productImages.length - 4 ? "bg-medium-gray" : "bg-medium-green"}`}
                    >
                      <Image
                        src={"/assets/common/icons/row-menu-icon.svg"}
                        alt={"Icon"}
                        width={20}
                        height={20}
                      />
                    </div>
                  </button>
                </div>

                <div className={`flex gap-2 overflow-x-hidden p-2 w-full`}>
                  {productImages
                    .slice(startIndex, startIndex + 4)
                    .map((img, index) => (
                      <button
                        key={startIndex + index}
                        className={`relative flex-shrink-0 w-1/4 aspect-square rounded-md overflow-hidden ${currentImage === startIndex + index ? "ring-2 ring-medium-green" : ""}`}
                        onClick={() => setCurrentImage(startIndex + index)}
                      >
                        <Image
                          src={img}
                          alt={`Miniatura ${startIndex + index + 1}`}
                          layout="fill"
                          objectFit="contain"
                        />
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

