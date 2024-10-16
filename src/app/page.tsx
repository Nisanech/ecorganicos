import Image from "next/image";
import CardHome from "@/presentation/home/components/CardHome";

export default function Home() {

  return (

    <>
    <div className="grid items-center justify-items-center gap-2">

    <div className="w-full bg-[url('/assets/home/images/banner-home.jpg')] text-center pt-16 pb-40 rounded-b-[180px] bg-cover bg-center bg-no-repeat">

        <div className="flex flex-col items-center [text-shadow:_2px_2px_3px_#000000]">

          <h4 className="font-josefin text-[30px] text-white ">Descubre lo mejor de</h4>
          <h4 className="font-koulen text-[43px] pb-1 text-white text-shadow-md">la naturaleza colombiana</h4>
          <h4 className="font-koulen text-[27px] pb-4 text-white text-shadow-md">¡Compra productos 100% orgánicos hoy!</h4>
          <button className="flex gap-4 items-center bg-white font-kumbh text-[14px] font-semibold text-darker-green py-2 px-10 rounded-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
              Conoce nuestros productos
              <Image src="/assets/home/icons/row-icon-green.svg" alt="row-icon" width={15} height={10} />
          </button>

        </div>

      </div>

      <div className="absolute mt-96">
          <CardHome/>
      </div>

    </div>

    <div className="mt-36 flex gap-6">

      <Image src="/assets/home/images/what-we-do.png" alt="row-icon" width={310} height={10} />
      
      <div>
        <div>
          <h4 className="">Que hacemos en Ecorganicos</h4>
          <p>Ecorganicos de Colombia S.A.S., es una compañía colombiana de exportación, comercialización internacional y de producción de materias primas básicas para el sector agro alimentario y para el sector farmacéutico, ofreciendo igualmente consultoría en el campo de la agro industria.</p>
        </div>

        <div>
          <h4 className="flex items-center"> <Image src="/assets/home/icons/naturaleza-icon-green.svg" alt="row-icon" width={15} height={10}></Image>División de alimentos</h4>
          <p>En nuestra división de alimentos manejamos productos agro industriales orgánicos, naturales y materias primas con base en una producción limpia y una trazabilidad impecable. Nos esforzamos por que nuestros clientes siempre obtengan productos de alta calidad y saludables. Efectuamos maquila con marca privada o exportamos a granel para re empaque</p>
        </div>

        <div>
          <h4 className="flex items-center"> <Image src="/assets/home/icons/naturaleza-icon-green.svg" alt="row-icon" width={15} height={10}></Image>División de materias primas naturales</h4>
          <p> En la división de materias primas naturales manejamos productos de origen natural para la industria farmacéutica y cosmética. Estos productos provienen de raíces y plantas exóticas que se producen en Colombia. Ajustamos los productos de acuerdo a la necesidad del cliente.</p>
        </div>

      </div>
    </div>

    </>
  );
}
