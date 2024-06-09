import './App.css';
import Nav from './components/Nav-bar';
import Error from './Footer'

function App() {
  return (
    <div className="App">
      <Nav/>
      <div style={{background:'rgb(221, 221, 221)' , height:'1000px', width:'100%'}}></div>
      <Error/>
    </div>
  );
}


export default App;
