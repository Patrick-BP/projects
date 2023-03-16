import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/hero'
import MovieList from './components/MovieList'
import './App.css';


function App() {
  return (
    <div>
      <div id="mainContainer" className="p-b-40">
        <div>
          <Header />
          <Hero />
          <MovieList/>
          </div>
          <Footer />
        

      </div>
    </div>
  );
}

export default App;
