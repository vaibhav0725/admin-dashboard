export const SearchBar = () => {
    return (
        <div className="flex items-center bg-[#f7f3ff] rounded-full w-full max-w-xl">
            <input
                type="text"
                placeholder="Search for data"
                className="flex-1 bg-transparent border-none outline-none text-gray-600 placeholder-gray-500 text-base font-medium py-3 px-7"
            />
            <button
                className="py-3 px-7 rounded-full bg-gradient-to-r from-[#8f8cfb] to-[#e7a5ff] text-white font-bold text-base shadow-none focus:outline-none"
            >
                Search
            </button>
        </div>
    )
}