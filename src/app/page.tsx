import Image from "next/image";

function Homepage(){
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="Ez itt a kép" fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* TITLE */}
        <h1 className="text-4xl font-bold md:text-6xl">Lorem ipsum dolor sit amet.</h1>
        {/* DESCRIPTION */}
        <p className="md:text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure harum ipsum mollitia dolores reprehenderit consequuntur consequatur quos eius beatae voluptas.</p>
        {/* BUTTONS */}
        <div className="w-full flex gap-4">
          <button className="p-4 rounded lg ring-1 ring-green-500 bg-green-500 text-white">Galéria</button>
          <button className="p-4 rounded lg ring-1 ring-green-500">Elérhetőség</button>
        </div>
      </div>
    </div>
  );
}  

export default Homepage