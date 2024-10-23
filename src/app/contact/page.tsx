import Image from "next/image";

export default function ContactPage() {
    return (
        <div>
            <div className="z-10">
                <div className="bg-[url('/assets/home/images/margen-1.png')] bg-no-repeat bg-left-top bg-contain bg-medium-green pb-20  mt-16 w-[100%] pl-[60px] md:pl-44 lg:w-[40%]">
                    <div className="pt-10 [text-shadow:_2px_2px_3px_#000000]">
                        <h3 className="font-kumbh font-semibold text-[30px] text-white">¿Necesitas información?</h3>
                        <h4 className="font-kumbh font-light text-[18px] text-white">Te contactamos</h4>
                    </div>
                </div> 
            </div>

            <div className="w-[40%] bg-medium-green h-[100px]" >
            </div>

            <div className="md:flex gap-[40px]  lg:gap-[100px] ml-[20px] mr-[20px]  md:ml-[100px] md:mr-[100px]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] justify-between bg-white rounded-[20px] mt-[-150px] mb-[50px]">

                
                <form className="p-[30px] w-full">
                    <h3 className="text-medium-green font-kumbh-sans font-semibold text-[16px] pt-4 pb-4 ">Nombre y apellido</h3>
                    <input className="border-[2px] border-medium-green rounded-md p-1.5 w-full focus:border-medium-green focus:text-[14px] placeholder:text-[14px] placeholder:text-[#BCBCBC]" type="text"  placeholder="Ingresa nombre y apellido"/>

                    <h3 className="text-medium-green font-kumbh-sans font-semibold text-[16px] pt-6 pb-4">Teléfono</h3>
                    <input className="border-[2px] border-medium-green rounded-md p-1.5 w-full focus:border-medium-green focus:text-[14px] placeholder:text-[14px] placeholder:text-[#BCBCBC]" type="tel"  placeholder="Ingresa número de teléfono"/>
                    
                    <h3 className="text-medium-green font-kumbh-sans font-semibold text-[16px] pt-6 pb-4">Correo electrónico</h3>
                    <input className="border-[2px] border-medium-green rounded-md p-1.5 w-full focus:border-medium-green focus:text-[14px] placeholder:text-[14px] placeholder:text-[#BCBCBC]" type="email" placeholder="Example@ecorganicos.com" />
                    
                    <h3 className="text-medium-green font-kumbh-sans font-semibold text-[16px] pt-6 pb-4">Mensaje</h3>
                    <input className="border-[2px] border-medium-green rounded-md p-1.5 w-full focus:border-medium-green focus:text-[14px] placeholder:text-[14px] placeholder:text-[#BCBCBC]" type="text" placeholder="Cuéntanos sobre ti y tu proyecto" />

                    <input className="bg-medium-green pb-1.5 pt-1.5 pl-12 pr-12 font-bold text-white rounded-md mt-6 max-w-96 mx-auto hover:bg-dark-green cursor-pointer" type="submit" value="Enviar"/>
                </form>
            

                <div>

                    <div className="bg-[url('/assets/contact/images/contact-background.png')] w-[300px] lg:w-[400px] h-full bg-left-bottom rounded-r-[20px]">
                        <div className="bg-gradient-to-r from-white to-[rgba(167, 165, 161, 0.00)] h-full w-[40%]">
                            
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
