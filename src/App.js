import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Footer from './Components/Footer';
import HomePage from './Components/Home';
import NavigationBar from './Components/NavBar';
import Another from './Components/Another';
import AboutUS from './Components/AboutUs';
import NotFounded from './Components/404';
import SignIn from './Components/Sign-in-page';
import LogIn from './Components/Log-in-page';

function App() {
  return (
    <div className="App text-center">
      <BrowserRouter>
      <NavigationBar />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/another' element={<Another />} />
          <Route path='/aboutUs' element={<AboutUS />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/Login' element={<LogIn />} />


          <Route path='*' element={<NotFounded />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
