const Hero = () => {
    return (
        <section className='h-screen w-screen'>
            <div className='max-w-2xl lg:max-w-6xl mx-auto flex-col flex h-full items-center justify-around'>
                <div className='hidden md:block mockup-code text-sm md:text-base bg-[#000] bg-opacity-75'>
                    <pre data-prefix='$' className='text-gray-600 font-Source'>
                        <code>Hi, my name is</code>
                    </pre>
                    <pre data-prefix='>' className='text-sun-400'>
                        <code>Musa!</code>
                    </pre>
                    <pre></pre>
                    <pre data-prefix='!' className='text-sun-600'>
                        <code>
                            I am a front-end developer based in
                            <span className='text-sun-400'> Barcelona</span>!
                        </code>
                    </pre>
                    <pre></pre>
                    <pre></pre>
                    <pre></pre>
                    <pre data-prefix='info' className='text-gray-20 px-6'>
                        <code className='px-7'>
                            I code, shoot digital and analogue photography,
                            <p className='px-20'>
                                walk long distances and occasionally write.
                            </p>
                        </code>
                    </pre>
                    <pre data-prefix='event' className='text-gray-200 px-6'>
                        <code className='px-7'>
                            I build web projects in Javascript,{' '}
                            <p className='px-20'>mainly ReactJS and Next.JS.</p>
                        </code>
                    </pre>
                </div>
                <div className='md:hidden'>
                    <div className='mockup-code bg-[#000] bg-opacity-75'>
                        <pre data-prefix='$'>
                            <code>Hi, my name is</code>
                        </pre>
                        <pre data-prefix='>' className='text-warning'>
                            <code>Musa!</code>
                        </pre>
                        <pre></pre>
                        <pre></pre>
                        <pre></pre>
                        <pre data-prefix='info' className='text-gray-200 p-4'>
                            <code className=''>
                                I code, shoot digital and
                                <p className='pl-12'>analogue photography,</p>
                                <p className='pl-12'>walk long distances</p>
                                <p className='pl-12'>and occasionally write.</p>
                            </code>
                        </pre>
                        <pre data-prefix='info' className='text-gray-200 p-4'>
                            <code className=''>
                                I build web projects
                                <p className='pl-12'>in Javascript,</p>
                                <p className='pl-12'>
                                    mainly ReactJS and Next.JS.
                                </p>
                            </code>
                        </pre>
                    </div>
                </div>
                <div className='h-1/3'>test</div>
            </div>
        </section>
    )
}

export default Hero
