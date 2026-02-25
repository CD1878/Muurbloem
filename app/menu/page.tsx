import Image from 'next/image';
import Link from 'next/link';

export default function Menu() {
    return (
        <main className="relative w-full min-h-screen bg-black text-white p-[15px] pt-[80px] md:pt-[100px]">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 flex flex-col md:flex-row justify-between items-start md:items-center p-[15px] pointer-events-none h-[180px] md:h-[70px] bg-black">
                <div className="w-[173px] md:w-[307px] h-[42px] pointer-events-auto relative">
                    <Link href="/#home" className="block w-full h-full">
                        <Image
                            src="/images/cafe+muurbloem+amsterdam+logo.webp"
                            alt="Café De Muurbloem Logo"
                            fill
                            className="object-contain object-left"
                            style={{ filter: 'brightness(0) invert(1)' }}
                            priority
                        />
                    </Link>
                </div>
                <nav className="flex flex-col md:flex-row items-end md:items-center justify-end gap-[8px] md:gap-[33px] pointer-events-auto mt-4 md:mt-0 w-full md:w-auto absolute md:relative right-[15px] md:right-auto top-[50px] md:top-auto">
                    <Link href="/menu" className="text-[12px] font-bold tracking-widest hover:font-caveat hover:text-[22px] hover:font-normal hover:tracking-normal hover:text-white transition-all uppercase">Menu</Link>
                    <Link href="/#fotos" className="text-[12px] font-bold tracking-widest hover:font-caveat hover:text-[22px] hover:font-normal hover:tracking-normal hover:text-white transition-all uppercase">Foto's</Link>
                    <Link href="/#afhuren" className="text-[12px] font-bold tracking-widest hover:font-caveat hover:text-[22px] hover:font-normal hover:tracking-normal hover:text-white transition-all uppercase">Locatie afhuren</Link>
                    <Link href="/#jobs" className="text-[12px] font-bold tracking-widest hover:font-caveat hover:text-[22px] hover:font-normal hover:tracking-normal hover:text-white transition-all uppercase">Jobs</Link>
                    <Link href="/#live" className="text-[12px] font-bold tracking-widest hover:font-caveat hover:text-[22px] hover:font-normal hover:tracking-normal hover:text-white transition-all uppercase">Live Muziek</Link>
                    <Link href="/#contact" className="text-[12px] font-bold tracking-widest hover:font-caveat hover:text-[22px] hover:font-normal hover:tracking-normal hover:text-white transition-all uppercase">Contact</Link>
                </nav>
            </header>

            <div className="max-w-4xl mx-auto mt-12 pb-24">
                <h1 className="text-[34px] md:text-[52px] font-bold leading-none mb-12 uppercase">Menu</h1>

                {/* Cocktails Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-caveat text-[#09f] mb-6 border-b border-white/20 pb-2">Cocktails</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-bold">Negroni - 11</h3>
                            <p className="text-sm text-gray-400">Tanqueray gin - Campari - Antica Formula</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Martini - 12,5</h3>
                            <p className="text-sm text-gray-400">Tanqueray gin - Noilly Prat - Lemon twist or olive brine</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Margarita - 12</h3>
                            <p className="text-sm text-gray-400">Don Julio blanco - Cointreau - Lime</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Paloma - 13</h3>
                            <p className="text-sm text-gray-400">Don Julio blanco - Fever Tree pink grapefruit - Lime</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Cosmopolitan - 13</h3>
                            <p className="text-sm text-gray-400">Ketel 1 vodka - Cointreau - Cranberry juice</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Espresso martini - 13</h3>
                            <p className="text-sm text-gray-400">Ketel 1 vodka - Kahlua - Espresso - Simple syrup</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Choice of sour - 13</h3>
                            <p className="text-sm text-gray-400">Johnnie Walker black label - Frangelico - Averna - Adriatico</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Old fashioned - 13</h3>
                            <p className="text-sm text-gray-400">Bulleit bourbon - Bitters - Simple syrup</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Manhattan - 13</h3>
                            <p className="text-sm text-gray-400">Bulleit rye - Antica Formula - Bitters - Marachino cherry</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Lemon drop - 13</h3>
                            <p className="text-sm text-gray-400">Ketel 1 vodka - Cointreau - Lemon - Simple syrup</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Ferrari - 11</h3>
                            <p className="text-sm text-gray-400">Fernet Branca - Campari</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Ranch Water - 12</h3>
                            <p className="text-sm text-gray-400">Casamigo’s blanco - Lime - Simple syrup - Soda</p>
                        </div>
                    </div>
                    <div className="mt-8 text-center italic text-sm text-gray-400">
                        We can make (almost) everything!<br />ask the bartender
                    </div>
                </section>

                <h1 className="text-[34px] md:text-[52px] font-bold leading-none mb-12 uppercase mt-24">Wine</h1>

                {/* Bubbles Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-caveat text-[#09f] mb-6 border-b border-white/20 pb-2">Bubbles</h2>
                    <div className="flex flex-col gap-6">
                        <div>
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-1 mb-1">
                                <h3 className="font-bold">2023 Marachelle, vini Tonello, Veneto, Italië</h3>
                                <span className="text-sm font-bold whitespace-nowrap ml-4">Glas €8 · Fles €40</span>
                            </div>
                            <p className="text-sm text-gray-400">Durella, Chardonnay – Fris, citrus, lichte bubbel</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-1 mb-1">
                                <h3 className="font-bold">2024 Le Grange Tiphaine, Loire, Frankrijk</h3>
                                <span className="text-sm font-bold whitespace-nowrap ml-4"></span>
                            </div>
                            <p className="text-sm text-gray-400">Cabernet franc, Côt, Gamay, Grolleau – Framboos, rood fruit, zwembad wijn</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-1 mb-1">
                                <h3 className="font-bold">NV LeLarge Pugeot, Champagne, Frankrijk</h3>
                                <span className="text-sm font-bold whitespace-nowrap ml-4">Fles €75</span>
                            </div>
                            <p className="text-sm text-gray-400">Pinot Meunier, Pinot noir, Chardonnay – Zacht, rijp en romig</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-1 mb-1">
                                <h3 className="font-bold">NV Chavost, Champagne, Frankrijk</h3>
                                <span className="text-sm font-bold whitespace-nowrap ml-4">Fles €80</span>
                            </div>
                            <p className="text-sm text-gray-400">Chardonnay – Geel fruit, geroosterd brood, mineraal</p>
                        </div>
                    </div>
                </section>

                {/* White Wine Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-caveat text-[#09f] mb-6 border-b border-white/20 pb-2">White</h2>
                    <div className="flex flex-col gap-6">
                        <div>
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-1 mb-1">
                                <h3 className="font-bold">2024 Clos Rocailleux, Sud-Ouest, Frankrijk</h3>
                                <span className="text-sm font-bold whitespace-nowrap ml-4">Glas €6 · Fles €32</span>
                            </div>
                            <p className="text-sm text-gray-400">Loin de l’oeil, Mauzac, Muscadelle – Fris, doordrinkbaar en licht</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-1 mb-1">
                                <h3 className="font-bold">2023 Tobias branco, Quinta da Pellada, Dão DOC, Portugal</h3>
                                <span className="text-sm font-bold whitespace-nowrap ml-4">Glas €7 · Fles €35</span>
                            </div>
                            <p className="text-sm text-gray-400">Cerceal – Rond, mineraal, bloemig</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-1 mb-1">
                                <h3 className="font-bold">2023 Gran Cerdo, Rioja, Spanje</h3>
                                <span className="text-sm font-bold whitespace-nowrap ml-4">Fles €40</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-1 mb-1">
                                <h3 className="font-bold">2022 Yoann Gillot, Loire, Frankrijk</h3>
                                <span className="text-sm font-bold whitespace-nowrap ml-4">Fles €42</span>
                            </div>
                            <p className="text-sm text-gray-400">Melon de Bourgogne – Witte perzik, abrikoos en vol</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-1 mb-1">
                                <h3 className="font-bold">2024 Mas d’Intras, Ardèche, Frankrijk</h3>
                                <span className="text-sm font-bold whitespace-nowrap ml-4">Fles €42</span>
                            </div>
                            <p className="text-sm text-gray-400">Chardonnay – Licht boterig</p>
                        </div>
                        {/* Keeping it shorter for illustration, but normally the rest of the list goes here */}
                        <div>
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-1 mb-1">
                                <h3 className="font-bold">2022 Clos du Tue Bœuf, Loire, Frankrijk</h3>
                                <span className="text-sm font-bold whitespace-nowrap ml-4">Fles €42</span>
                            </div>
                            <p className="text-sm text-gray-400">Sauvignon blanc, Menu pineau – Rond, bloemen, honing</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-1 mb-1">
                                <h3 className="font-bold">2023 Glow Glow, Nahe, Duitsland</h3>
                                <span className="text-sm font-bold whitespace-nowrap ml-4">Fles €42</span>
                            </div>
                            <p className="text-sm text-gray-400">Riesling – Funky, citroen en strak fris</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-1 mb-1">
                                <h3 className="font-bold">2019 Mont-Ferrant, Catalonië, Spanje</h3>
                                <span className="text-sm font-bold whitespace-nowrap ml-4">Fles €44</span>
                            </div>
                            <p className="text-sm text-gray-400">Verdejo – Wit fruit, bloemig, fijne zuren</p>
                        </div>
                    </div>
                </section>

                {/* Orange Wine Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-caveat text-[#09f] mb-6 border-b border-white/20 pb-2">Oranje</h2>
                    <div className="flex flex-col gap-6">
                        <div>
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-1 mb-1">
                                <h3 className="font-bold">De Muurbloem, ….., Hongarije</h3>
                                <span className="text-sm font-bold whitespace-nowrap ml-4">Glas €7 · Fles €40</span>
                            </div>
                            <p className="text-sm text-gray-400">Sauvignon Blanc – Bloemig</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-1 mb-1">
                                <h3 className="font-bold">2024 Citizin wine, La Mancha, Spanje</h3>
                                <span className="text-sm font-bold whitespace-nowrap ml-4">Glas €8 · Fles €40</span>
                            </div>
                            <p className="text-sm text-gray-400">Verdejo – Sinaasappel, rond en aromatisch</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-1 mb-1">
                                <h3 className="font-bold">2024 Meinklang, Burgenland, Oostenrijk</h3>
                                <span className="text-sm font-bold whitespace-nowrap ml-4">Fles €42</span>
                            </div>
                            <p className="text-sm text-gray-400">Gewurztraminer, Pinot gris – Mango, funky en vrolijk</p>
                        </div>
                    </div>
                </section>

                {/* Red Wine Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-caveat text-[#09f] mb-6 border-b border-white/20 pb-2">Red</h2>
                    <div className="flex flex-col gap-6">
                        <div>
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-1 mb-1">
                                <h3 className="font-bold">2024 Calvez Bobinet, Loire, Frankrijk</h3>
                                <span className="text-sm font-bold whitespace-nowrap ml-4">Glas €7 · Fles €38</span>
                            </div>
                            <p className="text-sm text-gray-400">Cabernet franc, Grolleau – Vegetaal, zwart fruit</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-1 mb-1">
                                <h3 className="font-bold">2023 Domaine Valery Renedaut, Loire, Frankrijk</h3>
                                <span className="text-sm font-bold whitespace-nowrap ml-4">Glas €8 · Fles €40</span>
                            </div>
                            <p className="text-sm text-gray-400">Pinot noir – Framboos, zwarte bes en mooie zuren</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-1 mb-1">
                                <h3 className="font-bold">2022 Domaine de Dauliac, Cahôrs, Frankrijk</h3>
                                <span className="text-sm font-bold whitespace-nowrap ml-4">Fles €40</span>
                            </div>
                            <p className="text-sm text-gray-400">Malbec – Fruitig met zachte tannines</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-1 mb-1">
                                <h3 className="font-bold">2023 Calvez Bobinet, Loire, Frankrijk</h3>
                                <span className="text-sm font-bold whitespace-nowrap ml-4">Fles €44</span>
                            </div>
                            <p className="text-sm text-gray-400">Grolleau, Pineau d’Aunis – Funky, licht en sappig</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-1 mb-1">
                                <h3 className="font-bold">2023 Claus Preisinger, Burgenland, Oostenrijk</h3>
                                <span className="text-sm font-bold whitespace-nowrap ml-4"></span>
                            </div>
                            <p className="text-sm text-gray-400">Zweigelt, Pinot Noir, Sankt Laurent – Fruitig, opwekkend, licht kruidig</p>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
