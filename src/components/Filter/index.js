import React from 'react';
import { MdClose } from 'react-icons/md';
import './styles.scss';

function Filter() {
  return (
    <div className="filter">
      <div className="selected-itens">
        <div>
          <span>Frontend</span>
          <MdClose />
        </div>
        <div>
          <span>Senior</span>
          <MdClose />
        </div>
      </div>
      <span className="clean">Clear</span>
    </div>
  );
}

export default Filter;
