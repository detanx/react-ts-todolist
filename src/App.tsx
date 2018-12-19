import * as React from 'react'
import TSTodoList from '../src/containers/TSTodoList'
import TestAntd from '../src/components/TestAntd'
import './App.css'
import './style/main.css'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <TSTodoList />
        <TestAntd />
      </div>
    );
  }
}

export default App;