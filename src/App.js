import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { ItemsPage } from './Component/ItemsPage';
import { ItemPage } from './Component/ItemPage';
import './App.css';
import { ItemsProvider } from "./Provider/ItemsProvider";

function App() {
  return (
    <ItemsProvider>
      <Router>
        <Routes>
          <Route path="/item/:itemId" element={ <ItemPage /> } />
          <Route path="/" element={ <ItemsPage /> } />
        </Routes>
      </Router>
    </ItemsProvider>
  );
}

export default App;
