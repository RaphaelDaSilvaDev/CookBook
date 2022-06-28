import { Logo } from "./Logo";

export function Footer() {
    return (
        <div className="w-full h-28 mt-9 z-10 bg-red-500 flex items-center justify-center drop-shadow-app">
            <div className="w-full max-w-[936px] flex justify-between items-center py-2">
                <Logo />
                <span className='text-gray-100'>CookBook - Todos os direitos reservados</span>
            </div>
        </div>
    )
}