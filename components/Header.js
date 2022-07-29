import Link from 'next/link'

const Header = () => {
    const nav = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Portfolio', path: '/portfolio' },
        { label: 'Blog', path: '/blog' },
    ]
    return (
        <main className='max-w-xl lg:max-w-5xl mx-auto px-12'>
            <div className='sticky px-24 top-0 z-50 bg-gray-50 dark:bg-oxford font-Source '>
                <nav className='mx-auto h-24 flex justify-end items-center text-oxford dark:text-gray-200'>
                    <ol className='list-[decimal-leading-zero] text-sm list-inside flex justify-evenly space-x-12 marker:text-sun-500 marker:font-Source marker:text-sm marker:tracking-tighter'>
                        {nav.map((nav) => (
                            <Link key={nav.label} href={nav.path}>
                                <a>
                                    <li className='hover:text-sun transition-all duration-200 ease-in-out'>
                                        {nav.label}
                                    </li>
                                </a>
                            </Link>
                        ))}
                    </ol>
                    <button className='ml-12 px-6 py-2 text-sun border border-sun rounded bg-gray-200 bg-opacity-0 hover:bg-opacity-30 dark:bg-sun-700 dark:bg-opacity-20 dark:hover:bg-opacity-50 transition-all duration-300  text-sm'>
                        Hi(re me)!
                    </button>
                </nav>
            </div>
        </main>
    )
}

export default Header
