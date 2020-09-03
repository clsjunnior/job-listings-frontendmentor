import React from 'react';
import './styles.scss';

const JobPost = ({ job, onFilter }) => {
  // console.log(job);

  return (
    <div className={job.featured ? `job featured` : `job`}>
      <div className="icon">
        <img src={`${job.logo}`} alt={job.company} />
      </div>
      <div className="info">
        <div className="title-section">
          <span className="title">{job.company}</span>
          <div className="badges">
            {job.new && <span>New!</span>}
            {job.featured && <span>Featured</span>}
          </div>
        </div>
        <h1>{job.position}</h1>
        <div className="sub-info">
          <span>{job.postedAt}</span>
          <span>{job.contract}</span>
          <span>{job.location}</span>
        </div>
      </div>
      <div className="tags">
        <ul>
          <li
            onClick={() => {
              onFilter(job.role, 'role');
            }}
          >
            {job.role}
          </li>
          <li
            onClick={() => {
              onFilter(job.level, 'level');
            }}
          >
            {job.level}
          </li>
          {job.languages.map((item, key) => {
            return (
              <React.Fragment key={key}>
                <li
                  onClick={() => {
                    onFilter(item, 'languages');
                  }}
                >
                  {item}
                </li>
              </React.Fragment>
            );
          })}
          {job.tools.map((item, key) => {
            return (
              <React.Fragment key={key}>
                <li
                  onClick={() => {
                    onFilter(item, 'tools');
                  }}
                >
                  {item}
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default JobPost;
