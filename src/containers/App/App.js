import { Routes, Route } from 'react-router-dom';

import './App.css';
import CategoriesList from '../CategoriesList';
import Profile from './../Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/list/:id" element={<CategoriesList />} />
      </Routes>
    </div>
  );
}

export default App;
