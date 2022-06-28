import { RecipesOfTheWeekCard } from "./RecipesOfTheWeekCard";

export function RecipesOfTheWeek() {
    return (
        <div className="flex flex-col gap-6">
            <strong className="text-2xl text-red-500 uppercase">
                Receitas da semana
            </strong>

            <div className="flex flex-wrap gap-6">
                <RecipesOfTheWeekCard />
                <RecipesOfTheWeekCard />
                <RecipesOfTheWeekCard />
                <RecipesOfTheWeekCard />
            </div>
        </div>
    )
}