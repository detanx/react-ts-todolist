import * as React from 'react';
import TSTodoList from '../src/containers/TSTodoList'
import './App.css'
import './style/main.css'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <TSTodoList />
      </div>
    );
  }
}

export default App;