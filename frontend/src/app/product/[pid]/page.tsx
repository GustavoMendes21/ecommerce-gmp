import Image from 'next/image'
import { BsCreditCard2Back } from "react-icons/bs"
import productImage from '../../../../assets/blend-black-1.1.png'

export default function Product () {
  const price = 23500
  const discountPrice = price - (price*(20/100))
  
  return (
    <section className='min-h-screen'>
      <div className="max-w-[1144px] mx-auto grid grid-cols-2 pt-20">
        <div className="">
          <Image src={productImage} alt={"nome do produto"} width={400}/>
        </div>
        <div className="">
          <h1 className='text-4xl font-bold mb-2'>Nome do Produto</h1>
          <span>Marca: <strong>Marca do Produto</strong></span>
          <p className='mt-4 text-ellipsis h-28'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laboriosam eos eum. Pariatur quisquam eius magni, qui minus, similique consequatur explicabo voluptatum, aperiam rem quam necessitatibus incidunt esse maxime laborum.</p>
          <span className='line-through'>de: <strong className='font-normal'>R$ {price}</strong></span>
          <h2>por: <strong className='text-2xl'>R$ {discountPrice}</strong></h2>
          
          <div className='flex items-center justify-center rounded border-2 inline-block w-72 my-4 py-2 border-gray-950'>
            <BsCreditCard2Back size={32}/>
            <div className="ml-4 ">
              <h3 className='text-base'>Aceitamos todos os cartões</h3>
              <a href="#" className='text-sm'>Veja opção de parcelamentos</a>
            </div>
          </div>

          <div className='flex flex-col'>
            <span>Calcular frete:</span>
            <div className="">
              <input type="text" className='w-72 mr-2 rounded border-2 border-gray-400 placeholder:text-gray-500 px-2 py-1' placeholder='00.000-000'/>
              <button className='bg-red-950 px-2 py-1 font-bold text-white rounded'>Calcular</button>
            </div>

          </div>

          <div className="flex mt-4">
            <input type="number" name="quantity" className='bg-gray-400 w-36 rounded mr-2'/>
            <button className='px-2 py-4 bg-red-950 font-bold text-white rounded w-full'>Comprar</button>
          </div>
        </div>
      </div>
    </section>
  )
}

