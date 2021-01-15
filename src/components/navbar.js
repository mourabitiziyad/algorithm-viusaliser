import '../style/navbar.css';
import { AiFillGithub } from 'react-icons/ai'
const Navbar = () => {

  return (
    <>
    <header>
        {/* <a style={{fontSize: "25px"}} href="#">AlgoViz</a> */}
        <a style={{fontSize: '20px'}} href="#">Algo Visualiser</a>
        {/* <nav>
            <ul className="nav__links">
                <li><a href="#">Arrays</a></li>
                <li><a href="#">Graphs</a></li>
                <li><a href="#">Trees</a></li>
            </ul>
        </nav> */}
        {/* <a className="cta" href="#"><button>Contact</button></a> */}
        <a style={{fontSize: '30px'}} href="https://github.com/mourabitiziyad"> <AiFillGithub></AiFillGithub></a>
    </header>
    </>
  );
}

export default Navbar;
