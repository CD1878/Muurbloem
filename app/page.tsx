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
          <Link href="#menu" className="text-[12px] font-bold tracking-widest hover:font-caveat hover:text-[22px] hover:font-normal hover:tracking-normal hover:text-white transition-all uppercase">Menu</Link>
          <Link href="#fotos" className="text-[12px] font-bold tracking-widest hover:font-caveat hover:text-[22px] hover:font-normal hover:tracking-normal hover:text-white transition-all uppercase">Foto's</Link>
          <Link href="#afhuren" className="text-[12px] font-bold tracking-widest hover:font-caveat hover:text-[22px] hover:font-normal hover:tracking-normal hover:text-white transition-all uppercase">Locatie afhuren</Link>
          <Link href="#jobs" className="text-[12px] font-bold tracking-widest hover:font-caveat hover:text-[22px] hover:font-normal hover:tracking-normal hover:text-white transition-all uppercase">Jobs</Link>
          <Link href="#live" className="text-[12px] font-bold tracking-widest hover:font-caveat hover:text-[22px] hover:font-normal hover:tracking-normal hover:text-white transition-all uppercase">Live Muziek</Link>
          <Link href="#contact" className="text-[12px] font-bold tracking-widest hover:font-caveat hover:text-[22px] hover:font-normal hover:tracking-normal hover:text-white transition-all uppercase">Contact</Link>
        </nav>
      </header>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 flex flex-row justify-between items-end p-[15px] pointer-events-none h-[100px]">
        <div className="text-[12px] font-bold pointer-events-auto flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-1 w-[142px] md:w-auto leading-tight">
          <div><span className="font-caveat text-[16px] font-normal">Bloemgracht 170</span>,</div>
          <div><span className="font-caveat text-[16px] font-normal">1015 TV</span> Amsterdam</div>
        </div>
        <div className="pointer-events-auto w-[68px] md:w-auto text-center md:text-left mx-auto md:mx-0">
          <a href="https://www.instagram.com/cafedemuurbloem/" target="_blank" rel="noopener noreferrer" className="text-[12px] font-bold hover:text-[#09f] hover:underline transition-colors">@CAFEDEMUURBLOEM</a>
        </div>
        <div className="w-[26%] md:w-[139px] h-[42px] pointer-events-auto relative">
          <Image
            src="/images/cafe+muurbloem+amsterdam+logo.webp"
            alt="Café De Muurbloem Logo Footer"
            fill
            className="object-contain object-right"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>
      </footer>

      {/* Sections */}
      <section id="home" className="h-screen w-full relative overflow-hidden">
        <Image src="/images/DSCF3617.JPG.jpeg" alt="Home Background" fill className="object-cover" style={{ objectPosition: '47.8% 75.3%' }} priority />
        <div className="absolute inset-0 bg-red-700/60 mix-blend-multiply z-[5]"></div>
        <div className="absolute inset-0 bg-red-900/40 z-[5]"></div>
        <div className="absolute bottom-[130px] md:bottom-[373px] right-[15px] text-right text-[12px] md:text-[12px] text-[10px] sm:text-[12px] font-bold z-10">
          MAANDAG - WOENSDAG: <span className="font-caveat md:text-[16px] text-[14px] font-normal">17:00</span> - <span className="font-caveat md:text-[16px] text-[14px] font-normal">01:00</span><br />
          DONDERDAG: <span className="font-caveat md:text-[16px] text-[14px] font-normal">17:00</span> - <span className="font-caveat md:text-[16px] text-[14px] font-normal">02:00</span><br />
          VRIJDAG - ZATERDAG: <span className="font-caveat md:text-[16px] text-[14px] font-normal">17:00</span> - <span className="font-caveat md:text-[16px] text-[14px] font-normal">03:00</span>
        </div>
        <div className="absolute bottom-[220px] md:bottom-[290px] left-[15px] font-bold z-10">
          <div className="text-[34px] md:text-[52px] leading-[0.9]">CAFÉ DE MUURBLOEM</div>
          <div className="font-caveat text-[34px] md:text-[52px] font-normal leading-[0.9]">IN AMSTERDAM</div>
        </div>
      </section>

      <section id="afhuren" className="h-screen w-full relative overflow-hidden">
        <Image src="/images/DSCF3639.JPG.jpeg" alt="Locatie Afhuren" fill className="object-cover grayscale" style={{ objectPosition: 'center 60%' }} />
        <div className="absolute inset-0 bg-red-900/40 mix-blend-multiply z-[5]"></div>
        <div className="absolute inset-0 bg-black/30 z-[5]"></div>
        <div className="absolute bottom-[150px] md:bottom-[401px] right-[15px] z-10">
          <a href="#" className="text-[12px] font-bold hover:text-[#09f] hover:underline transition-colors uppercase">Klik hier voor de opties</a>
        </div>
        <div className="absolute bottom-[200px] md:bottom-[352px] left-[15px] z-10">
          <h2 className="text-[34px] md:text-[52px] font-bold leading-none uppercase">Iets te vieren?</h2>
          <div className="font-caveat text-[24px] md:text-[32px] mt-2">Drinks by us, Food by Dorus</div>
        </div>
      </section>

      <section id="live" className="min-h-screen md:h-screen w-full relative overflow-hidden bg-black py-[120px] md:py-0 flex flex-col justify-center md:block">
        <Image src="/images/DSCF4217.JPG.jpeg" alt="Live Muziek Background" fill className="object-cover" />
        <div className="relative md:absolute md:top-[200px] mx-[15px] md:mx-0 md:left-[50px] bg-black/60 p-4 md:p-6 md:max-h-[calc(100vh-240px)] md:overflow-y-auto md:max-w-[600px] z-10">
          <h2 className="text-[28px] md:text-[52px] font-bold leading-none mb-4 uppercase">Live Music</h2>
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Tuesdays</h3>
            <p className="font-bold mb-2">Vocal Jam Session @ Cafe de Muurbloem!</p>
            <p className="mb-2 text-sm">Tuesdays 20:00 – 23:00</p>
            <p className="text-sm mb-4">A unique jam session tailored for singers to shine with support from De Muurbloem house band. Join us for a cozy evening full of jazz, soul, latin, and more!</p>
            <p className="text-xs font-bold uppercase">Note to singers:</p>
            <p className="text-xs">If you would like to sing a non-standard tune with us, please send an email to:<br /><a href="mailto:muurbloem.music@gmail.com" className="text-[#09f] hover:underline transition-colors">muurbloem.music@gmail.com</a> with your chord chart or sheet music.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Wednesdays</h3>
            <p className="font-bold mb-2">Jazz Jam Sessions at Café De Muurbloem,</p>
            <p className="mb-2 text-sm">led by the Bruce Lim Trio.</p>
            <p className="mb-2 text-sm">Every Wednesday evening from 20:00 – 23:00.</p>
            <p className="text-sm">Many years ago, the members of the Bruce Lim Trio met at a weekly jazz jam session in this historic café, formerly known as Jazzcafé 't Geveltje. Ever since that era, they have continued playing and growing together, frequenting various sessions around Amsterdam. With fond memories of those times, the Bruce Lim Trio and Café De Muurbloem are cultivating the spiritual successor to one of the best kept secret jazz jam sessions in Amsterdam. Come join us for a night of jazz, latin, fusion, and more!</p>
          </div>
        </div>
      </section>

      <section id="jobs" className="h-screen w-full relative overflow-hidden bg-black">
        <div className="absolute bottom-[530px] md:bottom-[353px] left-[15px] z-10">
          <h2 className="text-[34px] md:text-[52px] font-bold leading-none uppercase">Jobs</h2>
        </div>

        <div className="absolute bottom-[250px] md:bottom-[189px] right-[15px] flex flex-col md:flex-row items-end justify-end gap-[15px] w-[calc(100%-30px)] md:w-[1170px] max-w-full z-10">
          <div className="flex flex-col items-end justify-end gap-[27px] flex-1 max-w-[384px] hidden md:flex">
            <a href="mailto:info@cafedemuurbloem.nl" className="text-[12px] hover:text-[#09f] hover:underline transition-colors uppercase font-normal">INFO@CAFEDEMUURBLOEM.NL</a>
            <p className="text-[12px] text-right font-normal">
              We zijn altijd op zoek naar enthousiaste collega's om ons team te versterken. Heb je affiniteit met horeca, hou je van een gezellige sfeer en ben je niet bang om de handen uit de mouwen te steken? Stuur dan je CV en motivatie naar ons e-mailadres of kom gezellig langs in de zaak.
            </p>
          </div>
          <div className="w-full md:w-[364px] h-[267px] md:h-[421px] flex-shrink-0 relative">
            <Image src="/images/DSCF3906.JPG.jpeg" alt="Jobs" fill className="object-cover" />
          </div>
        </div>

        {/* Mobile Jobs Text */}
        <div className="md:hidden absolute bottom-[120px] right-0 w-[98%] px-[15px] flex flex-col items-end gap-[10px] z-10">
          <a href="mailto:info@cafedemuurbloem.nl" className="text-[12px] hover:text-[#09f] hover:underline transition-colors uppercase font-normal">INFO@CAFEDEMUURBLOEM.NL</a>
          <p className="text-[12px] md:text-[12px] text-[11px] text-right font-normal max-w-[352px]">
            We zijn altijd op zoek naar enthousiaste collega's om ons team te versterken. Heb je affiniteit met horeca, hou je van een gezellige sfeer en ben je niet bang om de handen uit de mouwen te steken? Stuur dan je CV en motivatie naar ons e-mailadres of kom gezellig langs in de zaak.
          </p>
        </div>
      </section>

      <section id="contact" className="h-screen w-full relative overflow-hidden">
        <Image src="/images/DSCF3651.JPG.jpeg" alt="Contact" fill className="object-cover" style={{ objectPosition: '47% 64.5%' }} />
        <div className="absolute top-[200px] left-[15px] right-[15px] md:right-auto md:left-[50px] bg-black/60 p-4 md:p-6 max-w-[500px] z-10">
          <h2 className="text-[34px] md:text-[52px] font-bold leading-none mb-6 uppercase">Contact</h2>

          <div className="flex flex-col gap-4 mb-4">
            <p className="font-bold">
              Bloemgracht 170<br />
              1015 TV Amsterdam
            </p>
            <a href="https://maps.google.com/?q=Bloemgracht+170+1015+TV+Amsterdam" target="_blank" rel="noopener noreferrer" className="text-[#09f] hover:underline text-sm uppercase">Bekijk locatie op de kaart</a>
            <p className="font-bold mt-2">Bel ons: <a href="tel:0646227200" className="hover:text-[#09f] transition-colors">0646227200</a></p>
            <p className="font-bold mt-2">Email ons: <a href="mailto:info@cafedemuurbloem.nl" className="hover:text-[#09f] transition-colors">info@cafedemuurbloem.nl</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}
