import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Header = () => {
    const nav = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Portfolio', path: '/#portfolio' },
        { label: 'Blog', path: '/blog' },
    ]

    const [menuOpen, setMenuOpen] = useState(false)

    const mobileMenuHandler = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className='font-Source sticky top-0 z-50 bg-oxford bg-opacity-70 backdrop-filter backdrop-blur'>
            <nav className='hidden lg:flex flex-row justify-end items-center max-w-full px-12 py-4'>
                <ol className='text-sm flex justify-evenly space-x-8 pr-8'>
                    {nav.map((nav) => (
                        <Link key={nav.path} href={nav.path}>
                            <a>
                                <li className='hover:text-sun duration-300 ease-in-out font-bold'>
                                    {nav.label}
                                </li>
                            </a>
                        </Link>
                    ))}
                </ol>
                <Link href='/#sayhi'>
                    <a>
                        <button className='ml-4 px-6 py-2 text-sun border border-sun rounded bg-sun-700 bg-opacity-20 hover:bg-opacity-50 transition-all duration-300 text-sm'>
                            Say hi!
                        </button>
                    </a>
                </Link>
            </nav>
            <div
                className='flex justify-end lg:hidden transition-all duration-300 ease-in p-4 cursor-pointer z-50 fixed top-0 right-0'
                onClick={mobileMenuHandler}
            >
                {menuOpen ? (
                    <AiOutlineClose size={30} className='text-oxford' />
                ) : (
                    <AiOutlineMenu size={30} />
                )}
            </div>
            <nav
                className={
                    menuOpen
                        ? 'lg:hidden fixed top-0 right-0 w-full min-h-screen z-30 bg-sun flex flex-col justify-center items-center space-y-12 text-center text-oxford text-2xl font-bold font-Roboto duration-500'
                        : // ? 'lg:hidden fixed left-0 transition-all z-30 h-screen w-screen flex justify-center items-center flex-col space-y-8 font-Source text-2xl text-center bg-oxford duration-300 ease-out'
                          'fixed right-full top-0 w-full min-h-screen z-30 bg-sun flex flex-col justify-center items-center space-y-12 text-center text-oxford text-2xl font-bold font-Roboto duration-500'
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
                <Link href='/#sayhi'>
                    <a>
                        <button
                            onClick={mobileMenuHandler}
                            className=' px-6 py-2 text-oxford border border-1 active:border-double border-oxford rounded bg-sun-400 hover:bg-opacity-50 transition-all duration-300 text-sm'
                        >
                            Say hi!
                        </button>
                    </a>
                </Link>
            </nav>
        </div>
    )
}

export default Header
