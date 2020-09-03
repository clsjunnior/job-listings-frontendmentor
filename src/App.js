import React, { useState, useEffect } from 'react';
import JobPost from './components/JobPost';
import Filter from './components/Filter';
import './style.scss';
import { jobList } from './utils/jobs';

const App = () => {
  const [list, setList] = useState([]);
  const [itemsFilter, setItemFilter] = useState([]);

  function setJobs() {
    setList(jobList);
  }

  function filter(label, type) {
    const object = [...itemsFilter, { label: label, type: type }];
    setItemFilter(object);
    console.log(list);

    const filterData = list.filter((item, key) => {
      if (type === 'role') return item.role === label;
      if (type === 'level') return item.level === label;
      if (type === 'languages')
        return item.languages.find((f) => {
          return f === label;
        });
      if (type === 'tools')
        return item.tools.find((t) => {
          return t === label;
        });
    });

    console.log(filterData);

    setList(filterData);
  }

  useEffect(() => {
    setJobs();
  }, []);

  return (
    <div className="App">
      <section className="header"></section>

      <section className="list-jobs">
        {itemsFilter.length > 0 && <Filter itemsFilter={itemsFilter} />}

        {list.map((item, key) => {
          return (
            <React.Fragment key={key}>
              <JobPost job={item} onFilter={filter} />
            </React.Fragment>
          );
        })}
      </section>
    </div>
  );
};

export default App;
