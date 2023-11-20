import Image from 'next/image'

function About() {
    return (
        <div className='flex lg:flex-row flex-col py-16 items-center max-w-5xl min-h-screen space-y-4 justify-center mx-auto font-Roboto'>
            <div className='w-1/3 flex items-center justify-center'>
                <Image
                    className='rounded-xl hover:opacity-100 opacity-75 transition-all duration-200 ease-in'
                    src='/assets/photos/portrait.jpeg'
                    width='240px'
                    height='240px'
                    alt=''
                />
            </div>
            <section className='flex flex-col space-y-4 lg:p-4 p-2 w-2/3'>
                <h5 className='text-2xl text-sun-600 py-2'>
                    Hi, my name is Musa!
                </h5>
                <p className=''>
                    I&quot;m a self-taught front-end developer based in
                    Brussels. I have started learning HTML and later PHP and
                    MySQL back in 2005{' '}
                    <em className='text-gray-500 text-sm'>
                        (I still remember you, PHPNuke and Invision Power
                        Board!)
                    </em>
                    .
                </p>
                <p>
                    After studying Law and Political Science in Brussels, I have
                    worked in journalism, politics, high-level political event
                    management, hospitality management and international
                    education.
                </p>
                <p>
                    I later decided to return to web development in March 2020
                    by learning Javascript and transitioning to React JS and
                    Next.JS later.
                </p>
                <p>
                    I have lived in Azerbaijan, Belgium, Germany, the UK and
                    Spain.
                </p>
                <p>
                    My passions are all things tech, reading, photography (both
                    digital and analogue), travel and outdoor activities.
                </p>
                <p>
                    Here are the technologies I have been working with for the
                    last years:
                </p>
                <div className='flex flex-col font-Source text-sm text-gray-500'>
                    <ol className='list-disc marker:text-sun-600 ml-8'>
                        <li className='list-outside hover:list-inside transition duration-300 ease-in'>
                            JavaScript (ES6+)
                        </li>
                        <li className='list-outside hover:list-inside transition-all duration-150 ease-in-out'>
                            TypeScript
                        </li>
                        <li className='list-outside hover:list-inside transition-all duration-150 ease-in-out'>
                            React JS
                        </li>
                        <li className='list-outside hover:list-inside transition-all duration-150 ease-in-out'>
                            Next.JS
                        </li>
                        <li className='list-outside hover:list-inside transition-all duration-150 ease-in-out'>
                            Tailwind CSS
                        </li>
                        <li className='list-outside hover:list-inside transition-all duration-150 ease-in-out'>
                            SASS
                        </li>
                    </ol>
                </div>
            </section>
        </div>
    )
}

export default About
