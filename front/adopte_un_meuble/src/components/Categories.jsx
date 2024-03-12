import React, { useState } from 'react';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zfrowkmhwhnhmyzwxlez.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpmcm93a21od2huaG15end4bGV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1NTg5NjUsImV4cCI6MjAyNTEzNDk2NX0.6HS7PaiqkOQtN3JPNCCBAW2058bJNQoAuECWeurKlYM";
const supabase = createClient(supabaseUrl, supabaseKey);


function Categories(){

// const [selectedCategory, setSelectedCategory] = useState('');
// //const history = useHistory();

  // const handleCategoryClick = async (category) => {
  //   // setSelectedCategory(category);
  //   // Requête à Supabase pour récupérer les produits de la catégorie sélectionnée
  //   const { data, error } = await supabase
  //     .from('produits')
  //     .select('*')
  //   //   .eq('categorie', category);

  //   if (error) {
  //     console.error('Erreur lors de la récupération des produits:', error.message);
  //   } else {
  //     // Rediriger vers la page des produits avec la catégorie sélectionnée dans les paramètres de l'URL
  //     history.push(`/produits/${category}`, { produits: data });
  //   }

  }

  };


  
  return (
    <div>
     <ul className="text-[1.25rem] not-italique font-normal leading-normal flex-col items-end">
        <li onClick={() => handleCategoryClick('canapé')}>canapés</li>
        <li >fauteils</li>
        <li>luminaires</li>
        <li>rideaux</li>
        <li>buffets</li>
        <li>lits</li>
        <li>meubles bébé</li>
        <li>tables</li>
        <li>armoires</li>
    </ul>
    </div>
  );
}

export default Categories;