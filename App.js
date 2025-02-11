import logo from './logo.svg';
import './App.css';
import Mycomponent from './Mycomponent';
import Fruitslist from './Fruitslist';
import Fromdisplay from './Fromdisplay';
import Form from './Form';
// import Hooktask1 from './Hooktask1';
import{BrowserRouter,Route,Routes} from "react-router"
import Routertask1 from './Routertask1';
import Home from './Home';
import About from './About';
function App() {
 
  return (
    
    <div className="App">
      {/* <h3> "Wellcome to JSX"</h3>
      <Routertask1/>
       <BrowserRouter>
  <Routes>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
  </Routes>
  </BrowserRouter> */}
      
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Mycomponent/> */}
      <Fruitslist/>
      {/* <Fromdisplay/> */}
      {/* <Form/> */}
      {/* <Hooktask1/> */}
      

  {/* <Home /> */}
    </div>
  );
}

export default App;
