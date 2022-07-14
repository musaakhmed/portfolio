const Hero = () => {
    return (
        <div className='h-screen w-screen flex flex-row items-center justify-center'>
            <div className=''>
                <div class='mockup-code'>
                    <pre data-prefix='$'>
                        <code>npm i daisyui</code>
                    </pre>
                    <pre data-prefix='>' class='text-warning'>
                        <code>installing...</code>
                    </pre>
                    <pre data-prefix='>' class='text-success'>
                        <code>Done!</code>
                    </pre>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Hero
