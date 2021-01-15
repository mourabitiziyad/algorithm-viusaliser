import '../style/navbar.css';
import { AiFillGithub } from 'react-icons/ai'
import { useEffect } from 'react';
const Footer = () => {
  useEffect (() => {
    document.getElementById('footer').style.backgroundColor = "transparent"
  }, [])
  return (
    <div id="footer">
    <header>
        {/* <a style={{fontSize: "25px"}} href="#">AlgoViz</a> */}
        <a style={{fontSize: '30px'}} href="https://github.com/mourabitiziyad"> <AiFillGithub></AiFillGithub></a>
        <p className="cta">Ziyad Mourabiti</p>
    </header>
    </div>
  );
}

export default Footer;
