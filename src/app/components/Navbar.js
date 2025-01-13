'use client'
import Link from 'next/link'
import { useTheme } from 'next-themes'

const Mnavbar = () => {
    const { theme, setTheme } = useTheme()
    const handleToggle = (e) => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    //coderpen
    //devspen
    const navtt = () => {
        console.log("clicked")
        var nav = document.getElementById('navItems')
        if (window.innerWidth < 1023) {
            // nav.classList.toggle('hidden')
            nav.classList.toggle('-translate-x-full')

        }
    }
    return (
        <>

            <nav className='bg-slate-900  w-full sticky top-0 z-10 h-16 flex place-content-between drop-shadow-lg border-b-[1px] border-slate-800 '>

                <Link href={'/'}><label htmlFor='check' className='text-slate-100 text-3xl leading-[60px] pl-6 md:pl-12 tracking-wide cursor-pointer'>TutorialsByte</label></Link>

                <ul id='navItems' className=' bg-slate-900  ulList  absolute w-[100%] top-16 md:top-0 md:relative md:w-fit text-white text-xsm  md:flex md:mt-3  space-x-4 mr-20 uppercase text-center pb-8 sm:pb-0 transform -translate-x-full md:-translate-x-0 transition-transform duration-300 ' >
                    <Link href={'/'}> <li onClick={navtt} className='links'>Home</li> </Link>
                    <Link href={'/blog'}> <li onClick={navtt} className='links'>Blog</li> </Link>
                    <Link href={'/about'}> <li onClick={navtt} className='links'>About</li> </Link>
                    <Link href={''}> <li onClick={navtt} className='links'>Service</li> </Link>
                </ul>

                <div className='flex flex-row -mt-2'>

                    <button name='mode' onClick={handleToggle} className='mr-2'>
                        <svg
                            width="40"
                            height="40"
                            viewBox="-6 -6 36 36"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className=" -mb-3 stroke-cyan-500 fill-cyan-100 group-hover:stroke-cyan-600 dark:stroke-gray-400 dark:fill-gray-400/20 dark:group-hover:stroke-gray-300"
                        >
                            <g className="dark:opacity-0">
                                <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                                <path d="M12 4v.01M17.66 6.345l-.007.007M20.005 12.005h-.01M17.66 17.665l-.007-.007M12 20.01V20M6.34 17.665l.007-.007M3.995 12.005h.01M6.34 6.344l.007.007" fill="none"></path>
                            </g>
                            <g className="opacity-0 dark:opacity-100">
                                <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"></path>
                                <path d="M12 3v1M18.66 5.345l-.828.828M21.005 12.005h-1M18.66 18.665l-.828-.828M12 21.01V20M5.34 18.666l.835-.836M2.995 12.005h1.01M5.34 5.344l.835.836" fill="none"></path>
                            </g>
                        </svg>
                    </button>
                    <button name='hamburger' onClick={() => navtt()} className='  mt-4 mr-4 cursor-pointer md:hidden text-slate-400'>
                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Mnavbar