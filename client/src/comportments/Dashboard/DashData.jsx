import Icons from "@reacticons/ionicons"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup';
import axios from "axios";


const DashData = () => {
    const navigate = useNavigate() 

  //for open and close Side bar
  const [sideOpen, SetsideOpen] = useState();
  const [navOpen, SetNavOpen] = useState();

  //curent login user
  const RoleUser = secureLocalStorage.getItem("Login1");
  const EmailUser = secureLocalStorage.getItem("login2");

  const [buttonValue, SetButtonValue] = useState(0)
  const HeadleButtonClick = (clickValue) => {
      SetButtonValue(clickValue)   
  }

  //   check the current login user is update the personal Data
  const [isUpdateData, SetisUpdateData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8081/isDataUpdated/' + EmailUser)
        .then(res => SetisUpdateData(res.data))
        .catch(err => console.log(err))
    }, [])

  const allDataCout = [
    {id: 1, name: "Reports", icon: "help-circle", value: <CountUp end={20} />, btnValue: "reports"},
    {id: 2, name: "Posts", icon: "document", value: <CountUp end={20} />, btnValue: "posts"},
    {id: 3, name: "Womens", icon: "female", value: <CountUp end={20} />, btnValue: "Womens"},
    {id: 4, name: "Mens", icon: "male", value: <CountUp end={20} />, btnValue: "Mens"},
    {id: 5, name: "Stories", icon: "book", value: <CountUp end={20} />, btnValue: "Stories"},
    {id: 6, name: "Fake Accounts", icon: "person", value: <CountUp end={20} />, btnValue: "FakeAccounts"},
    {id: 7, name: "Reported Accounts", icon: "help-circle", value: <CountUp end={20} />, btnValue: "ReportedAccounts"},    
  ]

    if(RoleUser !== null && EmailUser !== null){
      return (
        <div>
          <div className="">
            {/* {isUpdateData.Data} */}

          </div>
          {
            (() => {
              if(RoleUser === "SuperAdmin"){
                return (
                  <h1 className="text-pink-500 text-xl font-semibold mx-4">SuperAdmin Dashboard</h1>
                )
              }
              else if(RoleUser === "user"){
                return (
                  <h1 className="text-pink-500 text-xl font-semibold mx-4">User Dashboard</h1>
                )
              }
            })()
          }

          <div className="lg:grid grid-cols-4 gap-4 my-8 mx-4">
              {
                allDataCout.map((dashData) => {
                  if(RoleUser === "SuperAdmin"){
                    return (
                      <div onClick={() => HeadleButtonClick(dashData.btnValue)} className="bg-pink-400 text-white rounded-xl text-center py-8 px-8 cursor-pointer duration-500 hover:bg-pink-500">
                        <h1 className="text-3xl"><Icons name={dashData.icon} size="large"></Icons></h1>
                        <h1 className="text-md">{dashData.name}</h1>
                        <h1 className="text-xl">{dashData.value}</h1>
                      </div>
                    )
                  }
                  else if(RoleUser === "user"){
                    if(dashData.id !== 6 && dashData.id !== 7){
                      return (
                        <div onClick={() => HeadleButtonClick(dashData.btnValue)} className="bg-pink-400 text-white rounded-xl text-center py-8 px-8 cursor-pointer duration-500 hover:bg-pink-500">
                          <h1 className="text-3xl"><Icons name={dashData.icon} size="large"></Icons></h1>
                          <h1 className="text-md">{dashData.name}</h1>
                          <h1 className="text-xl">{dashData.value}</h1>
                        </div>
                      )
                    }
                  }

                })
              }
          </div>
          {/* {buttonValue} */}
          <div className="">
            {/* fetch data */}
          </div>

          <div className="my-8">
            <h1 className="text-pink-500 text-xl font-semibold mx-4">Personal Information</h1>

            <div className="mx-4 rounded-xl my-4 bg-pink-200 py-8 px-8">
              <div className="lg:grid grid-cols-3 gap-4">
                <div className="">
                  <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" className=" ml-4"/>
                  <p className="my-2"><span className="text-pink-500 font-semibold">Username: </span> Jehankandy</p>
                  <p className="my-2"><span className="text-pink-500 font-semibold">Email: </span> jehan@123.com</p>
                  <p className="my-2"><span className="text-pink-500 font-semibold">First Name: </span> Jehankandy</p>
                </div>
                <div className="">
                  <p className="my-2"><span className="text-pink-500 font-semibold">Last Name: </span> kandy</p>
                  <p className="my-2"><span className="text-pink-500 font-semibold">NIC/Passport No: </span> 123456789V</p>
                  <p className="my-2"><span className="text-pink-500 font-semibold">Address: </span> 88, ABC Street, XYZ</p>
                  <p className="my-2"><span className="text-pink-500 font-semibold">Mobile: </span> +94 xxxxxxxxx</p>
                  <p className="my-2"><span className="text-pink-500 font-semibold">location: </span> USA</p>
                  <p className="my-2"><span className="text-pink-500 font-semibold">Gender: </span> Male</p>
                  <p className="my-2"><span className="text-pink-500 font-semibold">Partners: </span> Female</p>
                </div>
                <div className="">
                  <p className="my-2"><span className="text-pink-500 font-semibold">Accept Pets: </span> No</p>
                  <p className="my-2"><span className="text-pink-500 font-semibold">Accept Drinks: </span> Yes</p>
                  <p className="my-2"><span className="text-pink-500 font-semibold">Covid Vaccinated: </span> Yes</p>
                  <p className="my-2"><span className="text-pink-500 font-semibold">Accept Dating for: </span> 5 days</p>
                  <p className="my-2"><span className="text-pink-500 font-semibold">Accept : </span> Yes</p>
                  <button className="bg-pink-400 py-4 px-8 text-white rounded-xl duration-500 hover:ml-2">Update</button>
                </div>
              </div>

            </div>
          </div>          
        </div>
      )
    }
    else{
      useEffect(() => {
          localStorage.clear()
          navigate('/')
      }, [])
    }

}

export default DashData