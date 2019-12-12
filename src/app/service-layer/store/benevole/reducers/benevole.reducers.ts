import {BenevoleModel} from '../../../../core/models/benevole.model';
import * as fromBenevoleAction from '../actions/benevole.actions';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface BenevoleState {
  benevoles: BenevoleModel[];
}

export const initialState: BenevoleState = {
  benevoles: []
}

export function reducerBenevole(state = initialState, action: fromBenevoleAction.BenevoleActions): BenevoleState {
switch (action.type) {
  case fromBenevoleAction.BenevoleActionsTypes.GET_BENEVOLES: {
      return {
        ...state
      };
    }
  case fromBenevoleAction.BenevoleActionsTypes.GET_BENEVOLES_SUCCESS: {
    return {
      ...state,
      benevoles: [...action.payload]
    };
  }
  case fromBenevoleAction.BenevoleActionsTypes.GET_BENEVOLES_ERROR: {
    return  {
      ...state
    };
  }
  case fromBenevoleAction.BenevoleActionsTypes.GET_BENEVOLE: {
    return {
      ...state
    };
  }
  case fromBenevoleAction.BenevoleActionsTypes.GET_BENEVOLE_SUCCESS: {
    return {
      ...state,
      benevoles: [action.payload]
    };
  }
  case fromBenevoleAction.BenevoleActionsTypes.GET_BENEVOLE_ERROR: {
    return {
      ...state,
    };
  }
  case fromBenevoleAction.BenevoleActionsTypes.CREATE_BENEVOLE: {
    return {
      ...state,
      benevoles: [action.payload]
    };
  }
  case fromBenevoleAction.BenevoleActionsTypes.CREATE_BENEVOLE_SUCCESS: {
    return {
      ...state,
      benevoles: [...action.payload]
    };
  }
}
}
