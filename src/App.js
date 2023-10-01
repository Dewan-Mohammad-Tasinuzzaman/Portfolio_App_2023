
import './App.css';
import Home from './components/views/Home';
import Nav from './components/navigation/Nav';



function App() {
  return (
    <div className="App">


      {/* Different Pages Displayed based on Routes */}
      <Home />



      {/* Bottom Nav Bar - Fixed - Stays on Every Page */}
      <Nav />


    </div>
  );
}

export default App;
