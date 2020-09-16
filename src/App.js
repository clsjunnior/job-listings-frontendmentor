import React, { useState, useEffect } from 'react';
import { FiHeart } from 'react-icons/fi';
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

  function filter(label) {
    if (itemsFilter.filter((i) => i.label === label).length === 0)
      setItemFilter([...itemsFilter, { label: label }]);

    const params = { label: label };
    filterData(params);
  }

  function filterData(obj) {
    const { label } = obj;

    const filterData = list.filter((job) => {
      return (
        job.role === label ||
        job.level === label ||
        job.languages.includes(label) ||
        job.tools.includes(label)
      );
    });
    setList(filterData);
  }

  function removeFilter(obj) {
    const { label } = obj;
    const remove = itemsFilter.filter((item) => {
      return item.label !== label;
    });

    setItemFilter(remove);

    let jobFilter = jobList.filter((job) => {
      return remove.every((c) => {
        return (
          job.role === c.label ||
          job.level === c.label ||
          job.languages.includes(c.label) ||
          job.tools.includes(c.label)
        );
      });
    });

    if (remove.length === 0) setList(jobList);
    else setList(jobFilter);
  }

  function clearFilter() {
    setItemFilter([]);
    setList(jobList);
  }

  useEffect(() => {
    setJobs();
  }, []);

  return (
    <div className="App">
      <section className="header"></section>

      <section className="list-jobs">
        {itemsFilter.length > 0 && (
          <Filter
            itemsFilter={itemsFilter}
            clearFilter={clearFilter}
            removeFilter={removeFilter}
          />
        )}
        {list.map((item, key) => {
          return (
            <React.Fragment key={key}>
              <JobPost job={item} onFilter={filter} />
            </React.Fragment>
          );
        })}
      </section>
      <footer>
        <div>
          Feito com <FiHeart /> por{' '}
          <a href="https://github.com/clsjunnior" target="_blank">
            Celso Junior
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
