
import './css/App.css';
import HeaderLandingPage from './components/header_landing_page'
import SearchBar from './components/search_bar'
import Results from './components/results'

function App() {
  return (
    <div className="App">
      <HeaderLandingPage />
      <SearchBar />
      <Results />
    </div>
  );
}

export default App;
