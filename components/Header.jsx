import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Header = () => {
    const nav = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Portfolio', path: '/portfolio' },
        { label: 'Blog', path: '/blog' },
        { label: 'Resumé', path: '/resume' },
    ]

    const [menuOpen, setMenuOpen] = useState(false)

    const mobileMenuHandler = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className='font-Source'>
            <nav className='hidden lg:flex flex-row justify-end items-center max-w-full px-12 py-4'>
                <ol className='list-[decimal-leading-zero] text-sm list-inside flex justify-evenly space-x-6 marker:text-sun-500 marker:font-Source marker:text-sm marker:tracking-tighter'>
                    {nav.map((nav) => (
                        <Link key={nav.path} href={nav.path}>
                            <a>
                                <li>{nav.label}</li>
                            </a>
                        </Link>
                    ))}
                </ol>
                <button className='ml-4 px-6 py-2 text-sun border border-sun rounded bg-sun-700 bg-opacity-20 hover:bg-opacity-50 transition-all duration-300 text-sm'>
                    Say hi!
                </button>
            </nav>
            <div
                className='flex justify-end lg:hidden transition-all duration-300 ease-in p-4 cursor-pointer'
                onClick={mobileMenuHandler}
            >
                {menuOpen ? (
                    <AiOutlineClose size={30} />
                ) : (
                    <AiOutlineMenu size={30} />
                )}
            </div>
            <nav
                className={
                    menuOpen
                        ? 'lg:hidden h-screen w-screen flex justify-center -mt-20 items-center flex-col space-y-8 font-Source text-2xl text-center bg-oxford duration-300 ease-in'
                        : 'hidden h-screen w-screen  justify-center items-center flex-col font-Source text-3xl text-center opacity-0 duration-300 ease-in'
                }
            >
                <ol className='flex flex-col space-y-2'>
                    {nav.map((nav) => (
                        <Link key={nav.path} href={nav.path}>
                            <a>
                                <li onClick={mobileMenuHandler}>{nav.label}</li>
                            </a>
                        </Link>
                    ))}
                </ol>
                <button
                    onClick={mobileMenuHandler}
                    className=' px-6 py-2 text-sun border border-sun rounded bg-sun-700 bg-opacity-20 hover:bg-opacity-50 transition-all duration-300 text-sm'
                >
                    Say hi!
                </button>
            </nav>
        </div>
    )
}

export default Header
