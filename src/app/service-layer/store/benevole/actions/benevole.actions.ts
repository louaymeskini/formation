import {Action} from '@ngrx/store';
import {BenevoleModel} from '../../../../core/models/benevole.model';


export enum BenevoleActionsTypes {
  GET_BENEVOLES = '[ALL] BENEVOLES',
  GET_BENEVOLES_SUCCESS = '[ALL] BENEVOLES SUCCESS',
  GET_BENEVOLES_ERROR = '[ALL] BENEVOLES ERROR',

  GET_BENEVOLE = '[GET] BENEVOLE',
  GET_BENEVOLE_SUCCESS = '[GET] BENEVOLE SUCCESS',
  GET_BENEVOLE_ERROR = '[GET] BENEVOLE ERROR',

  CREATE_BENEVOLE = '[CREATE] BENEVOLE',
  CREATE_BENEVOLE_SUCCESS = '[CREATE] BENEVOLE SUCCESS',
  CREATE_BENEVOLE_ERROR = '[CREATE] BENEVOLE ERROR',

  UPDATE_BENEVOLE = '[UPDATE] BENEVOLE',
  UPDATE_BENEVOLE_SUCCESS = '[UPDATE] BENEVOLE SUCCESS',
  UPDATE_BENEVOLE_ERROR = '[UPDATE] BENEVOLE ERROR',

  DELETE_BENEVOLE = '[DELETE] BENEVOLE',
  DELETE_BENEVOLE_SUCCESS = '[DELETE] BENEVOLE SUCCESS',
  DELETE_BENEVOLE_ERROR = '[DELETE] BENEVOLE ERROR'
}

// GET all benevoles
export class GetAllBenevoles implements Action {
  readonly type = BenevoleActionsTypes.GET_BENEVOLES;
}

export class GetAllBenevolesSuccess implements Action {
  readonly type = BenevoleActionsTypes.GET_BENEVOLES_SUCCESS;
  constructor (public payload: BenevoleModel[]) {}
}

export class GetAllBenevolesError implements Action {
  readonly type = BenevoleActionsTypes.GET_BENEVOLES_ERROR;
  constructor (public payload: string) {}
}

// GET benevole by id

export class GetBenevole implements Action {
  readonly type = BenevoleActionsTypes.GET_BENEVOLE;
  constructor (public payload: BenevoleModel) {}
}

export class GetBenevoleSuccess implements Action {
  readonly type = BenevoleActionsTypes.GET_BENEVOLE_SUCCESS;
  constructor (public payload: BenevoleModel) {}
}

export class GetBenevoleError implements Action {
  readonly type = BenevoleActionsTypes.GET_BENEVOLE_ERROR;
  constructor (public payload: string) {}
}

// CREATE new benevole

export class AddBenevole implements Action {
  readonly type = BenevoleActionsTypes.CREATE_BENEVOLE;
  constructor(public payload: BenevoleModel) {}
}

export class AddBenevoleSuccess implements Action {
  readonly type = BenevoleActionsTypes.CREATE_BENEVOLE_SUCCESS;
  constructor(public payload: any) {}
}

export class AddBenevoleError implements Action {
  readonly type = BenevoleActionsTypes.CREATE_BENEVOLE_ERROR;
  constructor(public payload: any) {}
}

// UPDATE benevole

export class UpdateBenevole implements Action {
  readonly type = BenevoleActionsTypes.UPDATE_BENEVOLE;
  constructor(public payload: BenevoleModel) {}
}

export class UpdateBenevoleSuccess implements Action {
  readonly type = BenevoleActionsTypes.UPDATE_BENEVOLE_SUCCESS;
  constructor(public payload: any) {}
}

export class UpdateBenevoleError implements Action {
  readonly type = BenevoleActionsTypes.UPDATE_BENEVOLE_ERROR;
  constructor(public payload: any) {}
}

// DELETE benevole

export class DeleteBenevole implements Action {
  readonly type = BenevoleActionsTypes.DELETE_BENEVOLE;
  constructor(public payload: BenevoleModel) {}
}

export class DeleteBenevoleSuccess implements Action {
  readonly type = BenevoleActionsTypes.DELETE_BENEVOLE_SUCCESS;
  constructor(public payload: any) {}
}

export class DeleteBenevoleError implements Action {
  readonly type = BenevoleActionsTypes.DELETE_BENEVOLE_ERROR;
  constructor(public payload: any) {}
}

export type BenevoleActions =  GetAllBenevoles |
  GetAllBenevolesSuccess |
  GetAllBenevolesError |
  GetBenevole |
  GetBenevoleSuccess |
  GetBenevoleError |
  AddBenevole |
  AddBenevoleSuccess |
  AddBenevoleError |
  UpdateBenevole |
  UpdateBenevoleSuccess |
  UpdateBenevoleError |
  DeleteBenevole |
  DeleteBenevoleSuccess |
  DeleteBenevoleError;
