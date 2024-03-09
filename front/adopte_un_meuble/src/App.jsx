//import { useState } from "react";

import Navbar from "./components/Navbar.jsx";

import Footer from "./components/Footer.jsx";

import "./App.css";
import ProductCard from "./components/ProductCard.jsx";
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

const articles = [
  {
    id: 1,
    name: "dofa douilletHavre",
    type: "canapé",
    color: "vert",
    state: "bon état",
    photo: "./public/cabinet_1.png",
  },
  {
    id: 2,
    name: "Sofa Supreme",
    type: "canapé",
    color: "bleu",
    state: "excellent état",
    photo: "./public/chair_1.png",
  },
  {
    id: 3,
    name: "Elegant Coffee Table",
    type: "table basse",
    color: "marron",
    state: "comme neuf",
    photo: "./public/couch_1.png",
  },
  {
    id: 4,
    name: "Vintage Armchair",
    type: "fauteuil",
    color: "rouge",
    state: "état vintage",
    photo: "./public/couch_2.png",
  },
  {
    id: 5,
    name: "lampe",
    type: "luminaire",
    color: "blanc",
    state: "bon état",
    photo: "./public/lights_1.png",
  },
];

function App() {
  return (
    <div className="flex w-screen h-screen flex-col">
      <div className="sm:hidden flex w-full flex-col content-center justify-start items-start">
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
      <div className="hidden sm:flex justify-center items-center h-screen w-screen">
        <div className="flex flex-col items-center gap-[0.3125rem]">
          {/* <div className="flex justify-between items-start self-stretch">
            <h1 className="text-lightMode-secondarytext font-bold text-2xl">
              article du moment
            </h1>
            <h2 className="text-lightMode-text font-bold text-2xl">€250</h2>
          </div> */}
          <Carousel
            // plugins={[
            //   Autoplay({
            //     delay: 3000,
            //     stopOnMouseEnter: true,
            //     stopOnInteraction: false,
            //   }),
            // ]}
            opts={{
              align: "center",
              loop: true,
            }}
            orientation="vertical"
            className="w-full"
          >
            <CarouselContent className="-mt-1 h-screen">
              {images.map((imageUrl, index) => (
                <CarouselItem className="pt-1 basis-1/3" key={index}>
                  <div className="py-[5vh]">
                    {/* <div className="flex flex-col justify-between items-start aspect-square w-[60vh] bg-red-500 p-[0.625rem] ">
                      <img
                        className="max-h-full max-w-none h-full"
                        src={imageUrl}
                        alt={`Image ${index + 1}`}
                      />
                      <div className="flex flex-col items-start ">
                        <h2 className="text-2xl text-lightMode-text font-bold bg-lightMode-background py-1 px-2.5">
                          Divan Reconditionné Chic
                        </h2>
                        <h3 className="text-lg text-lightMode-text font-medium bg-lightMode-background py-1 px-2.5">
                          comme neuf
                        </h3>
                      </div>
                      <div className="flex items-start">
                        <h3 className="text-lg text-lightMode-text font-medium bg-lightMode-background py-1 px-2.5">
                          €250
                        </h3>
                      </div>
                    </div> */}

                    <div className="flex flex-col justify-between items-start aspect-square w-[60vh] bg-red-500 p-[0.625rem] relative">
                      <div className="absolute inset-0">
                        <img
                          className="max-h-full max-w-none h-full w-full object-cover"
                          src={imageUrl}
                          alt={`Image ${index + 1}`}
                        />
                      </div>
                      <div className="flex flex-col items-start relative z-10">
                        <h2 className="text-2xl text-lightMode-text font-bold bg-lightMode-background py-1 px-2.5">
                          Divan Reconditionné Chic
                        </h2>
                        <h3 className="text-lg text-lightMode-text font-medium bg-lightMode-background py-1 px-2.5">
                          comme neuf
                        </h3>
                      </div>
                      <div className="flex items-start relative z-10">
                        <h3 className="text-lg text-lightMode-text font-medium bg-lightMode-background py-1 px-2.5">
                          €250
                        </h3>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          {/* <div className="flex justify-between items-start self-stretch">
            <h1 className="text-lightMode-text font-bold text-2xl">
              canapé vert 1990
            </h1>
            <h2 className="text-lightMode-text font-normal text-2xl">salon</h2>
          </div> */}
        </div>
      </div>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
