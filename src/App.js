import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Router, Routes } from 'react-router';
import Home from './pages/Home';
import Footer from './components/Footer';
import Movie from './components/Popular';
import MovieDetail from "./pages/MovieDetail"
import TopPage from './pages/TopPage';
import Upcoming from './pages/Upcoming';

function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="movies/top_rated" element={<TopPage />}></Route>
        <Route path="movies/upcoming" element={<Upcoming />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
