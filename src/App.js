import { Route, Routes } from 'react-router-dom';
import './App.css';
import Catalogue from './components/Catalogue';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Catalogue />} />
        <Route path='/movie/:movie_id' element={<MovieDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
