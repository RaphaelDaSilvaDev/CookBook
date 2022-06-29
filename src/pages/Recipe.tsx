import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NavigarionItens } from "../components/NavigationItens";

import donutsImage from '../components/images/donuts.png'
import { Link } from "react-router-dom";
import { Heart, Timer } from "phosphor-react";
import { Ingredients } from "../components/Icons/Ingredients";
import { TrayWaiter } from "../components/Icons/TrayWaiter";

export function Recipe() {
    return (
        <div>
            <Header />

            <div className="flex w-full bg-gray-100 top-16 items-center justify-center drop-shadow-app fixed z-[10]">
                <NavigarionItens />
            </div>
            <div className="min-h-[calc(100vh-9rem)] flex flex-col items-center justify-center pt-8">
                <div className="w-full max-w-[936px] flex flex-col items-start justify-center py-2 mt-32">
                    <div className="flex w-full mt-9">
                        <div className="flex w-full h-[346px] bg-gray-100 rounded-lg drop-shadow-app">
                            <img src={donutsImage} className="w-2/3" alt="" />
                            <div className="flex flex-col w-1/3 p-2 gap-4">
                                <Link to="#" className="self-end">
                                    <Heart size={32} weight="light" />
                                </Link>
                                <div className="flex flex-col gap-2">
                                    <span className='text-gray-300'>Sobremesa</span>
                                    <strong className='text-5xl text-center font-light'>Donuts</strong>
                                    <div className='flex gap-4 items-center'>
                                        <Timer size={40} />
                                        <span>30 minutos</span>
                                    </div>
                                    <div className='flex gap-4 items-center'>
                                        <Ingredients size={40} />
                                        <span>8 Ingredientes</span>
                                    </div>
                                    <div className='flex gap-4 items-center'>
                                        <TrayWaiter />
                                        <span>12 Porções</span>
                                    </div>
                                </div>

                                <span className='self-end pt-4'>de
                                    <strong className='text-red-500'>Raphael da Silva
                                    </strong>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full gap-6 mt-6">
                        <div className="flex flex-col w-1/2 gap-6">
                            <div className="flex flex-col bg-gray-100 rounded-lg drop-shadow-app p-4 gap-4">
                                <span className="text-xl text-red-500">Ingredientes</span>
                                <div>
                                    <p>2 ovosleite (cerca de 200 ml)</p>
                                    <p>1 colher de sopa de margarina</p>
                                    <p>1/2 copo de açúcar cristal</p>
                                    <p>2 copos de farinha de trigo</p>
                                    <p>1/2 colher de sopa de fermento</p>
                                    <p>Doce de leite para rechear</p>
                                    <p>Cobertura (sugestão):</p>
                                    <p>180 g de chocolate meio amargo derretido em banho-maria</p>
                                </div>
                            </div>
                            <div className="flex flex-col bg-gray-100 rounded-lg drop-shadow-app p-4 gap-4">
                                <span className="text-xl text-red-500">Informações Adicional</span>
                                <div>
                                    <p>Outras sugestões de cobertura:
                                        Açúcar com canela, chantilly, doce de leite, geleias de frutas etc.</p>
                                    <p>Sabe outro bolinho frito que pode fazer o maior sucesso aí na sua casa? O brasileiríssimo bolinho de chuva! Confira a nossa receita de bolinho de chuva mais caprichada!</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-1/2">
                            <div className="bg-gray-100 h-fit rounded-lg drop-shadow-app flex flex-col gap-4 p-2">
                                <span className="text-xl text-red-500">Preparo</span>
                                <div>
                                    <p>Quebrar os ovos em um copo de medida e completar com o leite até a marca de 250 ml.</p>
                                    <p>   Misturar a margarina, o açúcar, a farinha e o fermento e sovar a massa.</p>
                                    <p>   Deixar em repouso por cerca de 15 minutos.</p>
                                    <p>   Abrir a massa com a ajuda de um rolo e cortar as rosquinhas usando 2 copos de tamanhos diferentes (eu usei 1 copo americano e 1 copo de cachaça).</p>
                                    <p>   Fritar as rosquinhas em óleo morno até ficarem douradinhas por fora.</p>
                                    <p>   Depois de esfriar, cortar ao meio com cuidado e rechear com doce de leite (eu fiz o doce de leite cozinhando o leite condensado na panela de pressão, fica perfeito)!</p>
                                    <p>   Cobertura:</p>
                                    <p>   Derreter o chocolate em banho-maria e mergulhar um lado das rosquinhas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}