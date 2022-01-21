import { Routes, Route } from 'react-router-dom';

import './App.css';
import Categories from '../Categories';
import Profile from './../Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/categories/:id" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
