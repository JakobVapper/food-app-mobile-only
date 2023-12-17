import './App.css';
import Main from './components/Main';
import Dish from './pages/Dish';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Main />
      <Routes>
        <Route path="/dish" element={<Dish />} />
      </Routes>
    </Router>
  );
}

export default App;
