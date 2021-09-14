import Row from './components/Row.jsx'
import './css/App.css';
import requests from "./request"

function App() {
  return (
    <div className="app">
      <Row title="Trending Now" fetchURL={requests.trendingNow} />
    </div>
  );
}

export default App;
