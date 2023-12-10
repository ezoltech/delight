import React from 'react'
import { FaBeer } from 'react-icons/fa';



const prices = [
    {
        status: 'standard',
        cost: '$100',
        benefit: 'includes Basic necessities',
        includes: 'Everything needed: towels, blanckets, bathroom esswentials, firewood, food and more.',
        places: 'Medelline surroundeng areas: El Retro, Elceja',
        duration: '1-7 Days'
    },
    {
        status: 'Premium',
        cost: '$200',
        benefit: 'Everything in standard +',
        includes: 'Everything needed: towels, blanckets, bathroom esswentials, firewood, food and more.',
        places: 'Medelline surroundeng areas: El Retro, Elceja',
        duration: '1-7 Days'
    },
]
function Price() {
    return (
        <div className='pricing-sec bg-[#f6f6f6] relative px-[7px] md:px-[8rem]'>
            <div className="text-center">
                <h1 className="text-[2.4rem] mt-4 leading-[1.4] tracking-[0] text-[#02b1b4] font-bold">
                    <span className='text-[#fba61b]'>Price Ranges</span>  For Glamping around Medellin
                </h1>
                <p className="relative px-6 my-6 mb-12 leading-[1.2] font-medium text-[#555] text-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem nobis qui aperiam animi maxime architecto reiciendis soluta recusandae at officia incidunt, facere aliquam laboriosam deleniti asperiores fugiat dolorum culpa dignissimos dicta doloremque? Repellat tenetur, itaque placeat aut necessitatibus dolorum non accusamus doloribus aliquam, sed dignissimos expedita! Error nostrum alias itaque!</p>
            </div>
            <div className=' grid justify-center content-center md:grid-cols-[repeat(2,minmax(200px,1fr))] gap-5'>
                {prices.map((price, index) => {
                    return (
                        <div className='h-auto max-w-[24rem] mx-auto rounded-[2.4rem] text-center' key={index}>
                            <div className='text text-gray-100 bg-[#02b1b4] py-2 rounded-t-[2.4rem]'>
                                <p className=''>{price.status}</p>
                                <div className='w-fit mx-auto my-2 text-right'>
                                    <h1 className='text-[2.4rem] -mb-3'>{price.cost}</h1>
                                    <small className='w-full text-right mb-4' >per night</small>
                                </div>
                                <p className='text-sm my-4'>{price.benefit}</p>
                            </div>
                            <div className='py-3 px-2 text-left rounded-b-[2.3rem] bg-blue-100'>
                                <h2 className=''>Includes :</h2>
                                <p className='text-sm '>{price.includes}</p>
                                <h2>Places :</h2>
                                <p className='text-sm '>{price.places}</p>
                                <h2>Duration :</h2>
                                <p className='text-sm '>{price.duration}</p>
                                <div className='w-full text-center'>
                                <button className="md:mx-0 mx-auto mb-10 bg-[#02b1b4] text-xl text-gray-200 rounded-xl hover:bg-[#02989b] py-2 px-4 w-fit">Book Now</button>

                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="left">

                </div>
            </div>
        </div>
    )
}

export default Price
