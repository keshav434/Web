import './App.css';
import Nav from './components/Nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Nav />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<h1>Update Product Component</h1>} />
       </Routes>
       </BrowserRouter>   
    </div>
  );
}

export default App;
