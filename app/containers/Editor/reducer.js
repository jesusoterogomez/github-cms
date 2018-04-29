/*
 * EditorReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import {fromJS} from 'immutable';
import {EditorState} from 'draft-js';


import {
  CHANGE_DOCUMENT,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  document: EditorState.createEmpty(),
});

function EditorReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_DOCUMENT:
      return state
        .set('document', action.document);
    default:
      return state;
  }
}

export default EditorReducer;
