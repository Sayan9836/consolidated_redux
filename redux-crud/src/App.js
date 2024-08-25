import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Posts/>} />
        <Route path='/createpost' element={<CreatePost/>}/>
      </Routes>
    </div>
  );
}

export default App;
