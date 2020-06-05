import { connect } from 'react-redux';

import DesignsPage from './DesignsPage';
import { entitiesSelector, registrySelector } from '../../selectors';
import { designsPageGetBatchData } from './actions';

const mapStateToProps = state => ({
  designsList: entitiesSelector('designs')(state, 'list'),
  filters: entitiesSelector('designs')(state, 'filters'),
  totalCount: entitiesSelector('designs')(state, 'totalCount'),
  isLoading: registrySelector(state, 'designs-list-loading'),
});

const mapDispatchToProps = dispatch => ({
  onFilter: filter => dispatch(designsPageGetBatchData(filter)),
});

const DesignsPageContainer = connect(mapStateToProps, mapDispatchToProps)(DesignsPage);

export default DesignsPageContainer;
