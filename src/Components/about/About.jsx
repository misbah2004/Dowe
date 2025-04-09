import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full px-6 lg:px-20 py-10 items-center gap-10">
      
      {/* Left Section: Image and Text on Image */}
      <div className="relative w-full lg:w-1/2">
        <img src="/images/aboutrobot.jpg" alt="DoweyAi Robot" className="w-full h-auto object-cover rounded-lg" />
        
        {/* Absolute Text on Image */}
        <div className="absolute top-10 left-6 sm:left-10 md:left-16 text-white space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-Exo">
            About The <span className="bg-gradient-to-r from-[#5C00E5] to-[#59EBFD] text-transparent bg-clip-text">DoweyAi</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-sm sm:max-w-md">
            AI and Robotics have witnessed significant advancements in recent years, driven by breakthroughs in machine learning, computer vision, natural language processing, and hardware capabilities.
          </p>
          <div className="text-sm sm:text-base">
            Brian Zaragoza <br />
            <span className="text-[#AAA8B1]">Director</span>
            <span className="inline-block h-4 w-[1px] bg-white mx-4"></span>
          </div>
        </div>
      </div>

      {/* Right Section: Text Content */}
      <div className="w-full lg:w-1/2 space-y-4 text-[#AAA8B1] text-sm sm:text-base">
        <p>
          It involves the development of algorithms, models, and systems that enable machines to mimic human intelligence and behavior. 
          It encompasses various subfields such as machine learning, natural language processing, computer vision, and expert systems. 
          AI systems can learn from data, recognize patterns, make decisions, and improve their performance over time.
        </p>
        <p>
          AI has applications in a wide range of domains, including healthcare, finance, transportation, manufacturing, and entertainment.
        </p>
        <button className="bg-[#59EBFD] text-black px-4 py-2 rounded hover:scale-105 transition-transform duration-300">
          Explore More
        </button>
      </div>
    </div>
  )
}

export default About
