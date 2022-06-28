import { NavigationCard } from "./NavigationCard";

export function NavigarionItens() {


    return (
        <div className='w-[936px] h-[100px] flex'>
            <NavigationCard name="Pães" />
            <NavigationCard name="Biscoitos" />
            <NavigationCard name="Sopas" />
            <NavigationCard name="Pizza" />
        </div>
    )
}