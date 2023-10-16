
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './component/Home';
import SingleMovie from './component/SingleMovie';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={ <SingleMovie />} />
    </Routes>
  );
}

export default App;
