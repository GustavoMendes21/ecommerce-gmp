'use client'

import Image from "next/image";
import Carousel from "react-material-ui-carousel";

import banner1 from "../../../assets/banner1.jpg";
import banner2 from "../../../assets/banner2.png";
import banner3 from "../../../assets/banner3.jpg";

import banner from "../../../assets/banner.webp";

export function BannerContainer() {
  return (
    <section className="w-full flex flex-col align-center bg-white pt-10" >
      <div className="mx-auto">
        <Carousel className="w-[1024px]">
          <div className="w-full h-[415px]">
            <Image src={banner1} fill={true} alt="Produtos Vonnix de Qualidade" className="rounded"/>
          </div>
          <div className="w-full h-[415px]">
            <Image src={banner2} fill={true}  alt="Produtos Vonnix de Qualidade" className="rounded"/>
          </div>
          <div className="w-full h-[415px]">
            <Image src={banner3} fill={true} alt="Rodas BBS" className="rounded"/>
          </div>
        </Carousel>
      </div>
      <Image src={banner} alt="ecommerce confiável" className="w-[1144px] mx-auto mt-10"/>
    </section>
  )
}