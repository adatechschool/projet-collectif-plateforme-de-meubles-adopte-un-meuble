import "./App.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const images = [
  "./public/cabinet_1.png",
  "./public/chair_1.png",
  "./public/couch_1.png",
  "./public/couch_2.png",
  "./public/lights_1.png",
];

const imageNames = ["one", "two", "three", "four", "five"];

function App() {
  return (
    <div className="flex w-full h-full">
      <div className="h-[39px] w-full bg-orange-400 fixed top-0 z-10">
        navbar
      </div>
      {/* <div className="h-[100px] w-[100px] bg-pink-400 hidden sm:block"></div> */}
      <div className="sm:hidden flex w-full flex-col content-center justify-start items-start bg-violet-500">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnMouseEnter: true,
              stopOnInteraction: false,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          // methods={{
          //   slidesInView: () => 2,
          // }}
          orientation="horizontal"
          className="w-full"
        >
          <CarouselContent className="flex">
            {images.map((imageUrl, index) => (
              <CarouselItem className="h-full" key={index}>
                <div className="flex aspect-square items-center">
                  <img
                    className="max-h-full max-w-none h-full"
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
        <CarouselNext /> */}
        </Carousel>
        <div className="flex p-[0.9375rem] flex-col items-start gap-[0.3125rem] self-stretch">
          <h1 className="text-lg font-bold text-lightMode-secondarytext">
            article du moment
          </h1>
          <div className="flex flex-col items-start">
            <h2 className="text-lg font-bold text-lightMode-text">
              canapé vert 1990
            </h2>
            <h2 className="text-lg font-bold text-lightMode-text">€250</h2>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex justify-center items-center h-screen w-screen pt-[39px] bg-orange-800">
        {/* <div className="w-[20rem] h-[20rem] bg-green-500"></div> */}
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnMouseEnter: true,
              stopOnInteraction: false,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          orientation="vertical"
          className="w-[30rem] "
        >
          <CarouselContent className="h-[30rem] flex">
            {images.map((imageUrl, index) => (
              <CarouselItem className="h-full" key={index}>
                <div className="flex aspect-square items-center">
                  <img
                    className="max-h-full max-w-none h-full"
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
