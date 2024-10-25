"use client";

import React from "react";
import Image from "next/image";

const MultiCardCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const cards = [
    {
      image: "/assets/news/images/connect-americas/connect-americas-1.jpg",
      date: "10 Octubre 2022",
      description:
        "Ecorgánicos de Colombia Participamos como invitados especiales contando nuestra experiencia en el Lanzamiento de ConnectAmericas.com en Colombia. ConnectAmericas.com-ecorganicos-02EL pasado martes 12 de mayo del 2015.",
      linkButton: "",
    },
    {
      image: "/assets/news/images/connect-americas/connect-americas-1.jpg",
      date: "10 Octubre 2022",
      description:
        "Ecorgánicos de Colombia Participamos como invitados especiales contando nuestra experiencia en el Lanzamiento de ConnectAmericas.com en Colombia. ConnectAmericas.com-ecorganicos-02EL pasado martes 12 de mayo del 2015.",
      linkButton: "",
    },
    {
      image: "/assets/news/images/connect-americas/connect-americas-1.jpg",
      date: "10 Octubre 2022",
      description:
        "Ecorgánicos de Colombia Participamos como invitados especiales contando nuestra experiencia en el Lanzamiento de ConnectAmericas.com en Colombia. ConnectAmericas.com-ecorganicos-02EL pasado martes 12 de mayo del 2015.",
      linkButton: "",
    },
    {
      image: "/assets/news/images/connect-americas/connect-americas-1.jpg",
      date: "10 Octubre 2022",
      description:
        "Ecorgánicos de Colombia Participamos como invitados especiales contando nuestra experiencia en el Lanzamiento de ConnectAmericas.com en Colombia. ConnectAmericas.com-ecorganicos-02EL pasado martes 12 de mayo del 2015.",
      linkButton: "",
    },
    {
      image: "/assets/news/images/connect-americas/connect-americas-1.jpg",
      date: "10 Octubre 2022",
      description:
        "Ecorgánicos de Colombia Participamos como invitados especiales contando nuestra experiencia en el Lanzamiento de ConnectAmericas.com en Colombia. ConnectAmericas.com-ecorganicos-02EL pasado martes 12 de mayo del 2015.",
      linkButton: "",
    },
    {
      image: "/assets/news/images/connect-americas/connect-americas-1.jpg",
      date: "10 Octubre 2022",
      description:
        "Ecorgánicos de Colombia Participamos como invitados especiales contando nuestra experiencia en el Lanzamiento de ConnectAmericas.com en Colombia. ConnectAmericas.com-ecorganicos-02EL pasado martes 12 de mayo del 2015.",
      linkButton: "",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  return (
    <div className="flex justify-center mt-[-150px]">
      <div className="w-full md:w-[90%] lg:w-[70%]">
        <div className="flex items-center gap-2 md:gap-4">
          <button
            className="w-6 h-6 md:w-8 md:h-8 text-[24px] md:text-[30px] text-medium-green"
            onClick={handlePrev}
          >
            &lt;
          </button>

          {/* Ajusta la cantidad de tarjetas visibles según el tamaño de pantalla */}
          <div className="flex overflow-hidden gap-4 sm:pr-[15px] lg:pr-[30px]">
            {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
              <div
                className="flex-none w-full sm:w-1/2 xl:w-1/3 p-4 bg-white rounded-lg shadow-md"
                key={index}
              >
                <img
                  className="w-full h-32 object-cover mb-4 rounded-lg"
                  src={card.image}
                  alt="Card"
                />
                <div className="flex gap-2 md:gap-4 font-kumbh font-normal text-light-green pb-4 justify-end">
                  <Image
                    src="/assets/news/icons/calendario-icon.svg"
                    alt="row-icon"
                    width={15}
                    height={10}
                  />
                  <h3 className="text-sm">{card.date}</h3>
                </div>
                <p className="text-gray-500 pb-4">{card.description}</p>
                <button className="flex gap-2 md:gap-4 justify-center font-semibold text-darker-green py-2 px-4 md:px-6 rounded-full border-solid border-2 border-light-green text-light-green hover:bg-[rgba(78,188,87,0.30)] hover:text-dark-green">
                  Leer noticia completa{" "}
                  <Image
                    src="/assets/news/icons/row-inclinated-icon.svg"
                    alt="row-icon"
                    width={13}
                    height={10}
                  />
                </button>
              </div>
            ))}
          </div>

          <button
            className="w-6 h-6 md:w-8 md:h-8 text-[24px] md:text-[30px] text-medium-green"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiCardCarousel;
