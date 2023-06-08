import './App.css';
import data from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { useState } from 'react';

function App() {

const [countries, setCountries] = useState(data);

  return <div className="App">
    <Navbar />
    <CountriesList countries={countries}/>
  </div>;
}
export default App;
