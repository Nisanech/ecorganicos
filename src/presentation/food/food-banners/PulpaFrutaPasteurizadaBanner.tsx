import Image from "next/image";

export default function PulpaFrutaPasteurizadaBanner() {
  return (
    <div className={`bg-[url("/assets/food/images/pulpa-fruta-pasteurizada/banner-background.jpg")] bg-cover bg-no-repeat p-4 w-full md:pl-[60px] py-[60px] lg:h-[500px] pt-[90px]`}>
      <div className={`flex flex-col items-center sm:justify-center md:flex-row justify-between`}>
        <div className={`flex flex-col items-center w-full`}>
          <h1 className={`text-center w-full m-0 font-lalezar text-[#474A49] text-2xl md:text-4xl lg:text-[40px]`}>
            Disfruta la frescura y el sabor <br/> auténtico con nuestras pulpas de fruta <br/> pasteurizadas <br/>
            <span className={`font-merienda font-normal text-2xl text-[#AB0455] md:text-[24px]`}>
              Perfectas para preparar jugos naturales y recetas <br/> saludables, con la calidad orgánica que buscas
            </span>
          </h1>

          <div className={`flex mt-10 items-center gap-5 md:mt-[30px]`}>
            <p className={`font-koulen text-xl text-[#AB0455] lg:text-3xl`}>Presentacion:</p>

            <Image className={`w-[200px] lg:w-[300px] h-auto`} src={"/assets/food/icons/fruta-pasteurizada-icon.png"} alt={"Icon Presentación"}
                   width={300} height={100} />
          </div>
        </div>

        <div className={`mt-10 md:mt-0 w-full relative flex flex-col items-center`}>
          <Image className={`md:absolute top-[-16px] right-0 h-auto md:w-[500px] lg:top-[-39px] xl:top-[-160px]`} src={"/assets/food/images/pulpa-fruta-pasteurizada/banner-product.png"}
                 alt={"Producto"} width={200} height={100} />
        </div>
      </div>
    </div>
  )
}