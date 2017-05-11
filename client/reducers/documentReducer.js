import initialState from './initialState';
import { LOAD_DOCUMENT_SUCCESS } from '../actions/actionTypes';

export default function documentReducer(state = initialState.PublicDocuments, action) {
  switch (action.type) {
    case LOAD_DOCUMENT_SUCCESS: {
      return {
        PublicDocuments: action.PublicDocuments,
      };
    }

    default: {
      return state;
    }
  }
}
