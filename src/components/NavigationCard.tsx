import { Link, useParams } from "react-router-dom"
import classNames from 'classnames'

import { Bread } from "./Icons/Bread"
import { Cook } from "./Icons/Cook"
import { Noodles } from "./Icons/Noodles"
import { Pizza } from "./Icons/Pizza"

interface INavigationCardsProps {
    name: string
}

export function NavigationCard(props: INavigationCardsProps) {

    let image
    let { category } = useParams()

    let isActive = false
    if (props.name === category) {
        isActive = true
    }

    if (props.name === 'Pães') {
        isActive ? image = <Bread color='#e0e0e0' /> : image = <Bread />
    } else if (props.name === 'Biscoitos') {
        isActive ? image = <Cook color="#e0e0e0" /> : image = <Cook />
    } else if (props.name === 'Sopas') {
        isActive ? image = <Noodles color="#e0e0e0" /> : image = <Noodles />
    } else {
        isActive ? image = <Pizza color="#e0e0e0" /> : image = <Pizza />
    }


    return (
        <Link to={`/${props.name}`} className={classNames('w-[136px] h-[100px] flex flex-col items-center justify-center gap-2 border-l border-gray-300', {
            'bg-red-500': isActive,
            'text-gray-200': isActive,
            'hover:bg-gray-200': !isActive
        })}>
            {image}
            <span>{props.name}</span>
        </Link>
    )
}