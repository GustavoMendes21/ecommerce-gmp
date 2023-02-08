import Image, { StaticImageData } from "next/image";

interface CardProductProps {
  imageUrl: StaticImageData,
  name: string
  description: string,
}

export function CardProduct({ imageUrl, description, name }: CardProductProps) {
  return (
    <div className="w-[220px] border-2 border-solid border-gray-300 p-3 flex flex-col justify-center hover:cursor-pointer hover:bg-slate-100 transition">
        <Image src={imageUrl} alt={name} width={200} className="mx-auto"/>
        <div>
          <span className="font-bold text-gray-800">{name}</span>
          <p className="text-sm text-stone-700 h-20 mt-2 truncate">{description}</p>
        </div>
        <button className="py-2 px-1 rounded text-white bg-red-950 font-bold hover:brightness-75 transition">Adicionar ao carrinho</button>
    </div>
  )
}