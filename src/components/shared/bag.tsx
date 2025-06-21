import Image from "next/image"
import Link from "next/link"



export function Bag (){
    return(
        <div className="flex items-center justify-center">
            <Link href="/"className="flex items-center justify-center">
                <h1 className="absolute top-2 text-base italic"></h1>
                <Image src="/bag.png" width={34} height={34} alt="bag"></Image> 
            </Link>
        </div>
    )
}