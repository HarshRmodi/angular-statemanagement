import { Action, createFeatureSelector, createReducer, on } from '@ngrx/store';
import { RegisterActions, RegisterTypes } from '../actions/register.actions';
import { Register } from '../model/register';


export const registerFeatureKey = 'register';

export interface RegisterState {
  registerModel: any;

}

export const initialState: RegisterState = {
  registerModel: undefined,

};

export function registerReducer(state = initialState, action: RegisterActions): RegisterState {
  switch (action.type) {
    case RegisterTypes.LoadedeRegister: {
      debugger

      return {
        ...state, registerModel: action.payload.registerModel
      };
    }
    default:
      return state;
  }
}

export const getRegisterState = createFeatureSelector<RegisterState>(registerFeatureKey);
