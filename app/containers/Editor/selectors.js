import {createSelector} from 'reselect';

const selectDocument = (state) => state.get('editor');

const makeSelectDocument = () => createSelector(
  selectDocument,
  (documentState) => documentState.get('document')
);

export {
  selectDocument,
  makeSelectDocument,
};
