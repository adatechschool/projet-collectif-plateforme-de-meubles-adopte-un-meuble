import React from "react";

function Articlepage() {
    return (
        <div className="w-screen h-screen flex">
            <div className="h-full w-full bg-red-500"></div>
            <div className="h-full w-full bg-blue-500">
                <div className="text-lightMode-text font-bold text-2xl">Canapé Vintage Rétro</div>
                <div className="text-lightMode-text font-bold text-xl">€250</div>
                <div className="text-lightMode-text font-bold text-l">Jeanne Dupont</div>
                <button className="text-lightMode-text font-bold text-xl">ajouter au panier</button>
                <div className="text-lightMode-text font-bold text-xl">description</div>
                <div className="text-lightMode-text text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ea libero quod! Aspernatur laboriosam excepturi earum beatae deserunt libero vel nobis hic repudiandae animi voluptatibus nesciunt, officiis est sequi porro voluptate temporibus impedit minus facere labore illum eum quibusdam veritatis. Consequuntur, consequatur laudantium. Facere maiores, ratione harum vitae
                    deserunt velit?
                </div>
                <div className="text-lightMode-text font-bold text-xl">critères</div>
                <div>
                    <table className="table-auto border text-lightMode-text font-bold text-2xl">
                        <thead>
                            <tr>
                                <th className="p-4">État</th>
                                <th className="p-4">Type</th>
                                <th className="p-4">Matière</th>
                                <th className="p-4">Couleur</th>
                                <th className="p-4">Pièce</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-4">Bon</td>
                                <td className="p-4">Canapé</td>
                                <td className="p-4">Cuir</td>
                                <td className="p-4">Marron</td>
                                <td className="p-4">Salon</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default Articlepage;
