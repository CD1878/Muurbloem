import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col md:flex-row justify-between items-start md:items-center p-[15px] pointer-events-none h-[180px] md:h-[70px]">
        <div className="w-[173px] md:w-[307px] h-[42px] pointer-events-auto relative">
          <Link href="#home" className="block w-full h-full">
            <Image
              src="https://framerusercontent.com/images/WJzgTw63YTwaMFWUa70U4cPBXXI.png"
              alt="MISHMISH"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
        </div>
        <nav className="flex flex-col md:flex-row items-end md:items-center justify-end gap-[8px] md:gap-[33px] pointer-events-auto mt-4 md:mt-0 w-full md:w-auto absolute md:relative right-[15px] md:right-auto top-[50px] md:top-auto">
          <Link href="#home" className="text-[12px] font-bold tracking-widest hover:text-[#09f] hover:underline transition-colors">HOME</Link>
          <Link href="#reservations" className="text-[12px] font-bold tracking-widest hover:text-[#09f] hover:underline transition-colors">PRIVATIZATIONS</Link>
          <Link href="#live" className="text-[12px] font-bold tracking-widest hover:text-[#09f] hover:underline transition-colors">LIVE</Link>
          <Link href="#about" className="text-[12px] font-bold tracking-widest hover:text-[#09f] hover:underline transition-colors">ABOUT</Link>
          <Link href="#shop" className="text-[12px] font-bold tracking-widest hover:text-[#09f] hover:underline transition-colors">SHOP</Link>
        </nav>
      </header>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 flex flex-row justify-between items-end p-[15px] pointer-events-none h-[100px]">
        <div className="text-[12px] font-bold pointer-events-auto flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-1 w-[142px] md:w-auto leading-tight">
          <div><span className="font-caveat text-[16px] font-normal">3</span> RUE DE LA FIDÉLITÉ,</div>
          <div><span className="font-caveat text-[16px] font-normal">75010</span> PARIS</div>
        </div>
        <div className="pointer-events-auto w-[68px] md:w-auto text-center md:text-left">
          <a href="https://www.instagram.com/mishmish_paris/" target="_blank" rel="noopener noreferrer" className="text-[12px] font-bold hover:text-[#09f] hover:underline transition-colors">INSTAGRAM</a>
        </div>
        <div className="w-[26%] md:w-[139px] h-[42px] pointer-events-auto relative">
          <Image
            src="https://framerusercontent.com/images/angmbvU41hZN7d5z5TGYlUI.svg"
            alt="Graphic"
            fill
            className="object-contain object-right"
          />
        </div>
      </footer>

      {/* Sections */}
      <section id="home" className="h-screen w-full relative overflow-hidden">
        <Image src="https://framerusercontent.com/images/WsA8eeLJwR1fUlenWg4HZFr25s.jpg" alt="Home Background" fill className="object-cover" style={{ objectPosition: '47.8% 75.3%' }} priority />
        <div className="absolute bottom-[240px] md:bottom-[373px] right-[15px] text-right text-[12px] font-bold z-10">
          FROM <span className="font-caveat text-[16px] font-normal">6</span> PM TO <span className="font-caveat text-[16px] font-normal">2</span> AM<br/>EVERY DAY
        </div>
        <div className="absolute bottom-[290px] left-[15px] font-bold z-10">
          <div className="text-[34px] md:text-[52px] leading-[0.9]">WINE BAR AND DJ SET</div>
          <div className="font-caveat text-[34px] md:text-[52px] font-normal leading-[0.9]">IN PARIS</div>
        </div>
      </section>

      <section id="reservations" className="h-screen w-full relative overflow-hidden">
        <Image src="https://framerusercontent.com/images/mCqUg8nowP71qNJMDYeUtFHEJU4.jpg" alt="Privatizations" fill className="object-cover" style={{ objectPosition: 'center bottom' }} />
        <div className="absolute bottom-[260px] md:bottom-[401px] right-[15px] z-10">
          <a href="https://www.privateaser.com/lieu/54924-mishmish" target="_blank" rel="noopener noreferrer" className="text-[12px] font-bold hover:text-[#09f] hover:underline transition-colors">BOOK HERE</a>
        </div>
        <div className="absolute bottom-[352px] left-[15px] z-10">
          <h2 className="text-[34px] md:text-[52px] font-bold leading-none">PRIVATIZATIONS</h2>
        </div>
      </section>

      <section id="live" className="h-screen w-full relative overflow-hidden bg-black">
        <video src="https://framerusercontent.com/assets/iF4e9VbQnnuD6E8vBw3z2smGJbU.mp4" autoPlay loop muted playsInline poster="https://framerusercontent.com/images/Z8j5fWfxHimlRxnZlsmkufWwAM.jpg" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute bottom-[353px] left-[15px] z-10">
          <h2 className="text-[34px] md:text-[52px] font-bold leading-none">LIVE</h2>
        </div>
        <div className="absolute bottom-[274px] md:bottom-[393px] right-[15px] z-10">
          <span className="text-[12px] font-bold">COMING SOON</span>
        </div>
      </section>

      <section id="about" className="h-screen w-full relative overflow-hidden bg-black">
        <div className="absolute bottom-[353px] left-[15px] z-10">
          <h2 className="text-[34px] md:text-[52px] font-bold leading-none">ABOUT</h2>
        </div>
        
        <div className="absolute bottom-[235px] md:bottom-[189px] right-[15px] flex flex-col md:flex-row items-end justify-end gap-[15px] w-[calc(100%-30px)] md:w-[1170px] max-w-full z-10">
          <div className="flex flex-col items-end justify-end gap-[27px] flex-1 max-w-[384px] hidden md:flex">
            <a href="mailto:contact@mishmish.fr" className="text-[12px] hover:text-[#09f] hover:underline transition-colors uppercase font-normal">CONTACT@MISHMISH.FR</a>
            <p className="text-[12px] text-right font-normal">
              Chez MISHMISH, nous vous accueillons aussi pour vos événements privés. Que ce soit un anniversaire, un afterwork, une fête entre amis ou une soirée sur-mesure, nous mettons tout en place pour vous faire passer un moment inoubliable. Vin naturel, pizzas maison, DJs aux platines et toute autre envie particulière : notre équipe est prête à vous accompagner et à personnaliser votre soirée selon vos souhaits.
            </p>
          </div>
          <div className="w-full md:w-[364px] h-[267px] md:h-[421px] flex-shrink-0 relative">
            <Image src="https://framerusercontent.com/images/brBxuYEusLy9i6vqvB9YrIW5g.jpg" alt="About" fill className="object-cover" />
          </div>
        </div>

        {/* Mobile About Text */}
        <div className="md:hidden absolute bottom-[143px] right-0 w-[98%] px-[15px] flex flex-col items-end gap-[10px] z-10">
          <a href="mailto:contact@mishmish.fr" className="text-[12px] hover:text-[#09f] hover:underline transition-colors uppercase font-normal">CONTACT@MISHMISH.FR</a>
          <p className="text-[12px] text-right font-normal max-w-[352px]">
            Chez MISHMISH, nous vous accueillons aussi pour vos événements privés. Que ce soit un anniversaire, un afterwork, une fête entre amis ou une soirée sur-mesure, nous mettons tout en place pour vous faire passer un moment inoubliable. Vin naturel, pizzas maison, DJs aux platines et toute autre envie particulière : notre équipe est prête à vous accompagner et à personnaliser votre soirée selon vos souhaits.
          </p>
        </div>
      </section>

      <section id="shop" className="h-screen w-full relative overflow-hidden">
        <Image src="https://framerusercontent.com/images/l0YgxQPlFV1gnqayWQLJlqKW9I.jpg" alt="Shop" fill className="object-cover" style={{ objectPosition: '47% 64.5%' }} />
        <div className="absolute bottom-[353px] left-[15px] z-10">
          <h2 className="text-[34px] md:text-[52px] font-bold leading-none">SHOP</h2>
        </div>
        <div className="absolute bottom-[274px] md:bottom-[393px] right-[15px] z-10">
          <span className="text-[12px] font-bold">COMING SOON</span>
        </div>
      </section>
    </main>
  );
}
