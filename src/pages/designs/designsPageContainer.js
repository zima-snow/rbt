import { connect } from 'react-redux';

import DesignsPage from './DesignsPage';
import { entitiesSelector, registrySelector } from '../../selectors';

const mapStateToProps = state => ({
  designsList: entitiesSelector('designs')(state, 'list'),
  totalCount: entitiesSelector('designs')(state, 'totalCount'),
  isLoading: registrySelector(state, 'designs-list-loading'),
});

const DesignsPageContainer = connect(mapStateToProps)(DesignsPage);

export default DesignsPageContainer;
