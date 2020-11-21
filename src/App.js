
import './css/App.css';
import HeaderLandingPage from './container/header_landing_page';
import MainPage from './container/main_page';
import MovieInfo from './container/movie_info';
import { HashRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HeaderLandingPage />
      <div className="pages">
        <HashRouter basename={process.env.PUBLIC_URL} >
          <Route exact path="/" component={MainPage} />
          <Route exact path="/movies/:id" component={MovieInfo} />
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
