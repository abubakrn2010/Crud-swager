import React from 'react'

const Section3 = () => {
  return (
    <div>
        <section className="w-full bg-white text-[#0f0f0f] px-6 py-16">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-12">

                    <div className="w-full lg:w-[34%] pt-[6px]">
                        <h2 className="text-[32px] sm:text-[36px] font-semibold text-[#0f0f0f] leading-[1.25] tracking-[-0.015em]">
                            We do our best
                            <br />
                            facilities provide you
                        </h2>

                        <p className="mt-[18px] text-[14.5px] font-normal text-[#6b7280] leading-[1.65] max-w-[320px]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        </p>

                        <button className="mt-[32px] bg-[#22a06b] hover:bg-[#1c8a5b] text-white text-[14px] font-medium px-[32px] py-[14px] rounded-full transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_8px_20px_rgba(34,160,107,0.24)]">
                            Contact Now
                        </button>
                    </div>

                    <div className="w-full lg:w-[66%] grid grid-cols-2 sm:grid-cols-4 gap-[20px]">

                        <div className="group bg-white border border-[#f0f0f0] rounded-[8px] py-[32px] px-[16px] flex flex-col items-center justify-center text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.045)]">
                            <svg className="w-[34px] h-[34px] text-[#24a16c] transition-transform duration-200 group-hover:scale-105" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5.5 29h6.5" />
                                <path d="M8.5 29v-5.5l-2.5-4.5 3.5-3.5" />
                                <path d="M8.5 14.5l3.5 3.5-2.2 2.2-3.5-3.5 2.2-2.2z" />
                                <rect x="14" y="10" width="16.5" height="12" rx="1.5" />
                                <path d="M14 19h16.5" />
                                <path d="M22.25 22v7" />
                                <path d="M18.5 29h7.5" />
                            </svg>
                            <span className="mt-[18px] text-[14px] font-medium text-[#333333] leading-snug">Private Workspace</span>
                        </div>

                        <div className="group bg-white border border-[#f0f0f0] rounded-[8px] py-[32px] px-[16px] flex flex-col items-center justify-center text-center shadow-[0_12px_30px_rgba(0,0,0,0.045)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(0,0,0,0.06)]">
                            <svg className="w-[34px] h-[34px] text-[#24a16c] transition-transform duration-200 group-hover:scale-105" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="18" cy="15.5" r="9.5" />
                                <path d="M15.5 20V11h3.2a2.6 2.6 0 0 1 0 5.2h-3.2" />
                                <path d="M16.5 25v4.5h3V25" />
                            </svg>
                            <span className="mt-[18px] text-[14px] font-medium text-[#333333] leading-snug">Parking Area</span>
                        </div>

                        <div className="group bg-white border border-[#f0f0f0] rounded-[8px] py-[32px] px-[16px] flex flex-col items-center justify-center text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.045)]">
                            <svg className="w-[34px] h-[34px] text-[#24a16c] transition-transform duration-200 group-hover:scale-105" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14.5 7.5c-1.2 1.4-1.2 2.6 0 4" />
                                <path d="M19.5 7.5c-1.2 1.4-1.2 2.6 0 4" />
                                <path d="M9.5 15h14v5.5a6.5 6.5 0 0 1-6.5 6.5h-1a6.5 6.5 0 0 1-6.5-6.5V15z" />
                                <path d="M23.5 16.5h2.2a2.3 2.3 0 0 1 0 4.6h-2.2" />
                                <path d="M7 27.5h19l-1.5 2H8.5l-1.5-2z" />
                            </svg>
                            <span className="mt-[18px] text-[14px] font-medium text-[#333333] leading-snug">Breakfast</span>
                        </div>

                        <div className="group bg-white border border-[#f0f0f0] rounded-[8px] py-[32px] px-[16px] flex flex-col items-center justify-center text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.045)]">
                            <svg className="w-[34px] h-[34px] text-[#24a16c] transition-transform duration-200 group-hover:scale-105" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6.5 14.5a16.5 16.5 0 0 1 23 0" />
                                <path d="M10.5 18.8a11 11 0 0 1 15 0" />
                                <path d="M14.5 23a5.5 5.5 0 0 1 7 0" />
                                <circle cx="18" cy="27" r="1.2" fill="currentColor" stroke="none" />
                            </svg>
                            <span className="mt-[18px] text-[14px] font-medium text-[#333333] leading-snug">Free Wifi</span>
                        </div>

                        <div className="group bg-white border border-[#f0f0f0] rounded-[8px] py-[32px] px-[16px] flex flex-col items-center justify-center text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.045)]">
                            <svg className="w-[34px] h-[34px] text-[#24a16c] transition-transform duration-200 group-hover:scale-105" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="19.5 6.5 10.5 19.5 17.5 19.5 15.5 29.5 25.5 16.5 18.5 16.5 19.5 6.5" />
                            </svg>
                            <span className="mt-[18px] text-[14px] font-medium text-[#333333] leading-snug">Free Electricity</span>
                        </div>

                        <div className="group bg-white border border-[#f0f0f0] rounded-[8px] py-[32px] px-[16px] flex flex-col items-center justify-center text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.045)]">
                            <svg className="w-[34px] h-[34px] text-[#24a16c] transition-transform duration-200 group-hover:scale-105" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="23.5" cy="13.5" r="2.2" />
                                <path d="M11 18.5l4.5-3.5 4.5 2.5-3 3" />
                                <path d="M15.5 15l2.5-3.5 3.5 1.5" />
                                <path d="M6.5 22.5c2 0 2.5 1.5 4.5 1.5s2.5-1.5 4.5-1.5 2.5 1.5 4.5 1.5 2.5-1.5 4.5-1.5 2.5 1.5 4.5 1.5" />
                                <path d="M6.5 26.5c2 0 2.5 1.5 4.5 1.5s2.5-1.5 4.5-1.5 2.5 1.5 4.5 1.5 2.5-1.5 4.5-1.5 2.5 1.5 4.5 1.5" />
                            </svg>
                            <span className="mt-[18px] text-[14px] font-medium text-[#333333] leading-snug">Swimming Pool</span>
                        </div>

                        <div className="group bg-white border border-[#f0f0f0] rounded-[8px] py-[32px] px-[16px] flex flex-col items-center justify-center text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.045)]">
                            <svg className="w-[34px] h-[34px] text-[#24a16c] transition-transform duration-200 group-hover:scale-105" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="7" y="13" width="2.5" height="10" rx="1" />
                                <rect x="9.5" y="11" width="3" height="14" rx="1" />
                                <line x1="12.5" y1="18" x2="23.5" y2="18" />
                                <rect x="23.5" y="11" width="3" height="14" rx="1" />
                                <rect x="26.5" y="13" width="2.5" height="10" rx="1" />
                            </svg>
                            <span className="mt-[18px] text-[14px] font-medium text-[#333333] leading-snug">exercise Space</span>
                        </div>

                        <div className="group bg-white border border-[#f0f0f0] rounded-[8px] py-[32px] px-[16px] flex flex-col items-center justify-center text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.045)]">
                            <svg className="w-[34px] h-[34px] text-[#24a16c] transition-transform duration-200 group-hover:scale-105" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="10" cy="18" r="2.2" />
                                <circle cx="18" cy="18" r="2.2" />
                                <circle cx="26" cy="18" r="2.2" />
                            </svg>
                            <span className="mt-[18px] text-[14px] font-medium text-[#333333] leading-snug">Other Service</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Section3
