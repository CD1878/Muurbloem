import type {Metadata} from 'next';
import { Montserrat, Caveat } from 'next/font/google';
import './globals.css'; // Global styles

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
});

export const metadata: Metadata = {
  title: 'MISHMISH',
  description: 'WINE BAR & DJ SET',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${caveat.variable}`}>
      <body className="font-sans bg-black text-white antialiased selection:bg-white selection:text-black" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
