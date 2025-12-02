import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import EquipmentList from './components/EquipmentList';

// Main App Component with routing
function App() {
  return (
    <div className="App">
      <header>
        <h1>Sport Equipment Selling App</h1>
        <p>Browse the best sports equipment</p>
      </header>

      <main>
        <Switch>
          <Route path="/" exact component={EquipmentList} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
