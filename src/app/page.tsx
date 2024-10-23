import Image from "next/image";
import CardsHome from "@/presentation/home/components/CardsHome";
import SwiperCarousel from "@/presentation/news/components/SwiperCarousel";


export default function Home() {

  return (

    <div className="bg-medium-gray pb-[80px]">
      
          {/* banner principal */}

          <div className="grid items-center justify-items-center gap-2">
            
            <div className="w-full bg-[url('/assets/home/images/banner-home.jpg')] text-center pt-16 pb-44 rounded-b-[180px] bg-cover bg-center bg-no-repeat">

              <div className="flex flex-col items-center [text-shadow:_2px_2px_3px_#000000]">

                  <h4 className="font-josefin text-[30px] text-white ">Descubre lo mejor de</h4>
                  <h4 className="font-koulen text-[43px] pb-1 text-white text-shadow-md">la naturaleza colombiana</h4>
                  <h4 className="font-koulen text-[27px] pb-4 text-white text-shadow-md">¡Compra productos 100% organicos hoy!</h4>
                  <button className="flex gap-4 items-center bg-white font-kumbh text-[14px] font-semibold text-darker-green py-2 px-10 rounded-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                      Conoce nuestros productos
                      <Image src="/assets/home/icons/row-icon-green.svg" alt="row-icon" width={15} height={10} /></button>

              </div>

            </div>

            {/* cards banner home */}

                  <div className="absolute mt-[335px]">
                      <CardsHome/>
                  </div>

          </div>

          {/* info "Que hacemos en ecorganicos */}

          <div className="text-darker-green flex flex-col items-center p-[30px] mt-[470px] md:mt-[150px] md:mt-28 md:pb-20 md:gap-6 md:mx-auto md:pl-[70px] md:pr-[70px] md:flex-row xl:mt-[90px]">

            <img className=" w-[300px] h-[300px]" src="/assets/home/images/what-we-do.png" alt="row-icon"/>
          
            <div className="justify-center">
                
                <div>
                  <h4 className="font-kumbh font-semibold text-[25px]">Que hacemos en Ecorganicos</h4><br></br>
                  <p className="text-[16px]">Ecorganicos de Colombia S.A.S., es una compañía colombiana de exportación, comercialización internacional y de producción de materias primas básicas para el sector agro alimentario y para el sector farmacéutico, ofreciendo igualmente consultoría en el campo de la agro industria.</p>
                </div>

                <div><br></br>
                  <h4 className="flex items-center gap-[10px] font-semibold"> <Image src="/assets/home/icons/naturaleza-icon-green.svg" alt="row-icon" width={15} height={10}></Image>División de alimentos</h4><br></br>
                  <p className="text-[14px]">En nuestra división de alimentos manejamos productos agro industriales orgánicos, naturales y materias primas con base en una producción limpia y una trazabilidad impecable. Nos esforzamos por que nuestros clientes siempre obtengan productos de alta calidad y saludables. Efectuamos maquila con marca privada o exportamos a granel para re empaque</p>
                </div>

                <div><br></br>
                  <h4 className="flex items-center gap-[10px] font-semibold"> <Image src="/assets/home/icons/naturaleza-icon-green.svg" alt="row-icon" width={15} height={10}></Image>División de materias primas naturales</h4><br></br>
                  <p className="text-[14px]"> En la división de materias primas naturales manejamos productos de origen natural para la industria farmacéutica y cosmética. Estos productos provienen de raíces y plantas exóticas que se producen en Colombia. Ajustamos los productos de acuerdo a la necesidad del cliente.</p>
                </div>

            </div>

          </div>

          {/* logos marcas */}

          <div className="bg-medium-green pt-6 pb-6 grid grid-cols-2 grid-rows-2 gap-4 place-items-center sm:grid-cols-3 sm:grid-rows-2 gap-4 md:flex md:pl-[8px] md:pr-[8px] md:justify-between lg:pl-[60px] lg:pr-[60px]">
            <Image src="/assets/home/logos/logo 2.svg" alt="row-icon" width={95} height={100} />
            <Image src="/assets/home/logos/logo 3.svg" alt="row-icon" width={105} height={100} />
            <Image src="/assets/home/logos/logo 4.svg" alt="row-icon" width={85} height={100} />
            <Image src="/assets/home/logos/logo 5.svg" alt="row-icon" width={80} height={100} />
            <Image src="/assets/home/logos/logo 6.svg" alt="row-icon" width={110} height={100} />
            <Image src="/assets/home/logos/logo 1.svg" alt="row-icon" width={95} height={100} />
            <Image src="/assets/home/logos/logo 7.svg" alt="row-icon" width={85} height={100} />
          </div>

          {/* noticias */}

          
          <div>
            <div className="bg-[url('/assets/home/images/margen-1.png')] bg-no-repeat bg-left-top bg-contain bg-medium-green pb-20  mt-16 w-[100%] pl-[60px] md:pl-44 md:w-[40%]">
              <div className="pt-10 [text-shadow:_2px_2px_3px_#000000]">
                <h3 className="font-kumbh font-semibold text-[30px] text-white">Últimas noticias</h3>
                <h4 className="font-kumbh font-light text-[18px] text-white">DEL MUNDO ORGÁNICO</h4>
              </div>
              
            </div>

          
            <div className="w-[40%] bg-medium-green h-[100px] " >

            </div>

          </div>


          <div>
            <SwiperCarousel></SwiperCarousel>
          </div>

          


    </div>
  );
}
