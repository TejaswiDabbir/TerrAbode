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
    <div className="col-lg-12">
      <div className="row">
        <MainContent listings= {listings}></MainContent>
      </div>
    </div>
  )
}

export default App;
