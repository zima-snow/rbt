import DesignsPageContainer from '../pages/designs';

import { MainLayout } from '../layouts';

import { rbtShowPage } from '../actions';

export default {
  designs: {
    path: '/designs',
    exact: true,
    title: 'Designs',
    component: DesignsPageContainer,
    layout: MainLayout,
    onEnterAction: rbtShowPage('designs', 'show'),
  },
};
