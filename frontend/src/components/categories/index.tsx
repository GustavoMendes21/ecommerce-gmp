'use client'

import Carousel from "react-material-ui-carousel";
import imageProduto from "../../../assets/blend-black-1.1.png";
import { CardProduct } from "../cardProduct";

interface CategoriesProps {
  NameCategory: string
}


export function Categories({ NameCategory }:CategoriesProps) {
  return (
    <section className="w-[1144px] mx-auto pb-10">
      <div className="mb-12">
        <h2 className="font-bold text-2xl text-stone-800 pt-4 pb-2 border-2 border-b-stone-800">{NameCategory}</h2>
      </div>
      <div className="">
        <Carousel>
          <div className="w-full flex justify-around">
            <CardProduct key={1} name="Nome do Produto" description="Descrição do Produto..." imageUrl={imageProduto}/>
            <CardProduct key={1} name="Nome do Produto" description="Descrição do Produto..." imageUrl={imageProduto}/>
            <CardProduct key={1} name="Nome do Produto" description="Descrição do Produto..." imageUrl={imageProduto}/>
            <CardProduct key={1} name="Nome do Produto" description="Descrição do Produto..." imageUrl={imageProduto}/>
            <CardProduct key={1} name="Nome do Produto" description="Descrição do Produto..." imageUrl={imageProduto}/>
          
          </div>

          <div className="w-full flex justify-around">
            <CardProduct key={1} name="Nome do Produto" description="Descrição do Produto..." imageUrl={imageProduto}/>
            <CardProduct key={1} name="Nome do Produto" description="Descrição do Produto..." imageUrl={imageProduto}/>
            <CardProduct key={1} name="Nome do Produto" description="Descrição do Produto..." imageUrl={imageProduto}/>
          </div>
        </Carousel>
      </div>
    </section>
  )
}