import { createFeatureSelector, createSelector, select } from '@ngrx/store';

export const selectRegister = state => state.register;

export const selectLoadRegister = createSelector(
    selectRegister,
    register => register.registerModel
)
