import React, { useState, useEffect } from 'react';
import JobPost from './components/JobPost';
import Filter from './components/Filter';
import './style.scss';
import { jobList } from './utils/jobs';

function App() {
  const [list, setList] = useState([]);

  function setJobs() {
    setList(jobList);
  }

  useEffect(() => {
    setJobs();
  }, []);

  return (
    <div className="App">
      <section className="header"></section>

      <section className="list-jobs">
        <Filter />
        {list.map((item, key) => {
          return (
            <React.Fragment key={key}>
              <JobPost job={item} />
            </React.Fragment>
          );
        })}
      </section>
    </div>
  );
}

export default App;
