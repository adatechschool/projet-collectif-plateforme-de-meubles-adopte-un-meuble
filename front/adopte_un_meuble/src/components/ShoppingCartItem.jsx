import React, { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast"
import { Link } from "react-router-dom";

function ShoppingCartContainer() {
//récupération session users
  const userData = sessionStorage.getItem("user");
  
  const userDataParse = JSON.parse(userData);
  if(userDataParse == null) {
    return <Link to="/login">Se connecter</Link>;
  }
  const idUser = userDataParse.id;
  console.log(idUser);
  


// const idUser = "a4913f0f-7750-44ad-ae95-c3b7ec4b68de";

  const { toast } = useToast()
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    async function fetchPublications(id) {
      try {
        const response = await fetch(`http://localhost:3000/api/publication/panier/${id}`);
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des publications");
        }
        const data = await response.json();
        // console.log(data)
        setPublications(data);
      } catch (error) {
        console.error("Erreur:", error.message);
      }
    }
    fetchPublications(idUser);
  }, []);

async function handleSupprimerPublication(id,titre) {
    try {
      const response = await fetch(`http://localhost:3000/api/publication/deletePanier/${id}`, {
        method: "DELETE"
      });
      if (!response.ok) {
        throw new Error("Erreur lors de la suppression de la publication du panier");
      }
      setPublications(prevPublications => prevPublications.filter(publication => publication.id !== id));
      toast({
        title: "Information: ", 
        description: `L'article "${titre}" a bien été supprimé du panier`,
      })

    } catch (error) {
      console.error("Erreur:", error.message);
    }
  }

  return (
    <div>
      <div>
        {publications.map((publication) => (
        <div key={publication.id} className="w-full flex flex-col items-start gap-y-1">
          <h3 className="text-lightMode-text text-3xl font-bold">{publication.Publications.titre}</h3>
          <h4 className="text-lightMode-secondarytext text-2xl font-bold">{publication.Publications.prix} €</h4>
          <button onClick={() => handleSupprimerPublication(publication.id, publication.Publications.titre)} className="text-lightMode-secondarytext text-2xl font-bold underline">
            Supprimer
          </button>
        </div>
      ))}
      </div>
      <div>
          <div className="text-lightMode-secondarytext text-2xl font-bold pt-[10rem]">
            <h4>
              total -&gt; <span>{publications.reduce((acc, current) => (acc + current.Publications.prix),0)}</span>
            </h4>
          </div>
      </div>
    </div>
  );
}

export default ShoppingCartContainer;
