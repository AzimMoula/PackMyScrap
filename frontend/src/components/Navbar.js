import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }
    
    return (
        <nav className="navbar">
            <ul className="nav-left">
                <li className="navL-items">Home</li>
                <li className="navL-items">About Us</li>
                <li className="navL-items">My Bokings</li>
            </ul>
            <div className="logo">PackMyScrap</div>
            <ul className="nav-right">
                {!user && (
                    <>
                        <Link className="navR-items" to="/login">Login</Link>
                        <Link className="navR-items" to="/signup">Sign Up</Link>
                    </>
                )}
                {user && (
                    <div className="logout">
                        <p>{user.email}</p>
                        <button onClick={handleClick} className="navR-items">LogOut</button>
                    </div>
                )}
            </ul>
        </nav>
    );
}
 
export default Navbar;