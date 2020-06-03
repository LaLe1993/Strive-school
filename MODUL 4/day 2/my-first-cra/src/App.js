import React from 'react';
//import './App.css';
import NavBar from './components/MyNav';
import Welcome from './components/Welcome';
import LatestRelease from './components/LatestRelease';
import Footer from './components/MyFooter';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <h1 className="my-3">Latest Release</h1>
      <LatestRelease />
      <Footer />
    </div>
  );
}

export default App;
