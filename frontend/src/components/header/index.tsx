import Image from "next/image";
import logo from "../../../assets/logo-ecommerce.png";
import { MenuHeader } from "../menuHeader/indext";
import { Navbar } from "../navbar";
import { SearchBox } from "../searchBox";

export function Header() {
  return (
    <header className="container mx-auto">
      <div className="flex justify-between items-center w-full mt-8 ">
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