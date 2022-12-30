import React,{useState, useEffect} from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { MainContainer, MemberForm, MemberLabel, MemberH, MemberInput, MemberButton,Card, CardContainer, Container , Para, SubContainer, Spun2, SubContainerTwo , ParaOne, Bttn , Spun, Img, BarContainer, MemberFormDiv, SubContainerThree, MemberButton2, SubContainerFor, SpunP, Mydiv} from './StyleMembers'
// import  userpic from '../../assets/images/userpic.png';
// import img1 from '../../assets/images/img1.png'
// import img2 from '../../assets/images/img2.png'
// import img3 from '../../assets/images/img3.png'
// import img4 from '../../assets/images/img4.png'
// import img5 from '../../assets/images/img5.png'
// import img6 from '../../assets/images/img6.png'
import {FaAngleDoubleRight, FaChartLine} from 'react-icons/fa'
import { MemberHThree } from '../Income/fixedIncome/StyleFixedIncome';
import './StyleMember.css'
import AddMember from './addMember/AddMember';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NewMember from '../newmember/NewMember';
import Edit from './edit/Edit';
import Modal from 'react-modal'
import AddGeneralInfo from './AddGeneralInfo';
import axios from 'axios';
import AddInvestment from './form/AddInvestment';
import AddExpense from './form/AddExpense';
import AddIncome from './form/AddIncome';
import {getallusers , getallloading, fetchallusers, updateMemberApi, getUserByID, fetchalluserss, deleteMemberApi } from '../features/users/UserSlice'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './StyleMember.css'
import { useForm } from "react-hook-form";
// import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';
import { applyMiddleware } from 'redux';
import PersonalMember from '../PersonalMember/PersonalMember';
import { ReqstId } from '../features/signin/auth';
import { createBrowserHistory } from 'history';
import AddNewMember from './form/AddNewMember';
import { createContext } from 'react';
import MemberFormData from './form/MemberFormData'
import DeleteConfirm from './form/DeleteConfirm';

export const GlobalInfo= createContext()




