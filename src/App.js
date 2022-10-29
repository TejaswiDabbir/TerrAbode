import './App.css';
import React, {useEffect, useState} from 'react';
import Card from './components/card';

function App() {
  return (
    <div class="col-lg-12">
      <div class="row">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  )
}

export default App;
