import {useState} from "react";
//import MenuBurgerIcon from '../assets/menuBurger.svg';
//import CrossMenuBurgerIcon from '../assets/crossMenuBurger.svg';

function Navbar(){
   const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
    return(
        <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="menu-icon" onClick={() => toggleMenu}>
        <i>{isOpen ? 'X' : '≡'}</i>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`} onClick={closeMenu}>
        <li><a href="/connexion">connexion</a></li>
        <li><a href="/vendre">vendre</a></li>
        <li><a href="/recherche">recherche</a></li>
        <li><a href="/panier">panier</a></li>
      </ul>
    </nav>

    );


}

export default Navbar;