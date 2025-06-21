import Image from "next/image"

export function Eb() {
    return(
        <div>
            <div className="flex justify-center items-center">
            <Image src="/duddPhoto.png" sizes="(max-width: 1440px) 100vw, (max-width: 1820px) 80vw, 50vw"  quality={100} fill={true} objectFit="cover" alt="Dudd. Em breve!"/>
            </div>
        </div>
    )
}