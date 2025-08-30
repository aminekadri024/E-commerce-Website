import { useState } from "react"
import { assets } from "../assets/admin_assets/assets"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
    const [isActive, setIsActive] = useState()
    return (
        <div className="flex flex-col gap-y-6 p-4 border-r border-gray-300 h-screen w-40">
            <NavLink onClick={() => setIsActive(true)} className={`${isActive ? 'border-blue-700 bg-blue-500/30' : ''} flex gap-x-1 items-center py-1 px-2 border rounded-sm`} to="/">
                <img src={assets.add_icon} className="size-4" />
                <h1 className="text-sm">Add items</h1>
            </NavLink>
            <NavLink onClick={() => setIsActive(true)} className={`${isActive ? 'border-blue-700 bg-blue-500/30' : ''} flex gap-x-1 items-center py-1 px-2 border rounded-sm`} to="/">
                <img src={assets.order_icon} className="size-4" />
                <h1 className="text-sm">List Items</h1>
            </NavLink>
            <NavLink onClick={() => setIsActive(true)} className={`${isActive ? 'border-blue-700 bg-blue-500/30' : ''} flex gap-x-1 items-center py-1 px-2 border rounded-sm`} to="/">
                <img src={assets.order_icon} className="size-4" />
                <h1 className="text-sm">Orders</h1>
            </NavLink>
        </div>
    )
}

export default Sidebar