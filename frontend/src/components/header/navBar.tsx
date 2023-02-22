
import CleanExteriorCategoryItem from '../../../assets/clean-exterior.webp';
import CleanInteriorCategoryItem from '../../../assets/clean-intern.webp';
import PerformanceCategoryItem from '../../../assets/performance-category.svg';
import WheelCategoryItem from '../../../assets/wheel-category-icon.svg';
import { ActiveLink } from "./activeLink";



export function Navbar() {
  return (
    <nav className="pb-2">
      <ul className="flex items-center justify-center gap-12">
        <ActiveLink href="/category/limpeza-exterior" image={CleanExteriorCategoryItem} name={"Limpeza Exterior"} />
        <ActiveLink href="/category/limpeza-interior" image={CleanInteriorCategoryItem} name={"Limpeza Interior"} />
        <ActiveLink href="/category/performance" image={PerformanceCategoryItem} name={"Performance"} />
        <ActiveLink href="/category/rodas" image={WheelCategoryItem} name={"Rodas"} />
      </ul>
    </nav>
  )
} 