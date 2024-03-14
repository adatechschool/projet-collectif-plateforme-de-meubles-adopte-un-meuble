import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useNavigate } from "react-router-dom";


function Articlepage() {
    const navigateTo = useNavigate();
    const [meuble, setMeuble] = useState(null);
    const [id, setId] = useState(null);


    useEffect(() => {
        const fetchId = async () => {
            const fetchUrlCategoryType = new URLSearchParams(window.location.search);
            const fetchedId = fetchUrlCategoryType.get("id");
            setId(fetchedId);
        };


        fetchId();
    }, []);


    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const response = await fetch(`http://localhost:3000/api/publication/${id}`);
                    const publications = await response.json();
                    const publication = publications[0];


                    const meubleData = {
                        titre: publication.titre,
                        pseudoUtilisateur: publication.Utilisateur.pseudo,
                        vendeurId: publication.Utilisateur.id,
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
                } catch (error) {
                    console.error("Erreur lors de la récupération des données:", error);
                }
            };


            fetchData();
        }
    }, [id]);


    const ajouterAuPanier = () => {


        const date = new Date().toISOString();
        const idUser = sessionStorage.getItem("user");
        const idPublication = id;
        const idVendeur = meuble ? meuble.vendeurId : null;


        if (!idUser || !idPublication || !idVendeur) {
            alert("Impossible d'ajouter cet au panier: veuillez vous connecter.");
            navigateTo("/login");
            return;
        }


        fetch("http://localhost:3000/api/publication/addpanier", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                date: date,
                idUser: idUser,
                idPublication: idPublication,
                idVendeur: idVendeur,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erreur lors de la requête");
                }
                return response.json();
            })
            .then((data) => {
                alert("Article ajouté au panier avec succès !");
            })
            .catch((error) => {
                console.error("Erreur:", error);
            });
    };


    if (!meuble) {
        return <div>Chargement...</div>;
    }


    return (
        <div className="w-screen h-screen flex overflow-hidden bg-lightMode-background">
            <Navbar className="overflow-hidden" />
            <div className="h-auto w-1/2 overflow-hidden flex items-center ">
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
                    className="w-full max-w-s"
                >
                    <CarouselContent className=" -mt-50 - h-[20rem] items-center ">
                        {meuble.photos != null ? (
                            meuble.photos.map((photo, index) => (
                                <CarouselItem className="pt-1" key={photo}>
                                    <div className="flex items-center">
                                        <img className="h-[20rem] items-center basis-1/3 w-full" src={"http://localhost:3000/photos/" + photo} alt={`Image ${photo}`} />
                                    </div>
                                </CarouselItem>
                            ))
                        ) : (
                            <div className="flex items-center">
                                <img className="h-[20rem] items-center basis-1/3 w-full" src={"http://localhost:3000/photos/logo.png"} alt="Image par défaut" />
                            </div>
                        )}
                    </CarouselContent>
                </Carousel>
            </div>


            <div className="flex flex-col gap-14 py-24 h-full w-1/2 px-11 overflow-scroll">
                <div className="w-auto h-auto flex-col justify-start items-start gap-5 inline-flex">
                    <h1 className="text-lightMode-text font-bold text-3xl">{meuble.titre}</h1>
                    <h2 className="text-lightMode-text font-bold text-2xl">€{meuble.prix}</h2>
                    <h3 className="text-lightMode-secondarytext font-semibold text-xl">{meuble.pseudoUtilisateur}</h3>
                </div>
                <div className="">
                    <button className="text-lightMode-text font-bold text-xl underline hover:-rotate-3 hover:text-lightMode-secondarytext hover:underline origin-bottom-left transition" onClick={ajouterAuPanier}>
                        ajouter au panier
                    </button>
                </div>


                <div className="w-auto flex-col justify-start items-start gap-5 flex">
                    <h3 className="text-lightMode-text font-bold text-xl">description</h3>
                    <div className="text-lightMode-text text-lg">{meuble.description}</div>
                </div>


                <div className="w-full flex flex-col gap-5">
                    <h3 className="text-lightMode-text font-bold text-xl">critères</h3>
                    <table className="table-auto w-full">
                        <thead>
                            <tr className="text-left *:text-lightMode-secondarytext *:font-semibold *:text-lg">
                                <th>état</th>
                                <th>type</th>
                                <th>matière</th>
                                <th>couleur</th>
                                <th>pièce</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-left *:text-lightMode-text *:font-semibold *:text-lg">
                                <td>{meuble.etatMeuble}</td>
                                <td>{meuble.type}</td>
                                <td>{meuble.matiere}</td>
                                <td>{meuble.couleur}</td>
                                <td>{meuble.piece}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-full flex flex-col items-start gap-5">
                    <h3 className="text-lightMode-text font-bold text-xl">dimensions</h3>
                    <table className="table-auto w-full">
                        <thead>
                            <tr className="text-left w-full *:text-lightMode-secondarytext *:font-semibold *:text-lg">
                                <th>hauteur</th>
                                <th>largeur</th>
                                <th>longueur</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-left *:text-lightMode-text *:font-semibold *:text-lg">
                                <td>{meuble.dimensions.hauteur} cm</td>
                                <td>{meuble.dimensions.largeur} cm</td>
                                <td>{meuble.dimensions.longueur} cm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}


export default Articlepage;