import React from "react";
import { Button } from "@/components/ui/button"
import { Carousel } from "./ui/carousel";


function ProductPage () {
    return (
        <div className="flex items-center justify-center h-screen" >
            <div className="w-1/2  h-full p-4 bg-red-500">
                
            </div>
            <div className="w-1/2 h-full p-4 bg-green-500">
                <h6 className="flex-col text-lightMode-text font-bold text-2xl ">Canapé Vintage Rétro</h6>
                <h6 className=" text-lightMode-text font-bold text-2xl]">250€</h6>
                <h6 className=" text-lightMode-text font-bold text-2xl]">Jeanne Dupont</h6>
                <div className="w-[2rem] h-[100px] p-1 bg-blue-500">                    
                    <Button className="button p-1">Acheter</Button>
                    <Button className="button">Ajouter au panier</Button>
                </div>
                <div>
                    <h1 className="text-lightMode-text font-bold text-2xl ">Description</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatum accusamus
                         debitis praesentium dolorum,
                         eum totam sit distinctio vero laboriosam, minima ad rem porro. 
                         Dolorem mollitia hic excepturi repellendus aperiam.</h2>
                </div>

                <div>
                    <table className="table-auto-border text-lightMode-text font-bold text-2xl">
                        <thead>
                            <tr>
                                <th className="p-4">état</th>
                                <th className="p-4;">type</th>
                                <th className="p-4">matiére</th>
                                <th className="p-4">couleur</th>
                                <th className="p-4">piéce</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-4">Bon</td>  
                                <td className="p-4">canapé</td>
                                <td className="p-4">cuir</td>
                                <td className="p-4">marron</td>
                                <td className="p-4">salon</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
            

           {/* <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border">{item.id}</td>
              <td className="border">{item.name}</td>
              <td className="border">{item.age}</td>
            </tr>
          ))}
          </tbody>  idée pour aller chercher les id dans les <td></td>*/}
         




        </div>
        
    )
}

export default ProductPage;