import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-[#ffffff] py-16 sm:py-24 px-6 sm:px-10">
        <div className="w-full max-w-[1120px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-y-12 gap-x-8">

            <div className="flex flex-col items-start">
                <div className="hidden lg:block text-[22px] leading-[1.3] mb-[24px]">&nbsp;</div>

                <p className="text-[15px] font-normal text-[#666666] leading-[1.7] max-w-[260px]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>

                <div className="mt-[28px] flex items-center gap-[24px]">
                    <a href="#facebook" className="w-[17px] h-[17px]">
                        <svg viewBox="0 0 24 24" className="w-[17px] h-[17px]">
                            <circle cx="12" cy="12" r="12" fill="#1877F2" />
                            <path d="M15.12 12.68l.42-2.74h-2.63V8.16c0-.75.37-1.48 1.55-1.48h1.2V4.35S14.57 4.16 13.54 4.16c-2.16 0-3.57 1.31-3.57 3.68v2.1H7.56v2.74h2.41v6.63c.48.08.98.12 1.48.12s1-.04 1.46-.12v-6.63h2.21z" fill="#ffffff" />
                        </svg>
                    </a>

                    <a href="#instagram" className="w-[17px] h-[17px]">
                        <svg viewBox="0 0 24 24" className="w-[17px] h-[17px]">
                            <defs>
                                <radialGradient id="igBrandGrad" cx="30%" cy="107%" r="150%">
                                    <stop offset="0%" stopColor="#fdf497" />
                                    <stop offset="5%" stopColor="#fdf497" />
                                    <stop offset="30%" stopColor="#f09433" />
                                    <stop offset="50%" stopColor="#e6683c" />
                                    <stop offset="70%" stopColor="#dc2743" />
                                    <stop offset="85%" stopColor="#cc2366" />
                                    <stop offset="100%" stopColor="#bc1888" />
                                </radialGradient>
                            </defs>
                            <rect width="24" height="24" rx="5.5" fill="url(#igBrandGrad)" />
                            <rect x="4.2" y="4.2" width="15.6" height="15.6" rx="4.2" fill="none" stroke="#ffffff" strokeWidth="1.9" />
                            <circle cx="12" cy="12" r="3.7" fill="none" stroke="#ffffff" strokeWidth="1.9" />
                            <circle cx="16.7" cy="7.3" r="1.15" fill="#ffffff" />
                        </svg>
                    </a>

                    <a href="#google" className="w-[17px] h-[17px]">
                        <svg viewBox="0 0 24 24" className="w-[17px] h-[17px]">
                            <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
                            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z" />
                            <path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z" />
                            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z" />
                        </svg>
                    </a>
                </div>
            </div>

            <div>
                <h3 className="text-[22px] font-normal text-[#222222] leading-[1.3] mb-[24px]">Home</h3>
                <ul className="flex flex-col gap-[16px] list-none m-0 p-0">
                    <li><a href="#booking" className="text-[15px] text-[#333333] hover:text-[#22a06b] transition-colors">Booking</a></li>
                    <li><a href="#facilities" className="text-[15px] text-[#333333] hover:text-[#22a06b] transition-colors">Facilities</a></li>
                    <li><a href="#location" className="text-[15px] text-[#333333] hover:text-[#22a06b] transition-colors">Location</a></li>
                    <li><a href="#contact" className="text-[15px] text-[#333333] hover:text-[#22a06b] transition-colors">Contact</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-[22px] font-normal text-[#222222] leading-[1.3] mb-[24px]">Help</h3>
                <ul className="flex flex-col gap-[16px] list-none m-0 p-0">
                    <li><a href="#about-us" className="text-[15px] text-[#333333] hover:text-[#22a06b] transition-colors">About Us</a></li>
                    <li><a href="#help-center" className="text-[15px] text-[#333333] hover:text-[#22a06b] transition-colors">Help center</a></li>
                    <li><a href="#privacy-policy" className="text-[15px] text-[#333333] hover:text-[#22a06b] transition-colors">Privacy policy</a></li>
                    <li><a href="#faqs" className="text-[15px] text-[#333333] hover:text-[#22a06b] transition-colors">FAQs</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-[22px] font-normal text-[#222222] leading-[1.3] mb-[24px]">Get the app</h3>
                <ul className="flex flex-col gap-[16px] list-none m-0 p-0">
                    <li><a href="#ios-app" className="text-[15px] text-[#333333] hover:text-[#22a06b] transition-colors">iOS app</a></li>
                    <li><a href="#android-app" className="text-[15px] text-[#333333] hover:text-[#22a06b] transition-colors">Android app</a></li>
                </ul>
            </div>

        </div>
    </footer>
    </div>
  )
}

export default Footer
