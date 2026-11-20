import React from 'react'

const Section2 = () => {
  return (
    <div style={{marginTop:'20px'}}>
        <section className="w-full bg-white py-[60px] px-6">
            <div className="max-w-[1200px] mx-auto">

                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h2 className="text-[32px] font-bold text-[#222]">
                            Our most popular Hotels
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                    <button className="bg-[#377dff] text-white px-6 py-3 rounded-lg">
                        View All
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="bg-[#f9fafa] rounded-xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85"
                            className="w-full h-[300px] object-cover"
                        />

                        <div className="p-5">
                            <h3 className="text-xl font-bold">
                                Danubius Hotel Regents Park
                            </h3>

                            <p className="text-gray-500 mt-2">
                                London NW8 7JT England
                            </p>

                            <div className="flex justify-between mt-5">
                                <p className="font-bold">$200 <span className="text-gray-500 font-normal">Par Night</span></p>
                                <p className="text-yellow-500">★ 4.8</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#f9fafa] rounded-xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=85"
                            className="w-full h-[300px] object-cover"
                        />

                        <div className="p-5">
                            <h3 className="text-xl font-bold">
                                The Resident Soho
                            </h3>

                            <p className="text-gray-500 mt-2">
                                London NW8 7JT England
                            </p>

                            <div className="flex justify-between mt-5">
                                <p className="font-bold">$200 <span className="text-gray-500 font-normal">Par Night</span></p>
                                <p className="text-yellow-500">★ 4.8</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#f9fafa] rounded-xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85"
                            className="w-full h-[300px] object-cover"
                        />

                        <div className="p-5">
                            <h3 className="text-xl font-bold">
                                London Bridge Hotel
                            </h3>

                            <p className="text-gray-500 mt-2">
                                London NW8 7JT England
                            </p>

                            <div className="flex justify-between mt-5">
                                <p className="font-bold">$200 <span className="text-gray-500 font-normal">Par Night</span></p>
                                <p className="text-yellow-500">★ 4.8</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Section2
