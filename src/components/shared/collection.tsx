import Image from "next/image"
import Link from "next/link"



export function Collection (){
    return(
        <div className="my-6"> 
        <Link href="/">
        <Image src="/colection-bordado.png" width={269} height={95} alt="dudd bordado"></Image> 
        </Link>
        </div>
    )
}

