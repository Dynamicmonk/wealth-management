import { configureStore } from "@reduxjs/toolkit";

export const wealthManagementStore = configureStore({
  reducer: {},
  devTools: false,
});

export type RootState = ReturnType<typeof wealthManagementStore.getState>;
export type AppDispatch = typeof wealthManagementStore.dispatch;
