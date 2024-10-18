"use client";

import React from 'react';
import Image from 'next/image';

const MultiCardCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cards = [
    {
      image: '/assets/news/images/connect-americas/connect-americas-1.jpg',
      date: '10 Octubre 2022',
      description: 'Ecorgánicos de Colombia Participamos como invitados especiales contando nuestra experiencia en el Lanzamiento de ConnectAmericas.com en Colombia. ConnectAmericas.com-ecorganicos-02EL pasado martes 12 de mayo del 2015.',
      linkButton:''
    },
    {
      image: '/assets/news/images/connect-americas/connect-americas-1.jpg',
      date: '10 Octubre 2022',
      description: 'Ecorgánicos de Colombia Participamos como invitados especiales contando nuestra experiencia en el Lanzamiento de ConnectAmericas.com en Colombia. ConnectAmericas.com-ecorganicos-02EL pasado martes 12 de mayo del 2015.',
      linkButton:''
    },
    {
      image: '/assets/news/images/connect-americas/connect-americas-1.jpg',
      date: '10 Octubre 2022',
      description: 'Ecorgánicos de Colombia Participamos como invitados especiales contando nuestra experiencia en el Lanzamiento de ConnectAmericas.com en Colombia. ConnectAmericas.com-ecorganicos-02EL pasado martes 12 de mayo del 2015.',
      linkButton:''
    },
    {
      image: '/assets/news/images/connect-americas/connect-americas-1.jpg',
      date: '10 Octubre 2022',
      description: 'Ecorgánicos de Colombia Participamos como invitados especiales contando nuestra experiencia en el Lanzamiento de ConnectAmericas.com en Colombia. ConnectAmericas.com-ecorganicos-02EL pasado martes 12 de mayo del 2015.',
      linkButton:''
    },
    {
      image: '/assets/news/images/connect-americas/connect-americas-1.jpg',
      date: '10 Octubre 2022',
      description: 'Ecorgánicos de Colombia Participamos como invitados especiales contando nuestra experiencia en el Lanzamiento de ConnectAmericas.com en Colombia. ConnectAmericas.com-ecorganicos-02EL pasado martes 12 de mayo del 2015.',
      linkButton:''
    },
    {
      image: '/assets/news/images/connect-americas/connect-americas-1.jpg',
      date: '10 Octubre 2022',
      description: 'Ecorgánicos de Colombia Participamos como invitados especiales contando nuestra experiencia en el Lanzamiento de ConnectAmericas.com en Colombia. ConnectAmericas.com-ecorganicos-02EL pasado martes 12 de mayo del 2015.',
      linkButton:''
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };
if(currentIndex>cards.length-3) {
  console.log(currentIndex)
  setCurrentIndex(0)
  console.log("hi")
}
  return (
    <div className='flex justify-center mt-[-150px]'>
      <div className="w-[70%]">
        <div>
        
          
          <div className="flex gap-4 items-center">
          <button className="w-6 h-6 rounded-full text-[30px] text-medium-green" onClick={handlePrev} >&lt;</button>
            {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
              <div className="flex-none w-1/3 p-4 bg-white rounded-lg shadow-md" key={index}>
                <img className="w-full h-32 object-cover mb-4 rounded-lg" src={card.image} alt="Card" />
                <div className='flex gap-4 font-kumbh font-normal text-light-green pb-4 justify-end'><Image src="/assets/news/icons/calendario-icon.svg" alt="row-icon" width={15} height={10} /><h3 className="text-sm">{card.date}</h3></div>
                <p className="text-gray-500 pb-4">{card.description}</p>
                <button className='flex gap-4 justify-center font-semibold text-darker-green py-2 px-6 rounded-full border-solid border-2 border-light-green text-light-green hover:bg-[rgba(78,188,87,0.30)] hover:text-dark-green'>Leer noticia completa <Image src="/assets/news/icons/row-inclinated-icon.svg" alt="row-icon" width={13} height={10}/></button>
              </div>
            ))}
          <button className="w-6 h-6 rounded-full text-[30px] text-medium-green" onClick={handleNext}>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiCardCarousel;