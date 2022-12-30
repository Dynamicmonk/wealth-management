import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './users/UserSlice';
import incomeReducer from './income/IncomeSlice';
// import authuserReducer from './signin/AuthSlice'
import authSignupReducer from "./signin/authSignupReducer";
import ExpenseSliceReducer from './expense/ExpenseSlice'
import investReducer from './investment/InvestmentSlice'
import authReducer from './signin/auth'
export const store = configureStore({
    reducer:{
        users:usersReducer,
        income:incomeReducer,
        // authuser:authuserReducer,
        authuser:authSignupReducer,
        expense: ExpenseSliceReducer,
        invest: investReducer,
        auth : authReducer

    }
})

export default store;