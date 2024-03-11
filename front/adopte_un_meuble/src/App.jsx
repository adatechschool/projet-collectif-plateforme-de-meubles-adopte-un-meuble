import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

async function getArticles() {
  let response = await fetch("http://localhost:3000/api/publication/");
  let data = await response.json();
  console.log(data);
  return data;
}

let articles = await getArticles();

function App() {
  return (
    <div className="flex w-screen h-screen flex-col">
      <div className="sm:hidden flex w-full flex-col content-center justify-start items-start">
        <Carousel
          plugins={[
            Autoplay({
              delay: 6000,
              stopOnMouseEnter: true,
              stopOnInteraction: false,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          orientation="horizontal"
          className="w-full"
        >
          <CarouselContent className="flex">
            {articles.map((article, index) => (
              <CarouselItem className="h-full" key={article.id}>
                <a href={"http://localhost:3000/" + article.id}>
                  <div className="flex aspect-square items-center">
                    <img
                      className="max-h-full max-w-none h-full"
                      src={"http://localhost:3000/photos/" + article.photos[0]}
                      alt={`Image ${article.id}`}
                    />
                  </div>
                  <div className="flex p-[0.9375rem] flex-col items-start gap-[0.3125rem] self-stretch">
                    <h1 className="text-2xl font-bold text-lightMode-text">
                      {article.titre}
                    </h1>
                    <div className="flex flex-col items-start">
                      <h2 className="text-lg font-bold text-lightMode-text">
                        {article.État_Meuble.état}
                      </h2>
                      <h2 className="text-lg font-bold text-lightMode-text">
                        €{article.prix}
                      </h2>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="hidden sm:flex justify-center items-center h-screen w-screen">
        <div className="flex flex-col items-center gap-[0.3125rem]">
          <Carousel
            plugins={[
              Autoplay({
                delay: 6000,
                stopOnMouseEnter: true,
                stopOnInteraction: false,
              }),
            ]}
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
                  <a href={"http://localhost:3000/" + article.id}>
                    <div className="py-[5vh]">
                      <div className="flex flex-col justify-between items-start aspect-square w-[60vh] bg-red-500 p-[0.625rem] relative">
                        <div className="absolute inset-0">
                          <img
                            className="max-h-full max-w-none h-full w-full object-cover"
                            src={
                              "http://localhost:3000/photos/" +
                              article.photos[0]
                            }
                            alt={`Image ${article.id}`}
                          />
                        </div>
                        <div className="flex flex-col items-start relative z-10 ">
                          <h2 className="text-2xl text-lightMode-text font-bold bg-lightMode-background py-1 px-2.5">
                            {article.titre}
                          </h2>
                          <h3 className="text-lg text-lightMode-text font-medium bg-lightMode-background py-1 px-2.5">
                            {article.État_Meuble.état}
                          </h3>
                        </div>
                        <div className="flex items-start justify-between w-full relative z-10">
                          <h3 className="text-lg text-lightMode-text font-medium bg-lightMode-background py-1 px-2.5">
                            €{article.prix}
                          </h3>
                          {/* <div className="flex content-center items-center p-[0.22rem] bg-lightMode-background">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="29"
                            height="29"
                            viewBox="0 0 29 29"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M16.2419 9.63371L18.4915 7.44071L18.9329 9.04658L16.4246 11.4918C16.1144 11.7942 16.1144 12.2846 16.4246 12.5871C16.7349 12.8896 17.238 12.8896 17.5482 12.5871L20.1374 10.063L20.4261 10.2802L19.377 11.3029C19.0667 11.6053 19.0667 12.0957 19.377 12.3982C19.6872 12.7007 20.1903 12.7007 20.5006 12.3982L21.6945 11.2343L23.0451 12.2501L20.8388 14.4009C20.5285 14.7034 20.5285 15.1938 20.8388 15.4963C21.1491 15.7988 21.6521 15.7988 21.9624 15.4963L24.7938 12.736C24.96 12.574 25.0372 12.3582 25.0254 12.1461C25.0286 12.0695 25.0202 11.9911 24.9988 11.9132L24.1785 8.92893C24.1703 8.89893 24.1603 8.86981 24.1488 8.84165L28.6628 4.44117C28.7155 4.3898 28.7592 4.33301 28.794 4.27264C28.808 4.25756 28.8215 4.24183 28.8345 4.22545C29.1025 3.88678 29.0382 3.40041 28.6908 3.1391L24.737 0.165115C24.6048 0.065664 24.4506 0.0131466 24.2956 0.00491336C24.0635 -0.0206194 23.8222 0.0533605 23.6442 0.226853L15.1184 8.53837C14.8081 8.84084 14.8081 9.33124 15.1184 9.63371C15.4286 9.93618 15.9317 9.93618 16.2419 9.63371ZM23.5206 2.53804L24.2915 1.78653L27.0276 3.84459L26.2567 4.5961L23.5206 2.53804ZM19.8124 6.15303L22.3877 3.64245L25.1238 5.70051L22.5651 8.19487L19.8124 6.15303Z"
                              fill="#21201C"
                            />
                            <path
                              d="M4.86385 7.1894C6.00469 7.1894 6.92954 6.28781 6.92954 5.17564C6.92954 4.06347 6.00469 3.16187 4.86385 3.16187C3.723 3.16187 2.79816 4.06347 2.79816 5.17564C2.79816 6.28781 3.723 7.1894 4.86385 7.1894Z"
                              fill="#21201C"
                            />
                            <path
                              d="M5.64319 10.3442L9.54818 13.0746C9.402 13.4723 9.56079 13.9278 9.94777 14.1505L12.9634 15.886L14.7559 24.6132C14.8475 25.0595 15.2637 25.3618 15.7172 25.3336C15.7636 25.3406 15.8112 25.3442 15.8597 25.3442H25.5843C25.6298 25.3442 25.6745 25.341 25.7182 25.3348C26.1348 25.32 26.5021 25.0291 26.5875 24.6132L28.2583 16.4782C28.3583 15.9916 28.0347 15.5183 27.5356 15.4208C27.0365 15.3234 26.5509 15.6389 26.451 16.1254L24.9266 23.5474H16.4168L14.6871 15.1257C14.6235 14.8161 14.4037 14.5757 14.1236 14.467L10.8848 12.6031C10.8681 12.5935 10.8513 12.5845 10.8343 12.5761L6.17095 8.02991C5.94447 7.80913 5.63731 7.68509 5.31702 7.68509H5.06503C4.56991 7.63089 4.11807 7.97137 4.04964 8.45529L2.66959 18.2143C2.65722 18.3018 2.65821 18.388 2.67104 18.4711L2.67104 23.2117L0.185262 26.432C-0.120786 26.8285 -0.039186 27.3918 0.36752 27.6901C0.774226 27.9885 1.35203 27.9089 1.65807 27.5124L2.67104 26.2002V27.8537C2.67104 28.3499 3.08366 28.7522 3.59265 28.7522C4.10165 28.7522 4.51427 28.3499 4.51427 27.8537L4.51427 18.3735C4.51427 18.3602 4.51397 18.3469 4.51338 18.3337L5.64319 10.3442Z"
                              fill="#21201C"
                            />
                            <path
                              d="M17.6711 27.296C17.6711 28.2371 16.8886 29 15.9232 29C14.9579 29 14.1753 28.2371 14.1753 27.296C14.1753 26.355 14.9579 25.5921 15.9232 25.5921C16.8886 25.5921 17.6711 26.355 17.6711 27.296Z"
                              fill="#21201C"
                            />
                            <path
                              d="M25.1394 29C26.1047 29 26.8873 28.2371 26.8873 27.296C26.8873 26.355 26.1047 25.5921 25.1394 25.5921C24.174 25.5921 23.3915 26.355 23.3915 27.296C23.3915 28.2371 24.174 29 25.1394 29Z"
                              fill="#21201C"
                            />
                            <path
                              d="M21.4211 17.2582C21.4211 16.8305 21.0654 16.4837 20.6266 16.4837C20.1879 16.4837 19.8322 16.8305 19.8322 17.2582V19.5365L19.5247 19.2369C19.2537 18.9726 18.8143 18.9726 18.5432 19.2369C18.2722 19.5011 18.2722 19.9295 18.5432 20.1937L19.9454 21.5607C19.9836 21.6225 20.0304 21.6787 20.0842 21.7277C20.0991 21.7456 20.1152 21.7629 20.1322 21.7796C20.4013 22.0419 20.8364 22.0438 21.1079 21.7852C21.1165 21.7776 21.1249 21.7698 21.1332 21.7617C21.1394 21.7557 21.1453 21.7497 21.1512 21.7435C21.178 21.7205 21.2033 21.6958 21.2267 21.6694L22.7222 20.2115C22.9933 19.9473 22.9933 19.5189 22.7222 19.2547C22.4512 18.9905 22.0117 18.9905 21.7407 19.2547L21.4211 19.5662V17.2582Z"
                              fill="#21201C"
                            />
                          </svg>
                        </div> */}
                        </div>
                      </div>
                    </div>
                  </a>
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
