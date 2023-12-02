import { useContext } from "react";
import { MenubarContext } from "../context/MenubarContext";

const Navbar = () => {
    const { menu, toggleMenu } = useContext(MenubarContext)

    return (
        <div>
            <nav className="navbar">
                <ul className="nav-left">
                    <li className="menu" onClick={() => toggleMenu(menu)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#03456b" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                    </li>
                    <li className="nav-elements">Home</li>
                    <li className="nav-elements">About Us</li>
                    <li className="nav-elements">My Bokings</li>
                </ul>
                <ul className="nav-right">
                    <li className="nav-sign">Sign In</li>
                    <li className="nav-sign">Sign Up</li>
                </ul>
            </nav>
        </div>
    );
}
 
export default Navbar;