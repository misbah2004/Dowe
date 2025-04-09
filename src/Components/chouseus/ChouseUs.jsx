import React from 'react'

const ChouseUs = () => {
  return (
    <div className="mt-10 flex flex-col lg:flex-row items-start gap-10 px-4 lg:px-10">
      
     
      <div className="w-full lg:w-1/2 relative">
        <div>
          <span className="text-3xl sm:text-4xl font-extrabold text-white">WHY CHOOSE US</span>
          <span className="block w-20 h-[2px] bg-[#5B1DE8] mt-6 mb-4"></span>
          <span className="text-[#FFFFFFB5] block mb-6">
            Choose us for a seamless car-buying journey where expertise <br />
            meets trust. Our commitment.
          </span>

          
          {["Large deep shoulder lines", "Large deep shoulder lines", "Large deep shoulder lines"].map((title, idx) => (
            <div key={idx} className="mt-6">
              <span className="text-white font-bold block">{title}</span>
              <span className="text-[#FFFFFFB5] font-normal block mt-2">
                Enhanced safety, stability — our tires <br />
                with deep shoulder lines deliver.
              </span>
            </div>
          ))}
        </div>

        
        <div className="absolute right-0 bottom-0 hidden md:block z-10">
          <img
            src="/images/robot.png"
            alt="Robot"
            className="h-[300px] object-contain rotate-y-180 mt-10"
          />
        </div>
      </div>

      
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {[
          "Save on your next trip",
          "Quality tyres for any season",
          "Free fuel for new clients",
          "Customers ratings"
        ].map((text, idx) => (
          <div
            key={idx}
            className="bg-[#25232E] h-20 w-full flex items-center px-4 rounded hover:scale-[1.01] transition-transform duration-300"
          >
            <span className="rounded-full h-10 w-10 border ml-2 border-l-[#5B1DE8] border-t-[#5B1DE8] border-r-[#59EBFD] border-b-[#59EBFD]"></span>
            <div className="ml-5 text-white font-bold text-sm sm:text-base">
              {text}
              <span className="block w-10 mt-2 h-[1px] bg-[#5B1DE8]"></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChouseUs
