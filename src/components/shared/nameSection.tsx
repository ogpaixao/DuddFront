import Image from "next/image"
import Link from "next/link"



export function NameSection (){
    return(
        <div className="flex items-center justify-center">
        <Link href="/"><Image src="/Produtos-Azul.png" width={200} height={58} alt="profile"></Image> </Link>
        </div>
    )
}