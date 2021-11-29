import logo from './logo.svg';
import './App.css';
import  Home  from './components/Home';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './resources/css/main.css';
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
      <Home/>
      <Welcome/>
      React app
    </div>
  );
}

export default App;
