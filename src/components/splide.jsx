import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
const slides = [
    {
        head: "bosko lorem",
        imgurl: "https://imageio.forbes.com/specials-images/imageserve/5cdb058a5218470008b0b00f/Nobu-Ryokan-Malibu/0x0.jpg?format=jpg&height=1009&width=2000",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus accusamus dolorem dolores veniam reiciendis soluta aperiam vitae aliquam maxime quaerat obcaecati dolore eligendi, illo, non dolorum. Repudiandae, quod vel magni omnis harum veniam reiciendis veritatis perferendis corrupti excepturi eos, unde quasi ducimus amet tempora, nam fugit minima aliquam iusto expedita modi sit at repellat aliquid? Nulla sunt qui itaque, hic illo facilis exercitationem sapiente. Placeat quas in voluptatum enim nam sunt, perspiciatis doloremque impedit dignissimos suscipit aliquam ea temporibus magni ipsam molestias laudantium rerum eum, quasi ullam unde. Blanditiis, illo!"
    },
    {
        head: "bosko lorem",
        imgurl: "https://imageio.forbes.com/specials-images/imageserve/5cdb058a5218470008b0b00f/Nobu-Ryokan-Malibu/0x0.jpg?format=jpg&height=1009&width=2000",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus accusamus dolorem dolores veniam reiciendis soluta aperiam vitae aliquam maxime quaerat obcaecati dolore eligendi, illo, non dolorum. Repudiandae, quod vel magni omnis harum veniam reiciendis veritatis perferendis corrupti excepturi eos, unde quasi ducimus amet tempora, nam fugit minima aliquam iusto expedita modi sit at repellat aliquid? Nulla sunt qui itaque, hic illo facilis exercitationem sapiente. Placeat quas in voluptatum enim nam sunt, perspiciatis doloremque impedit dignissimos suscipit aliquam ea temporibus magni ipsam molestias laudantium rerum eum, quasi ullam unde. Blanditiis, illo!"
    },
]
function splide() {
    return (
        <div className='w-full h-[80vh] mt-10' text-center>
            <Splide pagination={true}>
                {slides.map((slide, index) => {
                    return (
                        <SplideSlide key={index}>
                            <div className='w-full text-center bg-[#53bcce18] overflow-hidden rounded-[3rem]' >
                                <img className='object-cover w-full h-[80vh] rounded-t-[3rem]' src={slide.imgurl} alt="" />
                                <h1 className="text-[3rem] text-[#02b1b4] uppercase font-bold py-3">
                                    {slide.head}
                                </h1>
                                <p className=" px-6 my-3 leading-[1.4] font-medium text-[#555] text-lg">{slide.text}</p>
                            </div>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </div>
    )
}

export default splide
