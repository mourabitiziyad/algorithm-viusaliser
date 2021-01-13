import Navbar from './components/navbar';
import Array from './structure/array';
// import { Nav } from 'reactstrap';

const App = () => {

  const appStyle = {
    width: "80%",
    margin: 'auto'
  }


  return (
    <>
      <Navbar></Navbar>
      <body style={appStyle}>
        <Array></Array>
      </body>
    </>
  );
}

export default App;
