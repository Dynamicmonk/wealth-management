// import Dashboard from "./components/Dashboard/Dashboard";
// import Report from "./components/Reports/Report";
// import Investment from "./components/Investment/Investment";
// import Document from "./components/Documents/Document";
// import Members from "./components/Members/Members";
import { Routes, Route } from "react-router-dom";
import { Children } from "react";

// import PrivateComponent from "./components/PrivateComponent/PrivateComponent";
// import Home from "./components/Home/SignIn/Home";
// // import SignUp from "./components/Home/SignUp/SignUp"
// import SideBar from "./components/SideBar/SideBar";
// import AddMember from "./components/Members/addMember/AddMember";
// import Edit from "./components/Members/edit/Edit";
// import DeleteDetail from "./components/Members/delete/DeleteDetail";
// import MetaData from "./components/Investment/investmentMetaData/MetaData";
// import InvestmentOption from "./components/Investment/investmentoption/InvestmentOption";
// import FinancialData from "./components/Investment/financialdata/FinancialData";
// import AddDocument from "./components/Documents/add/AddDocument";
// import ViewDoc from "./components/Documents/view/ViewDoc";
// import DeleteDoc from "./components/Documents/delete/DeleteDoc";
// import FixedExpense from "./components/Expense/fixedExpense/FixedExpense";
// import VariableExpense from "./components/Expense/variableExpense/VariableExpense";
// import Expense from "./components/Expense/Expense";
// import Income from "./components/Income/Income";
// import FixedIncome from "./components/Income/fixedIncome/FixedIncome";
// import VariableIncome from "./components/Income/variableIncome/VariableIncome";
// import ExpenseReport from "./components/Reports/expenseReport/ExpenseReport";
// import IncomeReport from "./components/Reports/incomeReport/IncomeReport";
// import InvestmentReport from "./components/Reports/investmentReport/InvestmentReport";
// import NewMember from "./components/newmember/NewMember";
// import AddIncome from "./components/Members/form/AddIncome";
// import PersonalMember from "./components/PersonalMember/PersonalMember";
// import Signup from "./components/Home/SignUp/Signup";
// import AddGeneralInfo from "./components/Members/AddGeneralInfo";
// import AddNewMember from "./components/Members/form/AddNewMember";
// import MemberCreatedMsg from "./components/PersonalMember/MemberCreatedMsg";
// import AddInvestment from "./components/Members/form/AddInvestment";
// import AddExpense from "./components/Members/form/AddExpense";
// import Authenticate from "./components/auth0/Authenticate";

import { routes } from "./routes/routes";
import { CheckUserLoggedInHoc } from "./components/Hoc/CheckUserLoggedIn/CheckUserLoggedIn";
import { useAppSelector } from "./store/useStoreHooks";
import { NotFound } from "./components/NotFound/NotFound";

function App() {
  const { signIn } = useAppSelector((state) => state.user);

  return (
    <>
      <Routes>
        {Children.toArray(
          routes.map((route) => {
            const { path, element: Element } = route;
            return (
              <Route
                path={path}
                element={
                  <>
                    <CheckUserLoggedInHoc>{Element}</CheckUserLoggedInHoc>
                  </>
                }
              />
            );
          })
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />

        <Route
          path="authenticate"
          element={<Authenticate />}
          caseSensitive={true}
        >
          <Route path="dashboard/:id" index element={<Dashboard />} />
          <Route path="reports" element={<Report />}>
            <Route path="expensereport" element={<ExpenseReport />} />
            <Route path="incomereport" element={<IncomeReport />} />
            <Route path="investmentreport" element={<InvestmentReport />} />
          </Route>
          <Route path="invest/:id" element={<Investment />}>
            <Route path="option" element={<InvestmentOption />} />
            <Route path="metaData" element={<MetaData />} />
            <Route path="financialData" element={<FinancialData />} />
          </Route>

          <Route path="members/:id" element={<Members />}>
            <Route path="membermsg" element={<MemberCreatedMsg />} />
            <Route path="addMember" element={<AddMember />} />
            <Route path="addnewMember" element={<AddNewMember />} />
            <Route path="addincome" element={<AddIncome />} />
            <Route path="addinvest" element={<AddInvestment />} />
            <Route path="addexpense" element={<AddExpense />} />
            <Route path="editMember/:id" element={<Edit />} />
            <Route path="newmember" element={<NewMember />} />
            <Route path="addincome" element={<AddIncome />} />

            <Route path="addgeneralinfo/:id" element={<AddGeneralInfo />} />
          </Route>

          <Route path="documents" element={<Document />}>
            <Route path="adddoc" element={<AddDocument />} />
            <Route path="viewdoc" element={<ViewDoc />} />
            <Route path="deletedoc" element={<DeleteDoc />} />
          </Route>

          <Route path="expense/:id" element={<Expense />}>
            <Route path="fixed" element={<FixedExpense />} />
            <Route path="variable" element={<VariableExpense />} />
          </Route>

          <Route path="income/:id" element={<Income />}>
            <Route path="fixedincome/:id" element={<FixedIncome />} />
            <Route path="variableincome" element={<VariableIncome />} />
            <Route />
          </Route>
        </Route>
      </Routes> */}
    </>
  );
}

export default App;
