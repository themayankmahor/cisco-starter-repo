import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IPAddress from './IPAddress';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Exhibit heading="Your Public IPv4 Address">
        <IPAddress version={"v4"}/>
      </Exhibit>

      <Exhibit heading="Your Public IPv6 Address">
        <IPAddress version={"v6"}/>
      </Exhibit>

    </div>
  );
}

export default App;
