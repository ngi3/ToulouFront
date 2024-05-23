import React from "react";
// import './Menu.css'
import logo from "../Assets/toulou.svg"
// import dashboard from "../Assets/dashboard.svg"
// import rapport from "../Assets/rapport.svg"
// import analyse from "../Assets/analyse.svg"
// import archive from "../Assets/archive.svg"
// import parametre from "../Assets/parametre.svg"
import { MENU_LINKS } from "../../lib/consts/navigation";
function Menu() {
  return (
    <aside className="min-h-screen p-3 flex flex-col items-center fixed top-0">
      <div >
        <img  src={logo} />
      </div>

      <nav>
        {MENU_LINKS.map((item) => (
          <a className="p-4 " href={item.chemin}>
            <img className="my-3" src={item.image} alt="" />
          </a>
        ))}
        {/* <img src={dashboard} />
          <a href=""><img src={rapport} alt="" /></a>
          <img src={analyse} alt="" />
          <img src={archive}/>
          <img src={parametre} alt="" />  */}
      </nav>
    </aside>
  );
}

export default Menu;
