import Image from 'next/image'
import React from 'react'

const CardTest = () => {
    const dateToday = () => new Date()

    return (
        <div className='bg-gray w-[550px] h-[600px] flex flex-col items-center'>
            <div className='bg-blue my-5 mx-auto w-[520px] flex flex-col justify-start items-start'>
                <Image
                    className='p-4'
                    width={240}
                    height={240}
                    alt='card image'
                    src='https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2050&q=80'
                />
            </div>
            <h1 className='font-bold text-xl p-6 text-blue-900 mx-auto'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                quis?
            </h1>
            <div className='flex justify-between text-gray-900 px-6'>
                <div>Lorem, ipsum.</div>
                <div>Lorem, ipsum dolor.</div>
            </div>
        </div>
    )
}

export default CardTest
