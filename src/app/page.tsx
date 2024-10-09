import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="font-black capitalize text-3xl text-light-green m-0">
          Ecorganicos de Colombia SAS
        </h1>

        <p className="font-normal">
          Este texto usa la fuente Kumbh Sans localmente
        </p>
      </main>
      
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Image
          className="dark"
          src="/logo-orangedev.svg"
          alt="Vercel logomark"
          width={200}
          height={200}
        />
      </footer>
    </div>
  );
}
