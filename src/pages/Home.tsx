import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MostViewed } from "../components/MostViewed";
import { NavigarionItens } from "../components/NavigationItens";
import { RecipesOfTheWeek } from "../components/RecipesOfTheWeek";
import { TopUsers } from "../components/TopUsers";

export function Home() {
    return (
        <div>
            <Header />
            <div className="flex w-full bg-gray-100 top-16 items-center justify-center drop-shadow-app fixed z-[10]">
                <NavigarionItens />
            </div>
            <div className="flex flex-col items-center justify-center pt-8">
                <div className="w-full max-w-[936px] flex flex-col items-start justify-center py-2">

                    <div className="flex flex-col pt-32">
                        <MostViewed />
                    </div>

                    <div className="flex pt-9">
                        <RecipesOfTheWeek />
                        <TopUsers />
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}