import React from 'react'
import Card from './card';

const MainContent = (props) => {
  return (
    <div class="row">
        {props.listings.map((listing) => (
            <Card listing={listing}></Card>
        ))}
    </div>
  )
};

export default MainContent