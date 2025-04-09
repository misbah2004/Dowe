import React from 'react'

const Trusted = () => {
  return (
    <div className="w-full flex h-30 flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10 mt-8 px-4">
      <div className="font-bold text-white">
        <h1 className="text-lg md:text-xl">Trusted By</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <img src="/images/trustimg1.png" alt="Trust 1" className="h-8 md:h-10" />
        <img src="/images/trustimg2.png" alt="Trust 2" className="h-8 md:h-10" />
        <img src="/images/trustimg3.png" alt="Trust 3" className="h-8 md:h-10" />
        <img src="/images/trustimg4.png" alt="Trust 4" className="h-8 md:h-10" />
        <img src="/images/trustimg5.png" alt="Trust 5" className="h-8 md:h-10" />
        <img src="/images/trustimg6.png" alt="Trust 6" className="h-8 md:h-10" />
      </div>
    </div>
  )
}

export default Trusted
