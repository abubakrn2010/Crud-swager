import React from 'react'

const Section1 = () => {
  return (
     <div className="min-h-screen bg-white flex items-center justify-center p-4">

      <section className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-t-[40px]">

    
        <div className="bg-[#f4f9f6] p-8 sm:p-12 lg:p-16 flex flex-col justify-center">

          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold leading-tight text-black">
            Find your perfect
            <br />
            place to stay
          </h1>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>

          <div className="mt-9 flex items-center gap-4">

            <button className="w-12 h-12 rounded-full bg-white shadow-md text-green-600 text-xl">
              ▶
            </button>

            <p className="font-semibold">Watch video</p>

          </div>

        </div>

    
        <div className="min-h-[350px]">

          <img
            src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=85"
            alt="House"
            className="w-full h-full object-cover"
          />

        </div>

    
        <div className="lg:col-span-2 flex flex-col lg:flex-row items-center justify-between gap-4 bg-white rounded-3xl lg:rounded-full p-6 lg:-mt-19 lg:mx-auto lg:w-[85%] relative">

          <div className="w-full">
            <p className="font-semibold">📍 Location</p>
            <input
              type="text"
              placeholder="United States"
              className="w-full text-sm outline-none mt-1"
            />
          </div>

          <div className="hidden lg:block h-10 border-l"></div>

        
          <div className="w-full">
            <p className="font-semibold">📅 Check in</p>
            <input
              type="text"
              placeholder="10 Jun 2021"
              className="w-full text-sm outline-none mt-1"
            />
          </div>

          <div className="hidden lg:block h-10 border-l"></div>

        
          <div className="w-full">
            <p className="font-semibold">📅 Check out</p>
            <input
              type="text"
              placeholder="15 Jun 2021"
              className="w-full text-sm outline-none mt-1"
            />
          </div>

          <div className="hidden lg:block h-10 border-l"></div>

          <div className="w-full">
            <p className="font-semibold">👤 Rooms for</p>
            <input
              type="text"
              placeholder="1 room, 2 guests"
              className="w-full text-sm outline-none mt-1"
            />
          </div>

        
          <button className="bg-[#22a06b] hover:bg-green-700 text-white px-10 py-4 rounded-full w-full lg:w-auto">
            🔍 Search...
          </button>

        </div>

      </section>

    </div>
  )
}

export default Section1
