

import { BannerContainer } from "@/components/bannerContainer";
import { Brands } from "@/components/brands";
import { Categories } from "@/components/categories";
import { RegisterForm } from "@/components/registerForm";

export default function Home() {
  return (
    <main className="bg-neutral-200">
      <BannerContainer/>
      <Categories NameCategory="Lançamentos"/>
      <Categories NameCategory="Destaques"/>
      <div className="text-white bg-gray-950 w-full">
        <Brands/>
      </div>
      <div className="bg-red-950">
        <RegisterForm/>
      </div>
    </main>
  )
}
