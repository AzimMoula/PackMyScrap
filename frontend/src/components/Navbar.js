import menuBar from './menubar'

const Navbar = () => {
    return (
        <nav className="navbar">
            <menuBar />
            <div className="nav-elements">Home</div>
            <div className="nav-elements">About Us</div>
            <div className="nav-elements">My Bokings</div>            
            <div className="nav-sign">Sign In</div>
            <div className="nav-sign">Sign Up</div>
        </nav>
    );
}
 
export default Navbar;