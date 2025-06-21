import Image from "next/image"
import Link from "next/link"

import { Instagram } from 'lucide-react';
import { Youtube } from 'lucide-react';

import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"



export function Menu (){
    return(
        <div className="ml-8">
            <Sheet>
                <SheetTrigger><Image src="/button-header.png" width={37} height={29} alt="menu"></Image></SheetTrigger>
                <SheetContent side={"left"} className="w-[550px] bg-backg/60 backdrop-blur-sm">
                    <SheetHeader className="flex-col">
                        <SheetTitle className="flex items-center justify-center"></SheetTitle>
                        <div className="flex-col">
                            <div className="mt-top text-xl space-y-2">
                                <h1><Link href="/" >INICIO</Link></h1>
                                <h1><Link href="/produtos" >PRODUTOS</Link></h1>
                                <h1><Link href="/" >FOTOS & VIDEOS</Link></h1>
                                <h1><Link href="/" >SOBRE NÓS</Link></h1>
                            </div>
                            <div className=" mt-down text-base space-y-2 mb-40">
                                <h1><Link href="/" >CONTATO</Link></h1>
                                <h1><Link href="/" >TROCA & DEVOULUÇÕES</Link></h1>
                                <h1><Link href="/" >POLITICA DE PRIVACIDADE</Link></h1>
                                <h1><Link href="/" >ENVIO & PAGAMENTO</Link></h1>
                            </div>
                        </div>
                        <SheetFooter className="flex justify-center items-center">
                            <Link href='/' ><Instagram/></Link>
                            <Link href='/' ><Youtube/></Link>
                        </SheetFooter>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}