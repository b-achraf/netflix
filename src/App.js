import './css/App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Rows from './components/Rows';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Rows />
    </div>
  );
}

export default App;
