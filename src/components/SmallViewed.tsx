import { RecipesOfTheWeekCard } from "./SmallViewedCard";

export function RecipesOfTheWeek() {
    return (
        <div className="flex flex-col gap-6">
            <div className="max-w-2xl flex flex-wrap gap-6">
                <RecipesOfTheWeekCard />
                <RecipesOfTheWeekCard />
                <RecipesOfTheWeekCard />
                <RecipesOfTheWeekCard />
            </div>
        </div>
    )
}