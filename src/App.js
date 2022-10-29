import './App.css';
import React, { useEffect, useState } from 'react';
import MainContent from './components/main-content';

function App() {

  const [listings, setListings] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    fetch('properties.json')
      .then(res => res.json())
      .then(data => setListings(data))
      .catch(err => console.log(err));
  }, []);

  const searchListing = (listings) => {
    return listings.filter(listing => listing.city_name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1 || listing.title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1);
  }

  return (
    <div className="col-lg-12">
      <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
 />
        <div class="row">
          <MainContent listings={searchListing(listings)}></MainContent>
        </div>
      </div>
  )
}
function SearchBar({
  filterText,
  onFilterTextChange,
}) {
  return (
    <div className="row navbar-style">
      <div className="col-lg-1 center-all">
        <img src="logo.png" alt="..." height="85px"></img>
      </div>

      <div className="col-lg-10 header">
        <form className="search-header">
          <div className="input-group">
            <input type="text" className="form-control" value={filterText} placeholder="Find your Abode..." 
            onChange={(e) => onFilterTextChange(e.target.value)} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default App;
