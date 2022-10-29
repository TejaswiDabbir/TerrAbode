import React from 'react'
import Card from './card';

const MainContent = (props) => {
  return (
    <div className="row">
        {props.listings.map((listing,index) => (
            <Card listing={listing} cardno={index+1} key={index}></Card>
        ))}
    </div>
  )
};

export default MainContent