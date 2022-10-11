import React, {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {FaHome, FaBars, FaEnvelope, FaCopy, FaPiggyBank,FaTwitter,FaClipboardCheck,FaUser , FaUsers, FaChartArea, FaSearch } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import './StyleSidebar.css'


const SideBar = ({children}) => {
  const routes=[
    {
      path:'/dashboard',
      name:'DashBoard',
      icon:<FaHome/>,
      exact:true
    },
    
    {
      path:'/messages',
      name:'Messages',
      icon:<FaEnvelope/>
    },
    {
      path:'/documents',
      name:'Documents',
      icon:<FaCopy/>
    },
    {
      path:'/finances',
      name:'Finances',
      icon:<FaPiggyBank/>
    },
    {
      path:'/members',
      name:'Members',
      icon:<FaUsers/>
    },
    {
      path:'/reports',
      name:'Reports',
      icon:<FaChartArea/>
    }
  ]
const [open, setOpen] = useState(true)

const toggle=()=>{
  setOpen(!open)
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
      animate={{width: open?'200px':'40px',
       transition:{
          type:'spring',
          damping:12,
        }}}>
          <div className="top-section">
            <AnimatePresence>
            {open && <motion.img variants={imgAnimation}
            initial='hidden'
            animate='show'
            exit='hidden'
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Lotus" className='my-img' />}
            </AnimatePresence> 
            
            <div className="bars">
              <FaBars onClick={toggle}/>
            </div>

          </div>
           <section className='routes'>
            {routes.map((route)=> { 
              return (
                <NavLink to={route.path}
                activeclassname="active"
                key={route.name} className='nav-link'>
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
                {children}
            </main>
            </div>
    </div>
    </>
  )
}

export default SideBar