import Image from "next/image";

export default function PulpaFrutaCongeladaBanner() {
  return (
    <div className={`bg-[url("/assets/food/images/fruta-congelada/fruta-cong-banner-background.jpg")] bg-cover bg-no-repeat p-4 w-full md:pl-[60px] py-[60px] lg:h-[500px] pt-[90px]`}>
      <div className={`flex flex-col items-center sm:justify-center md:flex-row justify-between`}>
        <div className={`flex flex-col items-center w-full`}>
          <h1 className={`text-center w-full m-0 font-langar text-[#0F5C25] text-2xl md:text-4xl lg:text-[40px]`}>
            Nuestras pulpas de frutas <br/> congeladas conservan todo el sabor <br/> y los nutrientes naturales <br/>

            <span className={`font-merienda font-normal text-2xl text-eco-black md:text-[24px]`}>
              Ideales para preparar jugos y postres refrescantes en <br/> cualquier momento del año
            </span>
          </h1>

          <div className={`flex mt-10 items-center gap-5 md:mt-[30px]`}>
            <p className={`font-koulen text-xl text-dark-green lg:text-3xl`}>Presentacion:</p>

            <Image className={`w-[200px] lg:w-[300px] h-auto`} src={"/assets/food/icons/fruta-congelada-icon.png"} alt={"Icon Presentación"}
                   width={300} height={100} />
          </div>
        </div>

        <div className={`mt-10 md:mt-0 w-full relative flex flex-col items-center`}>
          <Image className={`md:absolute top-[36px] right-0 h-auto md:w-[500px] lg:top-[-131px] lg:w-[600px] xl:top-[-199px]`} src={"/assets/food/images/fruta-congelada/fruta-cong-banner-product.png"}
                 alt={"Producto"} width={500} height={100} />
        </div>
      </div>
    </div>
  )
}