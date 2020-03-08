import React from 'react';
import './App.css';
import Nav from './Components/nav.js'
import Footer from './Components/footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Components/slider';

function App() {
  return (
    <div className="App">
      <Nav />
      <Slider /> 
      <Footer />
    </div>
  );
}

export default App;
