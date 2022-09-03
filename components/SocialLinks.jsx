import { githubIcon, linkedinIcon, twitterIcon, instagramIcon } from './Svgs'

const SocialLinks = () => {
    return (
        <main className='fixed lg:sticky w-full lg:w-12 bottom-0 lg:pl-24 lg:h-full bg-oxford lg:bg-transparent z-50'>
            <section className='flex lg:flex-col justify-evenly lg:justify-center items-center space-x-2 lg:space-y-6'>
                <div className=''>
                    <a href='https://github.com/musapunhan'>
                        <div>{githubIcon}</div>
                        {/* <div className='w-[3px]  transition-all h-[1.5px] my-2 bg-sun-500'></div> */}
                    </a>
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/punhan/'>
                        <div>{linkedinIcon}</div>
                    </a>
                </div>
                <div>
                    <a href='https://twitter.com/neodarwishism/'>
                        <div>{twitterIcon}</div>
                    </a>
                </div>
                <div>
                    <a href='https://instagram.com/neodarwishism/'>
                        <div>{instagramIcon}</div>
                    </a>
                </div>
                <div className='w-[1px] h-16 lg:h-48 bg-sun-500'></div>
            </section>
        </main>
    )
}

export default SocialLinks
