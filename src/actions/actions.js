import { RBT_INIT, RBT_PAGE_OPEN, RBT_REGISTRY_UPDATE } from './consts';

export const rbtInit = () => ({
  type: RBT_INIT,
});

export const rbtShowPage = (component, pageType) => params => ({
  type: RBT_PAGE_OPEN,
  component,
  pageType,
  payload: params,
});

export const rbtRegistryUpdate = (key, value) => ({
  type: RBT_REGISTRY_UPDATE,
  payload: { key, value },
});
