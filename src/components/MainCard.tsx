import { Heart, Timer } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { Ingredients } from './Icons/Ingredients'
import donutsImage from './images/donuts.png'

export function MainCard() {
    return (
        <Link to="#" className='flex bg-gray-100 w-[456px] rounded-lg drop-shadow-app hover:scale-105 transition group'>
            <img src={donutsImage} alt="" />
            <div className='info-name w-full flex flex-col items-center gap-6 p-2 group-hover:hidden'>
                <Link to="#" className="self-end"> <Heart size={32} weight="light" /></Link>
                <div className="flex flex-col gap-2 justify-center items-center">
                    <span className='text-sm text-gray-300'>Sobremesa</span>
                    <h2 className="text-2xl">Donuts</h2>
                    <p>de <strong className='text-red-500'>Raphael da Silva</strong></p>
                </div>
            </div>
            <div className='w-full hidden flex-col items-center gap-4 p-2 group-hover:flex'>
                <Link to="#" className="self-end"> <Heart size={32} weight="light" /></Link>
                <div className="flex gap-2 justify-center items-center">
                    <div className='flex flex-col gap-2 justify-center'>
                        <Timer size={32} />
                        <span className='text-gray-300'>30 minutos</span>
                    </div>
                    <div className='flex flex-col gap-2 items-center justify-center'>
                        <Ingredients />
                        <span className='text-gray-300'>8 Ingredientes</span>
                    </div>
                </div>
                <Link to="#" className='bg-red-500 text-gray-100 py-2 px-4 rounded-lg'>
                    Ver Receita
                </Link>
            </div>
        </Link>
    )
}