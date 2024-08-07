import { createReducer, on } from "@ngrx/store";
import { createOrg } from "./org.actions";

export interface OrgState{
    firstName: string;
    lastName: string;
    companyName: string;
}

export const initialState: OrgState = {
    firstName: '',
    lastName: '',
    companyName: ''
}

export const orgReducer = createReducer(
    initialState,
    on(createOrg, (state, { firstName, lastName, companyName }) => {
        console.log('Updating state with:', { firstName, lastName, companyName });
        return {
      ...state,
      firstName,
      lastName,
      companyName
        };
    }));

export function orgReducerFinal(state: any, action: any) {
    return orgReducer(state, action);
  }