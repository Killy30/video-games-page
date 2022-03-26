import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home'
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
