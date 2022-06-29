import { MainCard } from "./MainCard";

export function MostViewed() {
    return (
        <div className="flex flex-col pt-4 gap-6">
            <div className="flex flex-wrap gap-6">
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
            </div>
        </div>
    )
}