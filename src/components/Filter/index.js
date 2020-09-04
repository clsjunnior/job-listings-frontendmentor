import React from 'react';
import { MdClose } from 'react-icons/md';
import './styles.scss';

function Filter({ itemsFilter, clearFilter, removeFilter }) {
  return (
    <div className="filter">
      <div className="selected-itens">
        {itemsFilter.map((item, key) => {
          return (
            <React.Fragment key={key}>
              <div>
                <span>{item.label}</span>
                <MdClose onClick={() => removeFilter(item)} />
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <span className="clean" onClick={() => clearFilter()}>Clear</span>
    </div>
  );
}

export default Filter;
