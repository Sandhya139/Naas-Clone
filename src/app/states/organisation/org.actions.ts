import { createAction, props } from "@ngrx/store";

export const createOrg = createAction('[Org] Create Org', 
props<{firstName: string, lastName: string, companyName: string}>()
);