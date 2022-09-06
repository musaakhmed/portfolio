import React from 'react'

const ContactForm = () => {
    return (
        <>
            <div className='mt-72 md:mt-28 mb-52 px-4 mx-auto max-w-screen-md flex flex-col justify-center items-center'>
                <h2 className='mb-4 text-4xl tracking-tight lg:font-extrabold text-center text-sun font-Source'>
                    Say hi!
                </h2>
                <p className='my-8 lg:mb-16 font-light font-Roboto text-center sm:text-xl'>
                    Want to get in touch? Drop me an email and I will get back
                    to asap.
                </p>
                <a href='mailto:musa.akhmed@pm.me'>
                    <button className='px-6 py-2 text-sun border border-sun rounded bg-sun-700 bg-opacity-20 hover:bg-opacity-50 transition-all duration-300 text-sm'>
                        Send message
                    </button>
                </a>
            </div>
        </>
    )
}

export default ContactForm
