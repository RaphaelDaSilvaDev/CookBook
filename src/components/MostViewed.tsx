import { MainCard } from "./MainCard";

export function MostViewed() {
    return (
        <div className="flex flex-col pt-9 gap-6">
            <strong className="text-2xl text-red-500 uppercase">
                Receitas mais vistas
            </strong>
            <div className="flex flex-wrap gap-6">
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
            </div>
        </div>
    )
}