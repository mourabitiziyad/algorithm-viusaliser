import '../style/navbar.css';
const Navbar = () => {

  return (
    <>
    <header>
        {/* <a style={{fontSize: "25px"}} href="#">AlgoViz</a> */}
        <a href="#">Algo Visualiser</a>
        <nav>
            <ul className="nav__links">
                <li><a href="#">Arrays</a></li>
                <li><a href="#">Graphs</a></li>
                <li><a href="#">Trees</a></li>
            </ul>
        </nav>
        <a className="cta" href="#"><button>Contact</button></a>
    </header>
    </>
  );
}

export default Navbar;
