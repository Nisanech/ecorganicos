import Image from "next/image";

export default function MielYaconBanner() {
  return (
    <div className={`bg-[url("/assets/food/images/miel-yacon/miel-banner-background.jpg")] bg-cover bg-no-repeat p-4 w-full md:pl-[60px] py-[60px] lg:h-[500px] pt-[90px]`}>
      <div className={`flex flex-col items-center sm:justify-center md:flex-row justify-between`}>
        <div className={`flex flex-col items-center w-full`}>
          <h1 className={`text-center w-full m-0 font-lemon text-[#474A49] text-2xl md:text-4xl lg:text-[40px]`}>
            Dulzura natural de la miel <br/> de yacón <br/>

          </h1>
            <span className={`text-center font-kumbh font-semibold text-2xl text-[#622814] md:text-[20px] md:mt-[30px]`}>
              Un endulzante saludable y bajo en calorías. Perfecto para quienes <br/> buscan alternativas nutritivas, con propiedades beneficiosas para el <br/>
              control de la glucosa
            </span>

          <div className={`flex mt-10 items-center gap-5 md:mt-[30px]`}>
            <p className={`font-koulen text-xl text-[#BB7900] lg:text-3xl`}>Presentacion:</p>

            <Image className={`w-[200px] lg:w-[300px] h-auto`} src={"/assets/food/icons/miel-yacon-icon.png"} alt={"Icon Presentación"}
                   width={300} height={100} />
          </div>
        </div>

        <div className={`mt-10 md:mt-0 w-full relative flex flex-col items-center`}>
          <Image className={`md:absolute top-[-107px] right-0 h-auto md:w-[500px] lg:top-[-174px] xl:top-[-163px]`} src={"/assets/food/images/miel-yacon/miel-banner-product.png"}
                 alt={"Producto"} width={450} height={100} />
        </div>
      </div>
    </div>
  )
}