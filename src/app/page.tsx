import Image from "next/image";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center gap-2">
      <main className="flex flex-col gap-4 row-start-2 items-center">
        <p className="font-kumbh-sans font-light">Fuente KumbhSans Light</p>
        <p className="font-kumbh-sans font-normal">Fuente KumbhSans Regular</p>
        <p className="font-kumbh-sans font-semibold">Fuente KumbhSans Semibold</p>
        <p className="font-koulen">Fuente Koulen Regular</p>
        <p className="font-jaldi font-bold">Fuente Jaldi Bold</p>
        <p className="font-jaldi font-normal">Fuente Jaldi Regular</p>
        <p className="font-lalezar">Fuente Lalezar Regular</p>
        <p className="font-langar">Fuente Langar Regular</p>
        <p className="font-lemon">Fuente Lemon Regular</p>
        <p className="font-merienda">Fuente Merienda Medium</p>
        <p className="font-mervale-script">Fuente MervaleScript Regular</p>
        <p className="font-metal">Fuente Metal Regular</p>
        <p className="font-pacifico">Fuente Pacifico Regular</p>
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
