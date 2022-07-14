import Link from 'next/link'

const Header = () => {
    return (
        <div className='sticky top-0 z-50 bg-gray-50 bg-opacity-90 dark:bg-oxford font-Source drop-shadow-2xl dark:shadow-sun-50 shadow-midnight'>
            <nav className='mx-auto max-w-4xl h-16 flex justify-end items-center text-gray-200'>
                <ol className='list-[decimal-leading-zero] text-sm list-inside flex justify-evenly space-x-12 marker:text-sun-500 marker:font-Source marker:text-sm marker:tracking-tighter'>
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
                <button className='ml-12 px-6 py-2 text-sun border border-sun rounded bg-[#fff] bg-opacity-0 hover:bg-opacity-30 transition-all duration-300  text-sm'>
                    Say Hi!
                </button>
            </nav>
        </div>
    )
}

export default Header
