import React, { useState } from 'react';


function Categories(){

  
  return (
    <div>
     <ul className="text-[1.25rem] not-italique font-normal leading-normal flex-col items-end">
        <li>canapés</li>
        <li>fauteils</li>
        <li>luminaires</li>
        <li>rideaux</li>
        <li>buffets</li>
        <li>lits</li>
        <li>meubles bébé</li>
        <li>tables</li>
        <li>armoires</li>
        {/* Ajoutez d'autres catégories selon vos besoins */}
      </ul>
    </div>
  );
}

export default Categories;