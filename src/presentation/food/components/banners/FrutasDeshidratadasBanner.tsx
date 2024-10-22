import Image from "next/image";

export default function FrutasDeshidratadasBanner() {
  return (
    <div className={`bg-[url("/assets/food/images/frutas-deshidratadas/fruta-desh-banner-background.jpg")] bg-cover bg-no-repeat p-4 w-full md:pl-[60px] py-[60px] lg:h-[500px] pt-[90px]`}>
      <div className={`flex flex-col items-center sm:justify-center md:flex-row justify-between`}>
        <div className={`flex flex-col items-center w-full`}>
          <h1 className={`text-center w-full m-0 font-koulen text-[#474A49] text-2xl md:text-4xl lg:text-5xl`}>
            Disfruta el sabor y los beneficios <br/> de las frutas deshidratadas <br/>
            <span className={`font-metal font-normal text-2xl text-dark-green md:text-4xl lg:text-5xl`}>
              Un snack saludable, lleno de nutrientes,<br/> perfecto para cualquier momento del día
            </span>
          </h1>

          <div className={`flex mt-10 items-center gap-5 md:mt-[30px]`}>
            <p className={`font-koulen text-xl text-dark-green lg:text-3xl`}>Presentacion:</p>

            <Image className={`w-[200px] lg:w-[300px] h-auto`} src={"/assets/food/icons/fruta-deshidratada-icon.png"} alt={"Icon Presentación"}
                   width={300} height={100} />
          </div>
        </div>

        <div className={`mt-10 md:mt-0 w-[50%] relative flex flex-col items-center`}>
          <Image className={`md:absolute top-[-16px] right-0 h-auto md:w-[400px] lg:top-[-39px] xl:top-[-120px]`} src={"/assets/food/images/frutas-deshidratadas/fruta-desh-banner-product.png"}
                 alt={"Producto"} width={200} height={100} />
        </div>
      </div>
    </div>
  )
}