import { Bread } from "./Icons/Bread"
import { Cook } from "./Icons/Cook"
import { Noodles } from "./Icons/Noodles"
import { Pizza } from "./Icons/Pizza"

interface INavigationCardsProps {
    name: string
}

export function NavigationCard(props: INavigationCardsProps) {

    let image
    if (props.name === 'Pães') {
        image = <Bread />
    } else if (props.name === 'Biscoitos') {
        image = <Cook />
    } else if (props.name === 'Sopas') {
        image = <Noodles />
    } else {
        image = <Pizza />
    }

    return (
        <div className="w-[136px] h-[136px] flex flex-col items-center justify-center gap-2 drop-shadow-app bg-gray-100 rounded-lg">
            {image}
            <span>{props.name}</span>
        </div>
    )
}