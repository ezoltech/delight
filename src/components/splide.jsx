import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const slides = [
  {
    head: "bosko lorem Ezol did this",
    imgurl:
      "https://imageio.forbes.com/specials-images/imageserve/5cdb058a5218470008b0b00f/Nobu-Ryokan-Malibu/0x0.jpg?format=jpg&height=1009&width=2000",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus accusamus dolorem dolores veniam reiciendis soluta aperiam vitae aliquam maxime quaerat obcaecati dolore eligendi, illo, non dolorum. Repudiandae, quod vel magni omnis harum veniam reiciendis veritatis perferendis corrupti excepturi eos, unde quasi ducimus amet tempora, nam fugit minima aliquam iusto expedita modi sit at repellat aliquid? Nulla sunt qui itaque, hic illo facilis exercitationem sapiente. Placeat quas in voluptatum enim nam sunt, perspiciatis doloremque impedit dignissimos suscipit aliquam ea temporibus magni ipsam molestias laudantium rerum eum, quasi ullam unde. Blanditiis, illo!",
  },
  {
    head: "bosko lorem onnd",
    imgurl:
      "https://www.welcome-hotels.com/site/assets/files/35059/welcome_hotel_marburg_lobby_2k.2560x1600.jpg",
    text: "Excepturi eos, unde quasi ducimus amet tempora, nam fugit minima aliquam iusto expedita modi sit at repellat aliquid? Nulla sunt qui itaque, hic illo facilis exercitationem sapiente. Placeat quas in voluptatum enim nam sunt, perspiciatis doloremque impedit dignissimos suscipit aliquam ea temporibus magni ipsam molestias laudantium rerum eum, quasi ullam unde. Blanditiis, illo!",
  },
  // Add more slides as needed...
];

function SplideComponent() {
  return (
    <div id="service" className="w-full mt-10 text-center">
      <Splide className="relative">
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div className="w-full text-center bg-[#53bcce18] overflow-hidden rounded-[3rem]">
              <img
                className="object-cover w-full h-[50vh] md:h-[80vh] rounded-t-[3rem]"
                src={slide.imgurl}
                alt=""
              />
              <h1 className="md:text-[3rem] text-[2.6rem] text-[#fba61b] font-curley uppercase font-bold">
                {slide.head.split(" ")[0]}{" "}
                <span className="text-[#02b1b4] font-mont tracking-tighter">
                  {slide.head.split(" ").slice(1).join(" ")}
                </span>
              </h1>
              <p className="relative px-6 my-3 leading-[1.2] font-medium text-[#555] text-md">
                {slide.text}
              </p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default SplideComponent;
