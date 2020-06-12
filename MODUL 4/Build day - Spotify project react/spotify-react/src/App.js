import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Artist from './components/Artist';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Artist />
      <Footer />
    </div>
  );
}

export default App;
