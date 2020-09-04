import React, { useState, useEffect, useCallback } from 'react';
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
    const params = { label: label, type: type };
    filterData(params, 'add');
  }

  function filterData(obj, test){
    console.log(obj)
    const {label, type} = obj;
    if(test === 'add'){
      const filterData = list.filter((item) => {
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
      setList(filterData);
    }else{
      
      const filterData = list.filter((item) => {
        if (type === 'role') return item.role !== label;
        if (type === 'level') return item.level !== label;
        if (type === 'languages')
          return item.languages.find((f) => {
            return f !== label;
          });
        if (type === 'tools')
          return item.tools.find((t) => {
            return t !== label;
          });
      });
      console.log('remove', filterData)
      setList(filterData);
    }
  }

  function removeFilter(obj){
    const { label, type } = obj;
    const params = { label: label, type: type };
    const remove = itemsFilter.filter(item => { return item.label !== label});
    setItemFilter(remove);
    console.log(itemsFilter, remove)

    if(remove.length === 0)
      setList(jobList);
    else
      filterData(params, 'remove');
  }

  function clearFilter(){
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
        {itemsFilter.length > 0 && <Filter itemsFilter={itemsFilter} clearFilter={clearFilter} removeFilter={removeFilter} />}
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
