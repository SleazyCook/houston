import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// app
import Navigation from './app/Navigation';
import Footer from './app/Footer';

// containers
import Home from './containers/Home'
import ListView from './containers/ListView';
import About from './containers/About'

function App() {
  return (
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path='/list' element={<ListView />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
