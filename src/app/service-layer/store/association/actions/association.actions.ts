import {Action} from '@ngrx/store';
import {AssociationModel} from '../../../../core/models/association.model';

export enum AssociationActionsTypes {
  GET_ASSOCIATIONS = '[ALL] ASSOCIATIONS',
  GET_ASSOCIATIONS_SUCCESS = '[ALL] ASSOCIATIONS SUCCESS',
  GET_ASSOCIATIONS_ERROR = '[ALL] ASSOCIATIONS ERROR',

  GET_ASSOCIATION = '[GET] ASSOCIATION',
  GET_ASSOCIATION_SUCCESS = '[GET] ASSOCIATION SUCCESS',
  GET_ASSOCIATION_ERROR = '[GET] ASSOCIATION ERROR',

  CREATE_ASSOCIATION = '[CREATE] ASSOCIATION',
  CREATE_ASSOCIATION_SUCCESS = '[CREATE] ASSOCIATION SUCCESS',
  CREATE_ASSOCIATION_ERROR = '[CREATE] ASSOCIATION ERROR',

  UPDATE_ASSOCIATION = '[UPDATE] ASSOCIATION',
  UPDATE_ASSOCIATION_SUCCESS = '[UPDATE] ASSOCIATION SUCCESS',
  UPDATE_ASSOCIATION_ERROR = '[UPDATE] ASSOCIATION ERROR',

  DELETE_ASSOCIATION = '[DELETE] DELETE_ASSOCIATION',
  DELETE_ASSOCIATION_SUCCESS = '[DELETE] DELETE_ASSOCIATION SUCCESS',
  DELETE_ASSOCIATION_ERROR = '[DELETE] ASSOCIATION ERROR'
}

// GET all associations
export class GetAllAssociations implements Action {
  readonly type = AssociationActionsTypes.GET_ASSOCIATIONS;
}

export class GetAllAssociationsSuccess implements Action {
  readonly type = AssociationActionsTypes.GET_ASSOCIATIONS_SUCCESS;
  constructor (public payload: AssociationModel[]) {}
}

export class GetAllAssociationsError implements Action {
  readonly type = AssociationActionsTypes.GET_ASSOCIATIONS_ERROR;
  constructor (public payload: string) {}
}

// GET association by id

export class GetAssociation implements Action {
  readonly type = AssociationActionsTypes.GET_ASSOCIATION;
  constructor (public payload: AssociationModel) {}
}

export class GetAssociationSuccess implements Action {
  readonly type = AssociationActionsTypes.GET_ASSOCIATION_SUCCESS;
  constructor (public payload: AssociationModel) {}
}

export class GetAssociationError implements Action {
  readonly type = AssociationActionsTypes.GET_ASSOCIATION_ERROR;
  constructor (public payload: string) {}
}

// CREATE new association

export class AddAssociation implements Action {
  readonly type = AssociationActionsTypes.CREATE_ASSOCIATION;
  constructor(public payload: AssociationModel) {}
}

export class AddAssociationSuccess implements Action {
  readonly type = AssociationActionsTypes.CREATE_ASSOCIATION_SUCCESS;
  constructor(public payload: AssociationModel) {}
}
