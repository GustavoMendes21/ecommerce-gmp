import Image from "next/image";
import logo from "../../../assets/logo-ecommerce.png";
import { MenuHeader } from "./menuHeader";
import { Navbar } from "./navBar";
import { SearchBox } from "./searchBox";

export function Header() {
  return (
    <header className="container mx-auto pt-8">
      <div className="flex justify-between items-center w-full">
        <Image src={logo} alt="Gmp ecommerce de peças automotivas" width={180}/>
        <SearchBox/>
        <MenuHeader/>
      </div>
      <div className="mt-28">
        <Navbar/>
      </div>
    </header>
  )
}