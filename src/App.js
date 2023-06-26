import logo from "./logo.svg";
import "./App.css";
import JobContainer from "./JobContainer";
import data from "./data.json";
import { nanoid } from "nanoid";

function App() {
  const jobListing = data.map((company) => {
    return <JobContainer key={nanoid} job={company} />;
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Job Listing</p>
      </header>
      <div className="job-listing">{jobListing}</div>
    </div>
  );
}

export default App;
