import { MdAccountCircle, MdExpandMore, MdOutlineSupportAgent, MdShoppingCart } from "react-icons/md"

export function MenuHeader() {
  return (
    <nav className="">
      <ul className="flex gap-8 h-full">
        <li className="flex items-center hover:underline hover:cursor-pointer">
          <MdOutlineSupportAgent size={24}/>
          <span className="text-sm font-bold ml-2">Central de Atendimento</span>
        </li>
        <li className="flex items-center hover:underline hover:cursor-pointer">
          <MdAccountCircle size={24}/>
          <span className=" text-sm font-bold ml-2">Minha Conta</span>
          <MdExpandMore size={24}/>
        </li>
        <li className="flex items-center hover:underline hover:cursor-pointer">
          <MdShoppingCart size={24}/>
          <span className="text-sm font-bold ml-2">Meu carrinho</span>
        </li>
      </ul>
    </nav>
  )
}