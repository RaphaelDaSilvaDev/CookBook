import classNames from 'classnames'

import { Link } from "react-router-dom"
import { Bread } from "./Icons/Bread"
import { Cook } from "./Icons/Cook"
import { Noodles } from "./Icons/Noodles"
import { Pizza } from "./Icons/Pizza"

interface INavigationCardsProps {
    name: string
}

export function NavigationCard(props: INavigationCardsProps) {

    let image
    let bread = false
    if (props.name === 'Pães') {
        bread = true;
        bread ? image = <Bread color='#e0e0e0' /> : image = <Bread />
    } else if (props.name === 'Biscoitos') {
        image = <Cook />
    } else if (props.name === 'Sopas') {
        image = <Noodles />
    } else {
        image = <Pizza />
    }


    return (
        <Link to="#" className={classNames('w-[136px] h-[100px] flex flex-col items-center justify-center gap-2 border-l border-gray-300 hover:bg-red-100', {
            'bg-red-500': bread,
            'text-gray-200': bread,
        })}>
            {image}
            <span>{props.name}</span>
        </Link>
    )
}