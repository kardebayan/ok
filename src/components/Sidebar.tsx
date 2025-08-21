import { XIcon } from "../icons/XIcon"
import { YouTubeIcon } from "../icons/YouTubeIcon"
import { SidebarItem } from "./SidebarItem"
import { Logo } from "../icons/Logo"

export function Sidebar() {
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-4">
        <div className="flex text-2xl pt-8 items-center">
            <div className="pr-2 text-purple-800">
                <Logo/>
            </div>
            
            Brainly
        </div>
        <div className="pt-8 pl-4">
            <SidebarItem text="Twitter" icon={<XIcon/>} />
            <SidebarItem text="YouTube" icon={<YouTubeIcon/>} />
        </div>
    </div>
}