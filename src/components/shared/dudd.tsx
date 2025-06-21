import Image from "next/image"
import Link from "next/link"



export function Dudd (){
    return(
        <div className="flex items-center"> 
            <Link href="/">
                <Image src="/dudd.png" width={120} height={40} alt="dudd"></Image> 
            </Link>
        </div>
    )
}