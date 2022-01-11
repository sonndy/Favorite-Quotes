import OldApp from "./components/OldApp";
import FavoriteQuotes from "./components/FavoriteQuotes";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


const App = ()=> {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<OldApp/>}/>
        <Route exact path="/favorite" element={<FavoriteQuotes/>}/>
      </Routes>
      
    </Router>
  )
}

export default App