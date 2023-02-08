import { FaRegEnvelope } from "react-icons/fa"

export function RegisterForm() {
  return (
    <section className="w-[1144px] flex items-center justify-between mx-auto text-white rounded px-4 py-2">
      <FaRegEnvelope size={32}/>
      <div className="w-[350px]">
        <h3 className="font-bold">Cadastre-se e ganhe cupons de desconto!</h3>
        <p className="text-xs">Se cadastrando você fica por dentro de todos os nossos cupons de desconto, atualizados!</p>
      </div>
      <form action="">
        <input className="mr-4 p-2 placeholder:text-sm rounded-sm" type="text" placeholder="Digite seu nome..."/>
        <input className="mr-4 p-2 placeholder:text-sm rounded-sm" type="email" placeholder="Digite seu e-mail..."/>
        <button  className="bg-gray-950 py-2 px-6 rounded text-sm font-bold hover:brightness-75 transition" type="submit">CADASTRAR</button>
      </form>
    </section>
  )
}