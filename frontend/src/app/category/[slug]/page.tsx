import { CardProduct } from "@/components/cardProduct";
import imageProduto from "../../../../assets/blend-black-1.1.png";


interface CategoryProps {
  params: {
    slug: string;
  };
}

export default function Category({ params }: CategoryProps) {

  
  return (
    <section className="min-h-screen pb-8">
      <div className="w-[1144px] mx-auto">
        <div className="mb-12 py-4">
          <h2 className="font-bold text-2xl text-stone-800 pt-4 pb-2 border-b-2 border-b-stone-800 capitalize">
            {params.slug.replace("-", " ")}
          </h2>
        </div>
        <div className="grid grid-cols-5 gap-x-4 gap-y-6">
          <CardProduct key={1} name="Nome do Produto" description="Descrição do Produto..." imageUrl={imageProduto}/>
          <CardProduct key={2} name="Nome do Produto" description="Descrição do Produto..." imageUrl={imageProduto}/>
          <CardProduct key={3} name="Nome do Produto" description="Descrição do Produto..." imageUrl={imageProduto}/>
          <CardProduct key={4} name="Nome do Produto" description="Descrição do Produto..." imageUrl={imageProduto}/>
          <CardProduct key={5} name="Nome do Produto" description="Descrição do Produto..." imageUrl={imageProduto}/>
          <CardProduct key={6} name="Nome do Produto" description="Descrição do Produto..." imageUrl={imageProduto}/>
          <CardProduct key={7} name="Nome do Produto" description="Descrição do Produto..." imageUrl={imageProduto}/>
          <CardProduct key={8} name="Nome do Produto" description="Descrição do Produto..." imageUrl={imageProduto}/>
        </div>
      </div>
    </section>
  );
}
