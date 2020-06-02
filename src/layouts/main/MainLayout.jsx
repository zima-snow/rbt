import React from 'react';
import PropTypes from 'prop-types';

import AppLayout from '../app';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

const defaultProps = {
  children: null,
};

const MainLayout = ({ children }) => <AppLayout>{children}</AppLayout>;

MainLayout.propTypes = propTypes;
MainLayout.defaultProps = defaultProps;

export default MainLayout;
