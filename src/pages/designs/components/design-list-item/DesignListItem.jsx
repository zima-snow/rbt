import React from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn-fast';

import './styles.less';

const b = bemCn('rbt-design-list-item');

const propTypes = {
  img: PropTypes.string.isRequired,
  assemblyStatus: PropTypes.string.isRequired,
  reviewStatus: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  updated: PropTypes.string.isRequired,
};

const DesignListItem = ({ img, assemblyStatus, reviewStatus, title, updated }) => {
  return (
    <div className={b()}>
      <div className={b('img-container')}>
        <div className={b('status-container')}>
          <div
            className={b('status', {
              color: assemblyStatus === 'IN_REVIEW' ? 'yellow' : 'white',
            })}
          >
            {assemblyStatus}
          </div>
        </div>
        <img src={img} alt={title} className="m-l-25" />
      </div>
      <div className={b('content')}>
        <div className={b('title')}>{title}</div>
        <div className={b('description')}>
          <div className={b('description-name')}>Review</div>
          <div className={b('description-line')} />
          <div
            className={b('description-value', {
              color:
                reviewStatus === 'SIMULATION_NEGATIVE'
                  ? 'red'
                  : reviewStatus === 'SIMULATION_POSITIVE'
                  ? 'green'
                  : 'black',
            })}
          >
            {reviewStatus}
          </div>
        </div>
        <div className={b('description')}>
          <div className={b('description-name')}>Last Updates</div>
          <div className={b('description-line')} />
          <div className={b('description-value')}>{updated}</div>
        </div>
      </div>
    </div>
  );
};

DesignListItem.propTypes = propTypes;

export default DesignListItem;
