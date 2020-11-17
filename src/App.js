
import './css/App.css';
import HeaderLandingPage from './container/header_landing_page'
import MainPage from './container/main_page'
import MovieInfo from './container/movie_info'
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HeaderLandingPage />
      <div className="pages">
        <BrowserRouter>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/movies/:id" component={MovieInfo} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
