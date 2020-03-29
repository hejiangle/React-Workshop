import React from 'react';
import './App.css';
import { FormComponent } from './components/FormComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Jiangle's React demo.
        </p>
      </header>
      <body>
        <div>
          <FormComponent formTitle="Personal Info"/>
        </div>
      </body>
    </div>
  );
}

export default App;
