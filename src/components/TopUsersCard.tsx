import donutsImage from './images/donuts.png'

export function TopUsersCard() {
    return (
        <div className='flex w-[264px] h-[88px] gap-2 px-2 border-b border-gray-300'>
            <img src={donutsImage} className='w-[72px] h-[72px] rounded-full' alt="" />
            <div className='flex flex-col items-center justify-between'>
                <span className='text-xl'>Raphael da Silva</span>
                <p
                    className='text-gray-300'>
                    Seguidores:
                    <span className='text-red-500'>
                        1509
                    </span>
                </p>
                <p
                    className='text-gray-300'>
                    Todtal de receitas:
                    <span className='text-red-500'>
                        15
                    </span>
                </p>
            </div>
        </div>
    )
}