import { useContext } from "react";
import { MenubarContext } from "../context/MenubarContext";

const Menubar = () => {

    const { menu } = useContext(MenubarContext)

    return (
        <>
            {menu && (
                <div className="menubar">
                    <h2>MENUBAR</h2>
                    <ul>
                        <li className="menu-items">Home</li>
                        <li className="menu-items">Log In</li>
                        <li className="menu-items">Sign Up</li>
                        <li className="menu-items">Request Pickup</li>
                        <li className="menu-items">Misc.</li>
                    </ul>
                </div>
            )}
        </>
    );
}
 
export default Menubar;