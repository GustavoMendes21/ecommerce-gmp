import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="text-white bg-gray-950 w-full">
          <Header/>
        </div>
        <main>{children}</main>
        <div className="bg-gray-950">
          <Footer/>
        </div>
      </body>
    </html>
  )
}
