import logo from './logo.svg';
import './App.css';
import MovieItem from './MovieItem';
import MoviesList from './MoviesList';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <MovieItem />
      <MoviesList />
      <Header />
  
    </div>
  );
}

export default App;
