import { configureStore } from "@reduxjs/toolkit";

import userSliceReducer from "./slices/User/UserSlice";

export const wealthManagementStore = configureStore({
  reducer: {
    user: userSliceReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof wealthManagementStore.getState>;
export type AppDispatch = typeof wealthManagementStore.dispatch;