Modal.setAppElement('#root')
function Members() {

  const history = createBrowserHistory();

    


  // const { register, handleSubmit } = useForm({
  //   defaultValues:{
  //     firstname:'',
  //     lastname:'',
  //     age:'',
  //     gender:'',
  //     ms:'',
  //     relationship:'',
  //     pan:'',
  //     aadhar:'',
  //     mobile:'',
  //     email:''
  //   }
  // });

//   const createNewMember=(data)=>{
//     let payload = {
//     FirstName: data.firstname,
//     LastName: data.lastname,
//     Gender : data.gender,
//     Age:Number(data.age),
//     Mobile:Number(data.mobile),
//     PAN:data.pan,
//     AADHAR:data.aadhar,
//     Email:data.email
//   };
//   dispatch(updateMemberApi(payload))
//   .unwrap().then(()=>navigate('members'))
// }
  
  const onSubmit = data => console.log(data);
  const {id}= useParams();
  const userId = ReqstId;

  // const memberToDisplay= useSelector(getUserByID(Number(id)))
  const allusersdata=useSelector(getallusers);
  const allloadingdata=useSelector(getallloading);
  const dispatch= useDispatch();
  
  let contentToRender='';
  useEffect(() => {
    var payload ={
      id : userId
    }
    if(allusersdata==0){
    dispatch(fetchallusers(payload))
    }
    }, [])

  // useEffect(() => {
  //   if(allusersdata==0){
  //   dispatch(fetchallusers())  }
  // }, [])

  const [first, setFirst] = useState()
  const display=()=>{
    setFirst(!first)
  }
  const [save,setSave]=useState()
var settings = {
  dots: true,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  };
  
  const [add, setAdd] = useState('personal');
  const [pageLoad, setLoad] = useState()

  const closeModal=(item)=>{
    setmod(false)
  }

  const openModal=()=>{
    setmod(true)
  }

  const [mod, setmod] = useState(false)

  //******8********************************** */ 
  const closemodel=(item)=>{
    setmodel(false)
  }

  const openmodel=()=>{
    setmodel(true)
  }

  const [model, setmodel] = useState(false)

  /***************************************/ 
  
  const [firstStep, setFirstStep]= useState();
  const[post,setPost]= useState([])
  // const[id,setid]= useState([])

  const handleDelete=()=>{
    console.log("Delete Handler")
  }

  const[names,setNames]=useState([]);
  const setadda = ()=> setAdd('personal') 
  
  const setMyName=()=>{
    setNames(names);
  }  
  const openDeleteModalHandler=(id)=>{
    setShowModal(true);
    setIdToDelete(id);
  };

  const[showModal , setShowModal] = useState(false);
  const[idToDelete, setIdToDelete] = useState(0)
 


const closeDeleteModalHandler=(id)=>{
  setShowModal(false);
  setIdToDelete(0);
}

const confirmDelete=()=>{
  dispatch(deleteMemberApi(idToDelete)).unwrap().then(()=>{
    setShowModal(false);
    setIdToDelete(0); 
  })
}

// const[ID , setID] = useState('')

const deletedispatch=(id)=>{
  // setShowModal(true);
  //   setIdToDelete(id);
   dispatch(deleteMemberApi(id)).unwrap().then(res=>{
     console.log(res);
   }).catch(err=>console.log(err))
}

    contentToRender= allloadingdata==='pending'?(<><div className='loader'></div></>)
    : allusersdata.map((postuser, index)=>(<div className='cards' id={postuser.ContactId} key={index} 
    // onClick={()=>{navigate(`personal/${postuser.ContactId}`)}}>
      // onClick={()=>setAdd('info')}
      >
        <div className='card-upper'>
          <div className='card-middle img-middel'>
            <img className='card-img'></img>
          </div>
          <div className='card-middle '>
            <p>FirstName: {postuser.FirstName}</p>
            <p>LastName: {postuser.LastName}</p>
            <p>Relationship:{postuser.contactRelationship}</p>
          </div>
        </div >
        <div className='card-lower'>
          {/* <button className='card-bttn'>Add</button> */}
          <button className='card-bttn' 
          onClick={()=>{
            navigate(`editMember/${postuser.ContactId}`);
            // setID(postuser.ContactId)
          }}
          >Edit</button>
          <button className='card-bttn' type='button'
          // onClick={()=>openDeleteModalHandler(postuser.ContactId)}
          onClick={()=>{
            // debugger;
            // deletedispatch(postuser.ContactId)
          alert(postuser.ContactId)
          deletedispatch(postuser.ContactId)
          }}
          // {/* onClick={openmodel} */}
          >Delete</button>
        </div>
        </div>))
    {/* <img className="dashimg" />
    <p className='dashp'>{postuser.FirstName}</p>
    <p className='dashp'>{postuser.LastName}</p>
    </div>)    */}
const navigate=useNavigate();

const updateMember=(data)=>{
  let payload = {
    id: id,
    FirstName: data.FirstName,
    LastName: data.LastName,
    Gender : data.gender
  };
  // dispatch(updateMemberApi(payload))
  // .unwrap().then(()=>navigate('members'))
};

const[enableBttn, setEnableBttn] = useState({
  genral :false,
  expense : true,
  income: true,
  invest : true
})
const getMemberDetails=(item)=>{
  const memberone = {item};
}
const[toggleState , settoggleState]=useState(1);

const foo = contentToRender??"No Data to show"

  const toggleTab=(index)=>{
    settoggleState(index)
  }
  

  return (
    <GlobalInfo.Provider value={{ getMemberDetails}}>
    <>
    <Container>
    <Slider {...settings}>
      
     {foo}   
    </Slider>
    <hr style={{color:'grey'}}/>
     {/* <DeleteConfirm
     showModal={showModal}
     title="Delete Confirmation"
     body='Are you sure want to delete?'
     apiStatus={allloadingdata}
     closeDeleteModalHandler={closeDeleteModalHandler}
     confirmDelete={confirmDelete}
     />   */}



      {/* **************************************** */}

         {/* { allloadingdata === 'pending'?<Spinner animation="border" variant='primary' role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>:(<>
    {allusersdata.map((postuser)=>{
  <Spun2 key={postuser.id} 
  onClick={()=>setAdd('info')}>
  <Img src={postuser.imageurl}/>
  <SpunP>{postuser.firstname}</SpunP>
  <SpunP>{postuser.relationship}</SpunP>
  </Spun2>

    })}
    </>)      
      } */}
      {/* 
      <Spun2 onClick={()=>setAdd('info')}><Img src={img2}/><SpunP>Harry</SpunP><SpunP>Father</SpunP></Spun2>
      <Spun2 onClick={()=>setAdd('info')}><Img src={img3}/><SpunP>Simi</SpunP><SpunP>Mother</SpunP></Spun2>
      <Spun2 onClick={()=>setAdd('info')}><Img src={img4}/><SpunP>Julie</SpunP><SpunP>Sister</SpunP></Spun2>
      <Spun2 onClick={()=>setAdd('info')}><Img src={img5}/><SpunP>John</SpunP><SpunP>Brother</SpunP></Spun2>
      <Spun2 onClick={()=>setAdd('info')}><Img src={img6}/><SpunP>Tim</SpunP><SpunP>Kid</SpunP></Spun2> */}
        {/* <Spun2><FaAngleDoubleRight className='icon-fa'/></Spun2> */}
    {/* </Slider> */}
    <br/>
    <MemberButton onClick={openModal} >Add Member</MemberButton><br/><br/>
    {/* <MemberButton onClick={()=>setVis(!vis)}>open Model</MemberButton> */}
    {/* {vis && (<SubContainerFor className='model-div'>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </SubContainerFor>)} */}
    
    {/* <button onClick={()=>navigate('personal/:id')}>Add Member</button> */}
    {/* <button onClick={()=>navigate('editMember/:id')}>Edit</button><br/><br/>
    <MemberButton onClick={()=>navigate('addnewMember')}>Add Member</MemberButton> */}
    {/* <div className="outlet"><Outlet/></div> */}

    {/* **************************************** */}
    {/* <SubContainerFor>
      <table>
  <thead>
    <tr>
      <th scope="col">Request ID</th>
      <th scope="col">Full Name</th>
      <th scope="col">Income Type</th>
      <th scope="col">Income Date</th>
      <th scope="col">Income Amount</th>
    </tr>
  </thead>
  <tbody>
    {allloadingdata==='pending'?(<tr>
      <th scope="row" className='loader'></th></tr>)
    : allusersdata.map((post, index)=>
    // <h1 key={postincome.RequestId}>{postincome.FullName}</h1>
    
    <tr key={index} id={post.ContactId}>
      <th scope="row">{post.FirstName}</th>
      <td>{post.LastName}</td>
      <td>{post.Age}</td>
      <td>{post.Gender}</td>
      <td>{post.MaritalStatus}</td>
    </tr>
    )}
  </tbody>
</table>
</SubContainerFor> */}
{/* ***************************************************************8 */}
<Modal isOpen={model}
// className="Modal"
// overlayClassName="Overlay"
style={
  {
    overlay:{
      backgroundColor:'rgba(8, 8, 8, 0.8)'
    },
    content:{
      maxWidth: '40%',
      margin: '3% 25%'
  }

  }
}
 >
  <button style={{border:'none'}} type='button' onClick={closemodel} >
        Close
        </button>
        {/* <DeleteConfirm
     showModal={showModal}
     title="Delete Confirmation"
     body='Are you sure want to delete?'
     apiStatus={allloadingdata}
     closeDeleteModalHandler={closeDeleteModalHandler}
     confirmDelete={confirmDelete}
     /> */}
        </Modal>

    {/* <SubContainerFor> */}
<Modal isOpen={mod}
// className="Modal"
// overlayClassName="Overlay"
style={
  {
    overlay:{
      backgroundColor:'rgba(8, 8, 8, 0.8)'
    },
    content:{
      maxWidth: '80%',
      margin: '3% 10%'
  }

  }
}
 >
  <button style={{border:'none'}} type='button' onClick={closeModal} >
        Close
        </button>
  <MemberFormData/>
  {/* ******************************* */}
  {/* <div className='container-mod'>
  <div className='bloc-tab'>
    <div onClick={()=>toggleTab(1)} className={toggleState===1?'tabs active-tabs':'tabs'}>General</div>
    <div onClick={()=>toggleTab(2)} className={toggleState===2?'tabs active-tabs':'tabs'}>Income</div>
    <div onClick={()=>toggleTab(3)} className={toggleState===3?'tabs active-tabs':'tabs'}>Investment</div>
    <div onClick={()=>toggleTab(4)} className={toggleState===4?'tabs active-tabs':'tabs'}>Expense</div>
    <div className='tabs'>
      <button style={{border:'none'}} type='button' onClick={closeModal} >
        Close
        </button>
      </div>
  </div>
  <div className='content-tab'>
    <div className={toggleState === 1 ? "content  active-content" : "content"} ><AddNewMember/></div>
    <div className={toggleState === 2 ? "content  active-content" : "content"} ><AddIncome/></div>
    <div className={toggleState === 3 ? "content  active-content" : "content"} ><AddInvestment/></div>
    <div className={toggleState === 4 ? "content  active-content" : "content"} ><AddExpense/></div>
  </div>
  </div> */}

  {/* ***************************************** */}
  {/* <SubContainerFor>
  <button type='button' onClick={closeModal} style={{backgroundColor:'dodgerblue', color:'white', width:'100px', height:'40px', borderRadius:'4px', fontSize:'18px', marginLeft:'6px', border:'none'}}>Close</button>
  <button className='model-bttn' disabled={enableBttn.genral} name='save' type='button' onClick={()=>setFirstStep('generalinfo')}>Add Info</button>
  <button className='model-bttn' disabled={enableBttn.invest}  name='save' type='button' onClick={()=>setFirstStep('addexpense')}>Add Expense</button>
  <button className='model-bttn' disabled={enableBttn.expense} type='button'  onClick={()=>setFirstStep('addinvest')}>Add Investment</button>
  <button className='model-bttn' disabled={enableBttn.income} type='button'  onClick={()=>setFirstStep('addincome')}>Add Income</button>
  <button className='model-bttn' type='button' onClick={closeModal} >Close</button>
  <button className='model-bttn' type='button' >Submit</button>
  </SubContainerFor> */}

  {/* <SubContainerThree> */}

    {/* {firstStep==='edit/:id' && <Edit/>} */}
  {/* {firstStep==='addincome' && <AddIncome/>}
  {firstStep==='addexpense' && <AddExpense/>}
  {firstStep==='addinvest' && <AddInvestment/>}
  {firstStep==='generalinfo' && <AddNewMember/>} */}
  {/* </SubContainerThree> */}
  
  {/* <div className='outlet'><Outlet/></div> */}
  
   {/* <PersonalMember/> */}
  {/*<form onSubmit={handleSubmit(onSubmit)}>
  <label htmlFor='firstname'>First Name</label>
      <input {...register("firstName")} name="firstname"/><br/>
      <label htmlFor='lastname'>Last Name</label>
      <input {...register("lastName")} name="lastname"/><br/>
      <label htmlFor='pan'>PAN No.</label>
      <input {...register("PAN")} name="pan"/><br/>
      <label htmlFor='aadhar'>AADHAR No.</label>
      <input {...register("AADHAR")}name="aadhar" /><br/>
      <label htmlFor='mobile'>Mobile</label>
      <input {...register("Mobile")} name="mobile" /><br/>
      <label htmlFor='email'>Email</label>
      <input {...register("Email")} name="email" /><br/>
      <label htmlFor='age'>Age</label>
      <input {...register("age")} name="age" /><br/>
      <label htmlFor="ms">Marital Status: </label>
      <select {...register("MaritalStatus")} name='ms'>Marital Status
        <option value="female">Single</option>
        <option value="male">Married</option>
        <option value="other">other</option>
      </select><br/>
      <label htmlFor="gender">Gender: </label>
      <select {...register("gender")} name='gender'> Gender
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
      <br/>*/}
      
    {/* </form>  */}
  
   
  {/* <AddGeneralInfo/>
         {modalpage==='generalinfoadd' && 
      <AddGeneralInfo/>}
      {modalpage==='generalincomeadd' && <AddIncome/>} */}
  
 {/* <button>next</button> */}
</Modal>
{/* <hr/> */}
<Outlet/>
     {/* </SubContainerFor> */}
    
{/* <MemberButton type='button' onClick={()=>setAdd('newmember')}>Add New Member</MemberButton>
      <SubContainerThree>
        <MemberButton2>General</MemberButton2>
        <MemberButton2>Income</MemberButton2>
        <MemberButton2>Investment</MemberButton2>
        <MemberButton2>Expense</MemberButton2>
      </SubContainerThree>

       {add==='personal' && (<SubContainerFor>
      <Edit/>
      </SubContainerFor>)} */}


      {/* {add==='editmember' && <Edit/>} */}
      {/* {add==='newmember' && (<SubContainerFor><NewMember/></SubContainerFor>)} */}
      {/* <Outlet/>  */}
</Container>
    {/* <div>
      <Outlet/>
    </div> */}
    
    </>
    </GlobalInfo.Provider>
  )
  }

export default Members;