import { Clothe } from "./clothe"

export function ClothesContainer () {
    return (
            <div className="w-full h-auto grid grid-flow-row grid-rows-1 p-8 gap-2 content-center items-center justify-center mt-2 md:grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 min-[1920px]:grid-cols-4">
                <Clothe/>
                <Clothe/>
                <Clothe/>
                <Clothe/>
                <Clothe/>
                <Clothe/>
                <Clothe/>
            </div>
    )
}