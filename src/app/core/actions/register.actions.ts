import { Action, createAction, props } from '@ngrx/store';
import { Register } from '../model/register';

export enum RegisterTypes {
  RequestedRegister = '[Register] Requested Registers',
  LoadedeRegister = '[Register] Load Registers',

}

export class RequestedRegister implements Action {
  readonly type = RegisterTypes.RequestedRegister;
  constructor(public payload: { userModel: any }) { }
}

export class LoadedeRegister implements Action {
  readonly type = RegisterTypes.LoadedeRegister;
  constructor(public payload: { registerModel: any }) { }
}

export type RegisterActions = RequestedRegister |
  LoadedeRegister





