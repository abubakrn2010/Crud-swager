import React from 'react'

const Section5 = () => {
  return (
    <div>
        <section className=" max-w-[1168px] mx-auto px-6 sm:px-8 py-12 sm:py-16 flex  justify-center">
        <div className="relative w-full max-w-[1120px]">

            <button className="absolute left-[-14px] sm:left-[-22px] top-1/2 -translate-y-1/2 z-20 w-[44px] h-[44px] rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.06)] flex items-center justify-center transition-all duration-200 hover:scale-105">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9e4d7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
            </button>

            <button className="absolute right-[-14px] sm:right-[-22px] top-1/2 -translate-y-1/2 z-20 w-[44px] h-[44px] rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.06)] flex items-center justify-center transition-all duration-200 hover:scale-105">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22a06b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </button>

            <div className="w-full min-h-[360px] rounded-[16px] overflow-hidden grid grid-cols-1 md:grid-cols-[68%_32%]">

                <div className="bg-[#fafafa] px-8 py-10 sm:px-14 md:pt-[56px] md:pb-[56px] md:pr-[64px] md:pl-[88px] flex flex-col justify-center">

                    <div className="transition-opacity duration-200 ease-out">
                        <div className="relative max-w-[530px]">

                            <svg
                                width="20"
                                height="16"
                                viewBox="0 0 24 19"
                                fill="none"
                                className="hidden sm:block absolute left-[-28px] top-[-8px]"
                            >
                                <path
                                    d="M9.8 2.2C6.4 3.5 4.4 6.2 4.1 9.8C4.7 9.5 5.4 9.3 6.2 9.3C8.6 9.3 10.4 11.1 10.4 13.6C10.4 16.2 8.4 18.2 5.8 18.2C2.6 18.2 0.5 15.6 0.5 11.8C0.5 6.3 3.9 2.1 9.1 0.4L9.8 2.2ZM22.2 2.2C18.8 3.5 16.8 6.2 16.5 9.8C17.1 9.5 17.8 9.3 18.6 9.3C21.0 9.3 22.8 11.1 22.8 13.6C22.8 16.2 20.8 18.2 18.2 18.2C15.0 18.2 12.9 15.6 12.9 11.8C12.9 6.3 16.3 2.1 21.5 0.4L22.2 2.2Z"
                                    fill="#22a06b"
                                />
                            </svg>

                            <p className="text-[14.5px] font-normal leading-[1.75] text-[#555555]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.

                                <svg
                                    width="20"
                                    height="16"
                                    viewBox="0 0 24 19"
                                    fill="none"
                                    className="inline-block align-baseline ml-[4px] translate-y-[2px]"
                                >
                                    <path
                                        d="M14.2 16.8C17.6 15.5 19.6 12.8 19.9 9.2C19.3 9.5 18.6 9.7 17.8 9.7C15.4 9.7 13.6 7.9 13.6 5.4C13.6 2.8 15.6 0.8 18.2 0.8C21.4 0.8 23.5 3.4 23.5 7.2C23.5 12.7 20.1 16.9 14.9 18.6L14.2 16.8ZM1.8 16.8C5.2 15.5 7.2 12.8 7.5 9.2C6.9 9.5 6.2 9.7 5.4 9.7C3.0 9.7 1.2 7.9 1.2 5.4C1.2 2.8 3.2 0.8 5.8 0.8C9.0 0.8 11.1 3.4 11.1 7.2C11.1 12.7 7.7 16.9 2.5 18.6L1.8 16.8Z"
                                        fill="#22a06b"
                                    />
                                </svg>
                            </p>
                        </div>

                        <div className="mt-[38px]">
                            <h3 className="text-[20px] font-bold text-[#111111] leading-[1.3] mb-[6px]">
                                Alexandr Ivchenko
                            </h3>

                            <p className="text-[13.5px] font-normal text-[#666666] leading-[1.4]">
                                Businessman
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative bg-[#f3f4f6] ">
                    <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85"
                        alt="Alexandr Ivchenko"
                        className="w-full h-full object-cover object-top block"
                    />
                </div>

            </div>
        </div>
    </section>

    </div>
  )
}

export default Section5
