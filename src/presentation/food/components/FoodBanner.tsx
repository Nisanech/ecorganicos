import Image from "next/image";

export default function FoodBanner() {
  return (
    <div className={`bg-[url("/assets/food/images/panela-organica/banner-background.jpg")] bg-cover bg-no-repeat p-4 w-full md:pl-[60px] py-[60px] lg:h-[450px] pt-[90px]`}>
      <div className={`flex flex-col items-center sm:justify-center md:flex-row justify-between`}>
        <div className={`flex flex-col items-center w-full`}>
          <h1 className={`text-center w-full m-0 font-koulen text-[#A36752] text-2xl md:text-4xl lg:text-5xl`}>
            Descubre el dulce sabor <br/>
             <span className={`font-mervale-script font-normal text-2xl text-[#343434] md:text-4xl lg:text-5xl`}>De la panela organica</span></h1>

          <div className={`flex mt-10 items-center gap-5 md:mt-[90px]`}>
            <p className={`font-koulen text-xl text-[#A36752] lg:text-3xl`}>Usos:</p>

            <Image className={`w-[200px] lg:w-[300px] h-auto`} src={"/assets/food/icons/panela-organica-icon.png"} alt={"Icon usos"}
                   width={300} height={100} />
          </div>
        </div>

        <div className={`mt-10 md:mt-0 w-full relative flex flex-col items-center`}>
          <Image className={`md:absolute top-[-60px] right-0 h-auto md:w-[580px] lg:top-[-100px] xl:top-[-180px]`} src={"/assets/food/images/panela-organica/banner-product.png"}
                 alt={"Producto"} width={300} height={100} />
        </div>
      </div>
    </div>
  )
}