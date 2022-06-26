import { Header } from "../components/Header";
import { MostViewed } from "../components/MostViewed";
import { NavigarionItens } from "../components/NavigationItens";

export function Home() {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center pt-16">
                <div className="w-full max-w-[936px] flex flex-col items-start justify-center py-2">

                    <div className="flex w-full top-16 pt-4 bg-gray-200 items-start fixed z-[9] gap-6">
                        <NavigarionItens />
                    </div>

                    <div className="flex flex-col pt-32">
                        <MostViewed />
                    </div>

                </div>
            </div>
        </div>
    )
}