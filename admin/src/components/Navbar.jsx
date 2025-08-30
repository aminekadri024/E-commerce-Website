

const Navbar = ({ setToken }) => {
    return (
        <div className="w-full h-16 bg-white border-b border-gray-300 flex justify-between items-center px-4">
            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
            <button onClick={() => setToken('')} className="rounded-3xl border-b-blue-400 bg-black text-white">Logout</button>
        </div>
    )
}

export default Navbar