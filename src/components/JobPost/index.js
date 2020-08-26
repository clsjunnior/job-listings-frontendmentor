import React from 'react';
import './styles.scss';

function JobPost(props) {
  const { job } = props;

  console.log(job);

  return (
    <div className="job">
      <div className="icon">
        <img src={`${job.logo}`} alt={job.company} />
      </div>
      <div className="info">
        <span className="title">{job.company}</span>
        <h1>{job.position}</h1>
        <div className="sub-info">
          <span>{job.postedAt}</span>
          <span>{job.contract}</span>
          <span>{job.location}</span>
        </div>
      </div>
      <div className="tags">
        <ul>
          <li>{job.role}</li>
          <li>{job.level}</li>
          {job.languages.map((item, key) => {
            return (
              <React.Fragment key={key}>
                <li>{item}</li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default JobPost;
