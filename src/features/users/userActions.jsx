import { createAction } from "@reduxjs/toolkit";

export const fetchUsers = createAction("users/fetchUsers");
export const fetchUsersSuccess = createAction("users/fetchUsersSuccess");
export const fetchUsersFailure = createAction("users/fetchUsersFailure");