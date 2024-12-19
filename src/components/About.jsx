import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen w-screen'>
      <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
        <h2 className='font-general text-sm uppercase md:text-[10px]'>
            welcome to zentry
        </h2>
        <div className='mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]'>
            discover the world's largest shared adventure
        </div>
        <div className='about-subtext'>
            <p>
                the game of games begins-your life, now an epic MMORPG
            </p>
            <p>
                Zentry Unites every player from countless games and platforms
            </p>
        </div>
        <div className='h-dvh w-screen' id='clip'>
            <div className='mask-clip-path about-image'>
                <img 
                src="img/about.webp" 
                alt="background" 
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
36