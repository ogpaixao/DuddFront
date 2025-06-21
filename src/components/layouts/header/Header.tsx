import { Dudd } from "@/components/shared/dudd"
import { Menu } from "@/components/shared/menu"
import { Bag } from "@/components/shared/bag"
import { Profile } from "@/components/shared/profile"

export function Header() {
    return (
        <div className="sticky top-0">
            <div className="flex flex-row items-center w-screen h-16 border-b-yelloww border-b text-black justify-between">
                <div>
                    <Menu/>
                </div>
                <div className="">
                    <Dudd />
                </div>
                <div className="flex items-center mr-8 gap-3">
                    <Profile/>
                    <Bag/>
                </div>
            </div>
        </div>
    )
}

