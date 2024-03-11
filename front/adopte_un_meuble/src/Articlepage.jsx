import React, { useState, useEffect } from "react";

function Articlepage() {
    const [meuble, setMeuble] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "http://localhost:3000/api/publication/2"
            );

            const publications = await response.json();
            const publication = publications[0];

            const meubleData = {
                titre: publication.titre,
                pseudoUtilisateur: publication.Utilisateur.pseudo,
                prix: publication.prix,
                description: publication.description,
                photos: publication.photos,
                type: publication.Type.type,
                couleur: publication.Couleur.couleur,
                matiere: publication.Matière.matière,
                etatMeuble: publication.État_Meuble.état,
                dimensions: publication.Dimensions,
                piece: publication.Pièce.pièce,
            };

            setMeuble(meubleData);
        };
        console.log(fetchData());
        fetchData();
    }, []);

    if (!meuble) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="w-screen h-screen flex">
            <div className="h-full w-full bg-red-500">

            </div>

            <div className="h-full w-full bg-500  px-[50px]">
                <div className="w-auto h-auto flex-col justify-start items-start gap-[5px] inline-flex mt-20">
                    <div className="text-lightMode-text font-bold text-2xl">{meuble.titre}</div>
                    <div className="text-lightMode-text font-bold text-xl">€{meuble.prix}</div>
                    <div className="text-lightMode-text font-bold text-l">{meuble.pseudoUtilisateur}</div>
                    <div className="mt-5"><button className="text-lightMode-text font-bold text-xl underline" onClick="href='/panier'">ajouter au panier</button></div>
                </div>

                <div className="w-auto h-auto flex-col justify-start items-start gap-[5px] flex mt-5">
                    <div className="text-lightMode-text font-bold text-xl">description</div>
                    <div className="text-lightMode-text text-l">{meuble.description}</div>
                </div>

                <div className="w-auto h-auto flex-col justify-start items-start gap-[20px] inline-flex mt-10">
                    <div className="text-lightMode-text font-bold text-xl">critères</div>
                    <table className="table-auto font-bold">
                        <thead>
                            <tr>
                                <th className="p-4 text-gray-500 text-l">état</th>
                                <th className="p-4 text-gray-500 text-l">type</th>
                                <th className="p-4 text-gray-500 text-l">matière</th>
                                <th className="p-4 text-gray-500 text-l">couleur</th>
                                <th className="p-4 text-gray-500 text-l">pièce</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-4">{meuble.etatMeuble}</td>
                                <td className="p-4">{meuble.type}</td>
                                <td className="p-4">{meuble.matiere}</td>
                                <td className="p-4">{meuble.couleur}</td>
                                <td className="p-4">{meuble.piece}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Articlepage;
