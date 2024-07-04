import logo from './logo.svg';
import './App.css';

import FirstComponent from './components/FirstComponent';
import Images from './components/Images';
import Hooks from './components/Hooks';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container';


function App() {

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Hello World</h1>

      <FirstComponent/>
      <Images/>
      <Hooks/>
      <List/>
      <RenderCond x={8} y={10}/>
      <Fragment />

      <Container>
        <h1>Este e filho de Container</h1>
      </Container>
      
      







      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
