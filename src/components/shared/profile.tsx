import Image from "next/image"
import Link from "next/link"



export function Profile (){
    return(
        <div className="flex items-center justify-center">
        <Link href="/"><Image src="/profile.png" width={34} height={34} alt="profile"></Image> </Link>
        </div>
    )
}