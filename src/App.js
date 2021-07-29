import { Route, BrowserRouter as Router } from 'react-router-dom';
import PageHome from './pages/Home'
import PageMovieDetail from './pages/MovieDetail';
import PageMovieResult from './pages/Results'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={PageHome}/>
        <Route path="/results" component={PageMovieResult}/>
        <Route path="/movie/:id" component={PageMovieDetail}/>
      </div>
    </Router>
  );
}

export default App;
