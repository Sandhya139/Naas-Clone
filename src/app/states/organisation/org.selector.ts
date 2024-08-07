import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectOrgState = (state: AppState) => state.org;

export const selectCompanyName = createSelector(
  selectOrgState,
  (state) => state.companyName
);
