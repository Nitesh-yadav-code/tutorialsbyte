import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { Providers } from './components/Provider'
import './globals.css'
import { Inter } from 'next/font/google'
import { Mulish } from 'next/font/google';
// import "prismjs/themes/prism-twilight.css";
import "prismjs/themes/prism-tomorrow.css";
// import '../app/styles/prism.module.css'
 
const mulish = Mulish({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Tutorials Byte',
  description: 'A Coding Blog App ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} style={{ backgroundColor: 'var(--bg-color)' , color: 'var(--text-color)' }} >
        <Providers>
        <Navbar/>
        {children}
        <Footer/>
        </Providers>
        </body>
    </html>
  )
}
