import Image from "next/image";

import CleanExteriorCategoryItem from '../../../assets/clean-exterior.webp';
import CleanInteriorCategoryItem from '../../../assets/clean-intern.webp';
import PerformanceCategoryItem from '../../../assets/performance-category.svg';
import WheelCategoryItem from '../../../assets/wheel-category-icon.svg';



export function Navbar() {
  return (
    <nav className="pb-2">
      <ul className="flex items-center justify-center gap-12">
        <li className="w-36 flex flex-col items-center p-2 hover:bg-[#303944] hover:rounded hover:cursor-pointer">
          <Image src={CleanExteriorCategoryItem} width={40} alt="Limpeza Exterior"/>
          <p className="mt-3">Limpeza Exterior</p>
        </li>

        <li className="w-36 flex flex-col items-center p-2 hover:bg-[#303944] hover:rounded hover:cursor-pointer">
          <Image src={CleanInteriorCategoryItem} width={40} alt="Limpeza Interior"/>
          <p className="mt-2">Limpeza Exterior</p>
        </li>

        <li className="w-36 flex flex-col items-center p-2 hover:bg-[#303944] hover:rounded hover:cursor-pointer">
          <Image src={PerformanceCategoryItem} width={40} alt="Performance"/>
          <p className="mt-2">Performance</p>
        </li>

        <li className="w-36 flex flex-col items-center p-2 hover:bg-[#303944] hover:rounded hover:cursor-pointer">
          <Image src={WheelCategoryItem} width={40} alt="Rodas"/>
          <p className="mt-2">Rodas</p>
        </li>
      </ul>
    </nav>
  )
} 