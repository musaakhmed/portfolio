import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

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
        console.log(menuOpen)
    }

    return (
        <div className='font-Source '>
            <nav className='hidden lg:flex flex-row justify-end items-center max-w-full px-12 py-4'>
                <ol className='list-[decimal-leading-zero] text-sm list-inside flex justify-evenly space-x-6 marker:text-sun-500 marker:font-Source marker:text-sm marker:tracking-tighter'>
                    {nav.map((nav) => (
                        <Link key={nav.label} href={nav.path}>
                            <a>
                                <li>{nav.label}</li>
                            </a>
                        </Link>
                    ))}
                </ol>
                <button className='ml-4 px-6 py-2 text-sun border border-sun rounded bg-sun-700 bg-opacity-20 hover:bg-opacity-50 transition-all duration-300 text-sm'>
                    Hi(re me)!
                </button>
            </nav>
            <div className='block lg:hidden' onClick={mobileMenuHandler}>
                <AiOutlineMenu />
            </div>
            <nav className='lg:hidden flex flex-col font-Source text-3xl'>
                <ol>
                    {nav.map((nav) => (
                        <Link key={nav.label} href={nav.path}>
                            <a>
                                <li onClick={mobileMenuHandler}>{nav.label}</li>
                            </a>
                        </Link>
                    ))}
                </ol>
                <button onClick={mobileMenuHandler}>Hi(re me)!</button>
            </nav>
        </div>
    )
}

export default Header
