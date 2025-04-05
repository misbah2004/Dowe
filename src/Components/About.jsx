import React from 'react'

const About = () => {
  return (
    <div className='flex '>
      <div className='w-2xl relative'>
        <div className=''><img src="/images/aboutrobot.jpg" alt="" />
         
        </div>
        <div className='absolute top-25 ml-50 flex flex-col space-y-4'>
            <span className='text-4xl font-Exo font-bold'><h1 className='text-[#FFFFFF]'>About The <span className='bg-gradient-to-r from-[#5C00E5] to-[#59EBFD] text-transparent bg-clip-text'>DoweyAi</span></h1></span>
            <p className='text-[#FFFFFF] mt-8 ml-15 text-md'>AI and Robotics have witnessed significant <br />
             advancements in recent years, driven by <br />
             breakthroughs in machine learning, computer <br />
             vision, natural language processing, and <br />
             hardware capabilities.</p>
            <span className='text-[#FFFFFF] ml-15'>Brian Zaragoza <br />
                <span className='text-[#AAA8B1]'>Director</span>
                <span className='h-10 w-[1px] bg-white text-white inline-block ml-20'></span>
            </span>

        </div>
      </div>
      <div className='w-2xl mt-47'>
        <span className='text-[#AAA8B1] '>
        I involves the development of algorithms, models, and systems that <br />
        enable machines to mimic human intelligence and behavior. It <br />
        encompasses various subfields such as machine learning, natural <br />
        language processing, computer vision, and expert systems. AI systems <br />
        can learn from data, recognize patterns, make decisions, and improve <br />
        their performance over time.
        </span> <br />
        <span className='text-[#AAA8B1] block mt-3'>
        AI has applications in a wide range of domains, including healthcare, <br />
        finance, transportation, manufacturing, and entertainment.
        </span>
        <button className='bg-[#59EBFD] px-3 py-2 mt-3'>Explore More</button>

      </div>
    </div>
  )
}

export default About
