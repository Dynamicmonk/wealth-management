import React, {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {FaHome, FaBars, FaEnvelope, FaCopy, FaPiggyBank,FaTwitter,FaClipboardCheck,FaUserPlus , FaUsers, FaChartArea, FaSearch, FaAngleDown, FaTrash, FaMoneyBill, FaDollarSign, FaPlusCircle, FaSearchMinus } from 'react-icons/fa'
import { NavLink, Outlet } from 'react-router-dom'
import './StyleSidebar.css'
import SidebarMenu from './add/SidebarMenu'


const SideBar = () => {
  const routes=[
    {
      path:'dashboard/:id',
      name:'DashBoard',
      icon:<FaHome/>,
      exact:true
    },
    
    // {
    //   path:'messages',
    //   name:'Messages',
    //   icon:<FaEnvelope/>
    // },
    {
      path:'documents',
      name:'Documents',
      icon:<FaCopy/>,
      subRoutes:[
        {
      path:'documents/adddoc',
      name:'Add Document',
      icon:<FaPlusCircle/>,
      },
      {
      path:'documents/viewdoc',
      name:'View Documents',
      icon:<FaSearchMinus/>,
      },
      {
      path:'documents/deletedoc',
      name:'Delete Documents',
      icon:<FaTrash/>,
      },
      ]
    },
    
    {
      path:'members/:id',
      name:'Members',
      icon:<FaUsers/>,
      subRoutes:[

      {
      path:'members/addMember',
      name:'Add Members',
      icon:<FaUserPlus/>,
      },

      {
      path:'members/editMember',
      name:'Edit Members',
      icon:<FaSearch/>},
      
    ]
    },
    

    {
      path:'invest/:id',
      name:'Investment',
      icon:<FaPiggyBank/>,
      
      subRoutes:[
        {
      path:'invest/option',
      name:'Investment Option',
      icon:<FaPiggyBank/>,
      },
      {
      path:'invest/metaData',
      name:'MetaData',
      icon:<FaDollarSign/>,
      },
      {
      path:'invest/financialData',
      name:'Financial Data',
      icon:<FaMoneyBill/>,
      }
      ]
    },

    {
      path:'expense/:id',
      name:'Expense',
      icon:<FaChartArea/>,
      subRoutes:[
        {
      path:'expense/fixed',
      name:' Fixed Expense',
      icon:<FaPiggyBank/>,
      },
      {
      path:'expense/variable',
      name:'Variable Expense',
      icon:<FaDollarSign/>,
      }
      ]
    },

    {
      path:'income/:id',
      name:'Income',
      icon:<FaChartArea/>,
      subRoutes:[
        {
      path:'income/fixedincome',
      name:' Fixed Income',
      icon:<FaPiggyBank/>,
      },
      {
      path:'income/variableincome',
      name:'Variable Income',
      icon:<FaDollarSign/>,
      }
      ]
    },
    {
      path:'reports',
      name:'Reports',
      icon:<FaChartArea/>,
      subRoutes:[
        {
      path:'reports/investmentreport',
      name:'Investment Report',
      icon:<FaPiggyBank/>,
      },
      {
      path:'reports/incomereport',
      name:'Income Report',
      icon:<FaDollarSign/>,
      },
      {
      path:'reports/expensereport',
      name:'Expenses Report',
      icon:<FaMoneyBill/>,
      },
      ]
    }
  ]
const [isOpen, setIsOpen] = useState(true)

const toggle=()=>{
  setIsOpen(!isOpen)
}

const inputAnimation={
  hidden:{
    width: 0,
    padding:0,
    opacity:0
  },
  show:{
    width: "150px",
    padding:"5px 10px",
    transition:{
      duration:0.4
    },
    opacity: 1
  }
}

const showAnimation={
  hidden:{
    width: 0,
    opacity:0,
    transition: 0.5
  },
  show:{
    width: "auto",
    transition:{
      duration:0.2
    },
    opacity: 1
  }
}

const imgAnimation={
  hidden:{
    width: 0,
    opacity:0,
    transition: 0.5
  },
  show:{
    width: '50px',
    opacity:1,
    transition:0.5,
  }
};

  return (
    <>
    <div className='main-container'>
      <motion.div className='side-bar' 
      animate={{width: isOpen?'200px':'40px',
       transition:{
          type:'spring',
          damping:12,
        }}}>
          <div className="top-section">
            <AnimatePresence>
            {isOpen && <motion.img variants={imgAnimation}
            initial='hidden'
            animate='show'
            exit='hidden'
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Lotus" className='my-img'/>}
            </AnimatePresence> 
            
            <div className="bars">
              <FaBars onClick={toggle}/>
            </div>

          </div>
           <section className='routes'>
            {routes.map((route, index)=> { 
              // if(route.subRoutes){
              //   return (<SidebarMenu
              //       setIsOpen={setIsOpen}
              //       route={route}
              //       showAnimation={showAnimation}
              //       isOpen={isOpen}
              //       key={index}
              //     />
              //     );
              // }
              return (
                <NavLink to={route.path}
                activeclassname="active"
                key={index} className='nav-link'>
                  <div className="icons">
                    {route.icon}
                  </div>
                  <AnimatePresence>
                  <motion.div variants={showAnimation}
                  initial="hidden"
                  animate='show'
                  exit='hidden'
                  className="link-text">{route.name}</motion.div>
                  </AnimatePresence>
                </NavLink>
              )
            })}
           </section>
        </motion.div>
        <div>
        <main className='my-main'>
                {/* {children} */}
                <Outlet/>
            </main>
            </div>
    </div>
    </>
  )
}

export default SideBar