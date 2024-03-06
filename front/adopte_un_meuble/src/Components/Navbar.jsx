import {useState} from "react";
//import MenuBurgerIcon from '../assets/menuBurger.svg';
//import CrossMenuBurgerIcon from '../assets/crossMenuBurger.svg';

function Navbar(){
    //variable d'état qui contrôle l'affichage du menu
    //initialisé sur false car menu fermé
   const [isOpen, setIsOpen] = useState(false);


   return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'X' : '≡'}
      </div>
      {isOpen && (
        <ul className="nav-links">
          <li><a href="/connexion" onClick={() => setIsOpen(false)}>connexion</a></li>
          <li><a href="/vendre" onClick={() => setIsOpen(false)}>vendre</a></li>
          <li><a href="/recherche" onClick={() => setIsOpen(false)}>recherche</a></li>
          <li><a href="/panier" onClick={() => setIsOpen(false)}>panier</a></li>
        </ul>
      )}
    </nav>
  );
      }
    
    export default Navbar;