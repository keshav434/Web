import './App.css';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom'; // No need to import BrowserRouter here
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<h1>Update Product Component</h1>} />
      </Routes>
    </div>
  );
}

export default App;

