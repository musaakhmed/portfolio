import Link from 'next/link'

const Header = () => {
    return (
        <div className='sticky top-0 z-50 bg-gray-50 bg-opacity-90 dark:bg-oxford font-Roboto'>
            <nav className='mx-auto max-w-4xl h-16 flex justify-end items-center text-gray-200'>
                <ol className='list-[decimal-leading-zero] text-sm list-inside flex justify-evenly space-x-12 marker:text-sun-500 marker:font-mono marker:text-sm marker:tracking-tighter'>
                    <Link href='/'>
                        <a>
                            <li className='hover:text-sun transition-all duration-200 ease-in-out'>
                                About
                            </li>
                        </a>
                    </Link>
                    <Link href='/'>
                        <a>
                            <li className='hover:text-sun transition-all duration-200 ease-in-out'>
                                Portfolio
                            </li>
                        </a>
                    </Link>
                    <Link href='/'>
                        <a>
                            <li className='hover:text-sun transition-all duration-200 ease-in-out'>
                                Blog
                            </li>
                        </a>
                    </Link>
                </ol>
                <button className='ml-12 px-6 py-2 text-sun border border-sun rounded bg-midnight bg-opacity-0 hover:bg-opacity-100 transition-all duration-100 font-light text-sm'>
                    Say Hi!
                </button>
            </nav>
        </div>
    )
}

export default Header
