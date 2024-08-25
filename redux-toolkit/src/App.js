import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='container'>
          
        </div>
        <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/movie/:imdbID' element={<MovieDetail/>}/>
        <Route path='/*' element={<PageNotFound/>}/>  
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
