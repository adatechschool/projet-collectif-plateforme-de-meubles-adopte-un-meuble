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
    price: "250",
  },
  {
    id: 2,
    name: "Sofa Supreme",
    type: "canapé",
    color: "bleu",
    state: "excellent état",
    photo: "./public/chair_1.png",
    price: "34",
  },
  {
    id: 3,
    name: "Elegant Coffee Table",
    type: "table basse",
    color: "marron",
    state: "comme neuf",
    photo: "./public/couch_1.png",
    price: "6600",
  },
  {
    id: 4,
    name: "Vintage Armchair",
    type: "fauteuil",
    color: "rouge",
    state: "état vintage",
    photo: "./public/couch_2.png",
    price: "400",
  },
  {
    id: 5,
    name: "lampe",
    type: "luminaire",
    color: "blanc",
    state: "bon état",
    photo: "./public/lights_1.png",
    price: "50",
  },
  {
    id: 6,
    name: "testststsetest",
    type: "luminaire",
    color: "blanc",
    state: "bon état",
    photo: "./public/lights_1.png",
    price: "50",
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
              {articles.map((article, index) => (
                <CarouselItem className="pt-1 basis-1/3" key={article.id}>
                  <div className="py-[5vh]">
                    <div className="flex flex-col justify-between items-start aspect-square w-[60vh] bg-red-500 p-[0.625rem] relative">
                      <div className="absolute inset-0">
                        <img
                          className="max-h-full max-w-none h-full w-full object-cover"
                          src={article.photo}
                          alt={`Image ${article.id}`}
                        />
                      </div>
                      <div className="flex flex-col items-start relative z-10 ">
                        <h2 className="text-2xl text-lightMode-text font-bold bg-lightMode-background py-1 px-2.5">
                          {article.name}
                        </h2>
                        <h3 className="text-lg text-lightMode-text font-medium bg-lightMode-background py-1 px-2.5">
                          {article.state}
                        </h3>
                      </div>
                      <div className="flex items-start relative z-10">
                        <h3 className="text-lg text-lightMode-text font-medium bg-lightMode-background py-1 px-2.5">
                          €{article.price}
                        </h3>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
