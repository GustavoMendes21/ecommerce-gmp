'use client'

import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface ActiveLinkProps {
  name: string,
  href: string,
  image: StaticImageData
}

export function ActiveLink({ href, name, image }: ActiveLinkProps) {
  const path = usePathname()
  const active = path === href ? true : false

  const bgActive = active ? "bg-[#303944] rounded" : "bg-transparent"
  
  return (
    <Link href={href} >
      <li className={`w-36 flex flex-col items-center p-2 hover:bg-[#303944] hover:rounded hover:cursor-pointer ${bgActive}`}>
        <Image src={image} width={40} alt={name}/>
        <p className="mt-3 capitalize">{name}</p>
      </li>
    </Link>
  )
}