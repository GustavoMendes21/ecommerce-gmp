import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from '../../../assets/logo-ecommerce.png';


export function Footer () {
  return (
    <footer className="w-[1144px] mx-auto py-12">
      <Image src={logo} alt={'ecommerce de peças automotivas'} width={160}/>
      <div className="w-full flex justify-around mt-12">
        <div className="text-white">
          <h3 className="font-bold mb-2">Dúvidas</h3>
          <ul className="ml-4">
            <li className="text-sm mb-2 hover:underline hover:cursor-pointer">Formulário de Contato</li>
            <li className="text-sm mb-2 hover:underline hover:cursor-pointer">Central de Atendimento</li>
            <li className="text-sm mb-2 hover:underline hover:cursor-pointer">Como comprar</li>
            <li className="text-sm mb-2 hover:underline hover:cursor-pointer">Trocas e Devoluções</li>
          </ul>
        </div>
        <div className="text-white">
          <h3 className="font-bold mb-2">Institucional</h3>
          <ul className="ml-4">
            <li className="text-sm mb-2 hover:underline hover:cursor-pointer">Quem somos</li>
            <li className="text-sm mb-2 hover:underline hover:cursor-pointer">Política de Privacidade</li>
            <li className="text-sm mb-2 hover:underline hover:cursor-pointer">Política de envio, Prazos e Entregas</li>
            <li className="text-sm mb-2 hover:underline hover:cursor-pointer">Termos e condições de uso</li>
          </ul>
        </div>
        <div className="text-white font-bold">
          <h3>Redes Sociais</h3>
          <div className="mt-2">
            <div className="bg-gray-700 p-2 inline-block rounded-sm mr-2">
              <FaFacebookF/>
            </div>
            <div className="bg-gray-700 p-2 inline-block rounded-sm mr-2">
              <FaInstagram/>
            </div>
            <div className="bg-gray-700 p-2 inline-block rounded-sm mr-2">
              <FaLinkedin/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}