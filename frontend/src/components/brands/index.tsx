import Image from "next/image";

import cardApr from "../../../assets/card_apr.svg";
import cardBbs from "../../../assets/card_bbs.svg";
import cardVonix from "../../../assets/card_vonix.svg";


export function Brands() {
  return (
    <section className="w-[1144px] mx-auto pb-8">
      <h2 className="text-center font-bold text-2xl py-8" >Top Marcas</h2>
      <ul>
        <li className="flex items-center justify-around">
          <Image src={cardVonix} alt="Vonix é nossa parceira"/>
          <Image src={cardBbs} alt="BBS Wheels é nossa parceira"/>
          <Image src={cardApr} alt="APR Performance é nossa parceira"/>
        </li>
      </ul>
    </section>
  )
}