import { MagnifyingGlass, UserCircle } from "phosphor-react";
import { Logo } from "./Logo";

export function Header() {
    return (
        <div className="w-full h-16 fixed z-10 bg-red-500 flex items-center justify-center">
            <div className="w-full max-w-[936px] flex justify-between items-center py-2">
                <Logo />

                <div className="flex justify-between items-center bg-gray-100 rounded-lg p-1 mr-64">
                    <input
                        className="border-none px-1 bg-transparent placeholder:text-gray-300"
                        type="text"
                        placeholder="Pesquisar receita" />
                    <button className="border-none bg-red-500 py-[2px] px-[14px] rounded-lg">
                        <MagnifyingGlass size={24} className="text-gray-100" />
                    </button>
                </div>

                <button>
                    <UserCircle size={40} weight="light" className="text-gray-100" />
                </button>
            </div>
        </div>
    )
}