/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn-fast';

import { DesignListItem } from './components';

import './styles.less';

const b = bemCn('rbt-designs-page');

const propTypes = {
  designsList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      img: PropTypes.string,
      age: PropTypes.number,
      assemblyStatus: PropTypes.string,
      reviewStatus: PropTypes.string,
      title: PropTypes.string,
      updated: PropTypes.string,
    }),
  ),
  totalCount: PropTypes.string,
  isLoading: PropTypes.bool,
};

const defaultProps = {
  designsList: [],
  totalCount: 0,
  isLoading: false,
};

const DesignsPage = ({ designsList, totalCount }) => {
  return (
    <div className={b()}>
      <div className={b('list')}>
        <div className={b('toolbox-container')}>
          <div className={b('title-container')}>
            <div className={b('title')}>Assembly Processes</div>
            <div className={b('count')}>{totalCount}</div>
          </div>
        </div>
        {designsList.map(design => (
          <DesignListItem key={design._id} {...design} />
        ))}
      </div>
    </div>
  );
};

DesignsPage.propTypes = propTypes;
DesignsPage.defaultProps = defaultProps;

export default DesignsPage;
