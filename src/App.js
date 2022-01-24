import './App.css';
import MainContent from './components/MainContent';
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import Loader from "./components/Loader"

function App() {
  return (
    <div className='section'>
       <NavBar/>
       <MainContent/>
       <Footer/>
       <Loader/>
    </div>
  );
}

export default App;
