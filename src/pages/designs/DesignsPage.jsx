/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn-fast';

import { DesignListItem, DesignFilter } from './components';
import { useOnScreen, useDebounce } from '../../hooks';
import { Input } from '../../components';

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
  filters: PropTypes.shape({
    title: PropTypes.string,
    assemble: PropTypes.string,
    review: PropTypes.string,
    updated: PropTypes.string,
    page: PropTypes.number,
    limit: PropTypes.number,
  }),
  totalCount: PropTypes.string,
  isLoading: PropTypes.bool,
  onFilter: PropTypes.func,
};

const defaultProps = {
  designsList: [],
  filters: {},
  totalCount: 0,
  isLoading: false,
  onFilter: () => {},
};

const DesignsPage = ({ designsList, totalCount, filters, isLoading, onFilter }) => {
  const endListRef = useRef();
  const endListOnScreen = useOnScreen(endListRef, '30px');

  const [searchValue, setSearchValue] = useState(filters.title);
  const debouncedSearchValue = useDebounce(searchValue, 1000);
  const [isShowLoadingNext, setIsShowLoadingNext] = useState(true);

  useEffect(() => {
    setIsShowLoadingNext(designsList.length === filters.page * filters.limit);
  }, [designsList.length, filters.page, filters.limit]);

  useEffect(() => {
    if (onFilter && endListOnScreen && !isLoading) {
      onFilter({ page: filters.page + 1 });
    }
  }, [endListOnScreen, filters.page, isLoading, onFilter]);

  useEffect(() => {
    if (onFilter) {
      onFilter({ title: debouncedSearchValue });
    }
  }, [debouncedSearchValue, onFilter]);

  const handleSearchInputChange = useCallback(value => {
    setSearchValue(value);
  }, []);

  return (
    <div className={b()}>
      <div>
        <DesignFilter />
      </div>
      <div className={b('list')}>
        <div className={b('toolbox-container')}>
          <div className={b('title-container')}>
            <div className={b('title')}>Assembly Processes</div>
            <div className={b('count')}>{totalCount}</div>
          </div>
          <div className={b('toolbox')}>
            <Input value={searchValue} prefix="Поиск" onChange={handleSearchInputChange} />
          </div>
        </div>
        {designsList.map(design => (
          <DesignListItem key={design._id} {...design} />
        ))}
        <div ref={endListRef} className={b('loading-next', { hidden: !isShowLoadingNext })}>
          {endListOnScreen && 'Loading...'}
        </div>
      </div>
    </div>
  );
};

DesignsPage.propTypes = propTypes;
DesignsPage.defaultProps = defaultProps;

export default DesignsPage;
