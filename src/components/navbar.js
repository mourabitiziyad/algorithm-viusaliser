import '../style/navbar.css';
const Navbar = () => {

  return (
    <header>
        <a style={{fontSize: "25px"}} href="#">AlgoViz</a>
        <nav>
            <ul className="nav__links">
                <li><a href="#">Services</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
        <a className="cta" href="#"><button>Contact</button></a>
    </header>
  );
}

export default Navbar;
