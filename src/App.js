import React from 'react';
import logo from './logo.svg';
import './App.css';
import Autocomplete from "./autocomplete";
import Table from "./table";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Search for a country name
        </h1>
        <Autocomplete onSelectItem={(item)=>{alert('Selected: '+item)}}/>
        <Table></Table>
      </header>
        <Autocomplete onSelectItem={(item)=>{alert('Selected: '+item)}}/>
        <Table></Table>
    </div>
  );
}

export default App;
