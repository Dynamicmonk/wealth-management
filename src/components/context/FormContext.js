import { createContext , useState , useEffect } from "react";

const FormContext = createContext({});

export const FormProvider = ({children})=>{
    const[data , setData] = useState({
        userInfo:{
            FirstName :'',
            LastName:'',
            Phone1:'',
            Email:'',
            IsNewSignup:"true",
            PrimaryMemberId:'',
            contactRelationship:{
                RelationshipType:''
            }
        },
        income:{
            RequestId: '',
            FullName: '',
            IncomeType: '',
            IncomeAmount: '',
            IncomeDate: '',
            IncomeFrequency: '',
            Contact: ''

        },
        expense:{
            FullName: "",
            ExpenseType: "",
            ExpenseAmount: '',
            ExpenseDate: "",
            Contact: ""

        },
        investment:{
            FullName: "",
            InvestmentType: "",
            InvestmentAmount: '',
            InvestmentDate: "",
            investmentPeriod: '',
            Contact: ""
        }
    })

    const[page, setPage] = useState(0)

    const title = {
        0: "General Info",
        1: "Income",
        2: "Investment",
        3: "Expense"
    }
    return(
        <FormContext.Provider value={{ data , setData , title , page , setPage}}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext;