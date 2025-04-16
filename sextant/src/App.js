import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Exhibit heading="This is an Exhibit">
        <p>Here's Some Samplecontent inside the exhibit component.</p>
      </Exhibit>
    </div>
  );
}

export default App;
