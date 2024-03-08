import React from "react";

function ShoppingCartItem(props) {
  return (
    <div className="w-full flex flex-col items-start gap-y-1">
      <h3 className="text-lightMode-text text-3xl font-bold">
        Canapé Vintage Rétro
      </h3>
      <h4 className="text-lightMode-secondarytext text-2xl font-bold">€250</h4>
      <h4 className="text-lightMode-secondarytext text-2xl font-bold underline">
        supprimer
      </h4>
    </div>
  );
}

export default ShoppingCartItem;
