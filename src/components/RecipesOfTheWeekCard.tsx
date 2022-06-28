import { Heart } from 'phosphor-react'
import donutsImage from './images/donuts.png'

export function RecipesOfTheWeekCard() {
    return (
        <div className='flex bg-gray-100 w-[296px] rounded-lg drop-shadow-app'>
            <img src={donutsImage} className='w-[136px] h-[200px] object-cover' alt="" />
            <div className="w-full flex flex-col items-center gap-6 p-2">
                <Heart className="self-end" size={32} weight="light" />
                <div className="flex flex-col gap-2 justify-center items-center">
                    <span className='text-sm text-gray-300'>Sobremesa</span>
                    <h2 className="text-2xl">Donuts</h2>
                    <p>de <strong className='text-red-500'>Raphael da Silva</strong></p>
                </div>
            </div>
        </div>
    )
}