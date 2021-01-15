import Footer from './components/footer';
import Navbar from './components/navbar';
import Array from './structure/array';
// import { Nav } from 'reactstrap';

const App = () => {

  const appStyle = {
    width: "80%",
    margin: 'auto',
  }


  return (
    <>
      <Navbar></Navbar>
      <body style={appStyle}>
        <Array></Array>
      </body>
      <footer id="footer" style={{position: 'sticky', bottom: '0', backgroundColor: 'transparent'}}>
      <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
