import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import ShoppingCartItem from "./ShoppingCartItem";
import { useLocation } from "react-router-dom";

function Navbar() {
  //variable d'état qui contrôle l'affichage du menu
  //initialisé sur false car menu fermé
  const [isOpen, setIsOpen] = useState(false);

  const numberOfItemsInCart = 1;

  const location = useLocation();
  const currentPage = location.pathname;

  console.log("Current page", currentPage);

  const fetchUrlCategoryType = new URLSearchParams(window.location.search);
  const type = fetchUrlCategoryType.get("type");
  console.log(type);

  //navBar avec titre du site, menu burger déroulant
  return (
    <div className="flex fixed top-0 z-10 w-full flex-col items-start ">
      <nav className="flex p-[0.9375rem]  justify-between items-center shrink-0 self-stretch">
        {/* <h3 className="text-lg text-lightMode-text">
          <a href="/">adopte un meuble</a>
        </h3> */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <p className="text-lg">adopte un meuble</p>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {currentPage.includes("category/filter") && (
              <BreadcrumbItem>
                <BreadcrumbSeparator>
                  <p className="text-lg">-&gt;</p>
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/category">
                    <p className="text-lg">{type}</p>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbItem>
            )}
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex items-center gap-5">
          <Sheet>
            <SheetTrigger>
              <svg
                className="hidden sm:flex"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="19"
                viewBox="0 0 24 19"
                fill="none"
              >
                <path
                  d="M19.334 18.0571L23.0007 8.2793"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.66602 18.0571L0.999349 8.2793"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.66602 18.0566H19.3327"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 8.2793H23"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.88867 8.27865C5.88867 8.27865 8.27189 0.945312 11.9998 0.945312C15.7277 0.945312 18.1109 8.27865 18.1109 8.27865"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>votre panier</SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <div className="w-full flex flex-col items-start gap-[3.125rem] pt-[1.5625rem] h-full overflow-auto pb-[10rem]">
                {Array.from({ length: numberOfItemsInCart }, (_, index) => (
                  <ShoppingCartItem />
                ))}
                <div className="w-full flex flex-col items-start gap-y-1">
                  <h4 className="text-lightMode-secondarytext text-2xl font-bold">
                    total -&gt; <span>€500</span>
                  </h4>
                </div>
              </div>
              <Button className="w-[87%] absolute bottom-5 right-0 left-0 mx-auto">
                payer
              </Button>
            </SheetContent>
          </Sheet>

          <div onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg
                width="20"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.7947 1.99575C16.0679 1.72239 16.0679 1.27918 15.7947 1.00581C15.5212 0.732437 15.078 0.732437 14.8046 1.00581L8.29961 7.51083L1.79458 1.00581C1.52122 0.732437 1.07801 0.732437 0.804643 1.00581C0.531265 1.27918 0.531265 1.72239 0.804643 1.99575L7.30966 8.50078L0.804643 15.0057C0.531265 15.2792 0.531265 15.7224 0.804643 15.9958C1.07801 16.2691 1.52122 16.2691 1.79458 15.9958L8.29961 9.49074L14.8046 15.9958C15.078 16.2691 15.5212 16.2691 15.7947 15.9958C16.0679 15.7224 16.0679 15.2792 15.7947 15.0057L9.28957 8.50078L15.7947 1.99575Z"
                  fill="black"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="15"
                viewBox="0 0 20 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.833073 0.599609C0.409658 0.599609 0.0664062 0.942861 0.0664062 1.36628C0.0664062 1.78969 0.409658 2.13294 0.833073 2.13294H19.2331C19.6564 2.13294 19.9997 1.78969 19.9997 1.36628C19.9997 0.942861 19.6564 0.599609 19.2331 0.599609H0.833073ZM0.0664062 7.49961C0.0664062 7.0762 0.409658 6.73294 0.833073 6.73294H19.2331C19.6564 6.73294 19.9997 7.0762 19.9997 7.49961C19.9997 7.92302 19.6564 8.26628 19.2331 8.26628H0.833073C0.409658 8.26628 0.0664062 7.92302 0.0664062 7.49961ZM0.0664062 13.6329C0.0664062 13.2096 0.409658 12.8663 0.833073 12.8663H19.2331C19.6564 12.8663 19.9997 13.2096 19.9997 13.6329C19.9997 14.0563 19.6564 14.3996 19.2331 14.3996H0.833073C0.409658 14.3996 0.0664062 14.0563 0.0664062 13.6329Z"
                  fill="black"
                />
              </svg>
            )}
          </div>
        </div>
      </nav>

      <div className="w-full flex flex-col items-end text-[2rem]">
        {isOpen && (
          <ul
            className="pr-[0.9375rem] flex flex-col items-end"
            onClick={() => setIsOpen(false)}
          >
            <li>
              <a href="/login">connexion</a>
            </li>
            <li>
              <a href="/deconnexion">déconnexion</a>
            </li>
            <li>
              <a href="/sell">vendre</a>
            </li>
            <li>
              <a href="/">recherche</a>
            </li>
            <li>
              <a href="/panier">panier</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
