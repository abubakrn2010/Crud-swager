import React from 'react'

const Section4 = () => {
  return (
    <div>
      <section className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 py-12 sm:py-16">
            <div className="w-full rounded-[16px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">

                <div className="relative w-full min-h-[320px] sm:min-h-[400px] lg:min-h-[520px] bg-[#dbece6]">
                    <img
                        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85"
                        alt="Luxury poolside villa"
                        className="w-full h-full object-cover object-center block"
                    />
                </div>

                <div className="bg-[#f3faf7] px-7 py-10 sm:px-[56px] sm:py-[64px] flex flex-col justify-center items-start">

                    <h2 className="text-[32px] sm:text-[40px] font-bold text-[#0b0b0b] leading-[1.2] tracking-[-0.02em]">
                        Discover our History
                    </h2>

                    <p className="mt-[22px] text-[15px] font-normal leading-[1.75] text-[#6b7280] max-w-[465px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </p>

                    <p className="mt-[22px] text-[15px] font-normal leading-[1.75] text-[#6b7280] max-w-[465px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>

                    <button className="mt-[34px] bg-[#22a06b] hover:bg-[#1c8a5b] text-white text-[14.5px] font-medium px-[34px] py-[14px] rounded-full transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_8px_20px_rgba(34,160,107,0.24)]">
                        Explore More
                    </button>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Section4
