import React from 'react';
import { MdClose } from 'react-icons/md';
import './styles.scss';

function Filter({ itemsFilter }) {
  return (
    <div className="filter">
      <div className="selected-itens">
        {itemsFilter.map((item, key) => {
          return (
            <React.Fragment key={key}>
              <div>
                <span>{item.label}</span>
                <MdClose />
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <span className="clean">Clear</span>
    </div>
  );
}

export default Filter;
