import React, { useEffect, useState } from "react";

function ShoppingCartContainer() {
  const [publications, setPublications] = useState([]);

  const idProduit = 3;
  useEffect(() => {
    async function fetchPublications(id) {
      try {
        const response = await fetch(`http://localhost:3000/api/publication/${id}`);
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des publications");
        }
        const data = await response.json();
        console.log(data)
        setPublications(data);
      } catch (error) {
        console.error("Erreur:", error.message);
      }
    }
    fetchPublications(idProduit);
  }, []);

  async function handleSupprimerPublication(id) {
    try {
      const response = await fetch(`/api/publication/deletePanier/${id}`, {
        method: "DELETE"
      });
      if (!response.ok) {
        throw new Error("Erreur lors de la suppression de la publication du panier");
      }
      console.log("Publication supprimée du panier avec l'ID:", id);
      // Ajoutez ici la logique pour mettre à jour l'état des publications après la suppression
    } catch (error) {
      console.error("Erreur:", error.message);
    }
  }

  return (
    <div>
      {publications.map((publication) => (
        <div key={publication.id} className="w-full flex flex-col items-start gap-y-1">
          <h3 className="text-lightMode-text text-3xl font-bold">{publication.titre}</h3>
          <h4 className="text-lightMode-secondarytext text-2xl font-bold">{publication.prix}</h4>
          <button onClick={() => handleSupprimerPublication(publication.id)} className="text-lightMode-secondarytext text-2xl font-bold underline">
            Supprimer
          </button>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCartContainer;
