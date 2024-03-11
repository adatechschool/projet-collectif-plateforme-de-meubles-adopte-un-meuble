import React, { useEffect, useState } from "react";

function ShoppingCartContainer() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    async function fetchPublications() {
      try {
        const response = await fetch("/api/publication");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des publications");
        }
        const data = await response.json();
        setPublications(data);
      } catch (error) {
        console.error("Erreur:", error.message);
      }
    }
    fetchPublications();
  }, []);

  async function handleSupprimerPublication(id) {
    console.log("Supprimer publication avec l'ID:", id);
    // Ici, vous pouvez ajouter la logique pour supprimer la publication
  }

  return (
    <div>
      {publications.map((publication) => (
        <div key={publication.id}  className="w-full flex flex-col items-start gap-y-1">
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

