import { TopUsersCard } from "./TopUsersCard";

export function TopUsers() {
    return (
        <div className='flex flex-col bg-gray-100 w-[296px] mt-14 rounded-lg drop-shadow-app'>
            <span className='px-2 pt-2 text-xl text-red-500'>Top Usuários</span>

            <div className='flex flex-col pt-4'>
                <TopUsersCard />
                <TopUsersCard />
                <TopUsersCard />
                <TopUsersCard />
            </div>
        </div>
    )
}