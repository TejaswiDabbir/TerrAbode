import './App.css';
import React, {useEffect, useState} from 'react';
import MainContent from './components/main-content';

function App() {

  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('properties.json')
      .then(res => res.json())
      .then(data => setListings(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div class="col-lg-12">
      <div class="row">
        <MainContent listings= {listings}></MainContent>
      </div>
    </div>
  )
}

export default App;
