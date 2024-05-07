import Icons from "@reacticons/ionicons"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup';

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

  const allDataCout = [
    {id: 1, name: "Reports", icon: "help-circle", value: <CountUp end={20} />, btnValue: ""},
    {id: 2, name: "Posts", icon: "", value: <CountUp end={20} />, btnValue: ""},
    {id: 3, name: "Womens", icon: "", value: <CountUp end={20} />, btnValue: ""},
    {id: 4, name: "Mens", icon: "", value: <CountUp end={20} />, btnValue: ""},
    {id: 5, name: "Stories", icon: "", value: <CountUp end={20} />, btnValue: ""},
    {id: 6, name: "Fake Accounts", icon: "", value: <CountUp end={20} />, btnValue: ""},
    {id: 7, name: "Reported Accounts", icon: "", value: <CountUp end={20} />, btnValue: ""},    
  ]

    if(RoleUser !== null && EmailUser !== null){
      return (
        <div>
          <div className="lg:grid grid-cols-4 gap-4 my-8 mx-4">
              {
                allDataCout.map((dashData) => {
                  return (
                    <div className="bg-pink-400 text-white rounded-xl text-center py-8 px-16 cursor-pointer duration-500 hover:bg-pink-500">
                      <h1 className="text-3xl"><Icons name={dashData.icon} size="large"></Icons></h1>
                      <h1 className="text-md">{dashData.name}</h1>
                      <h1 className="">{dashData.value}</h1>
                    </div>
                  )
                })
              }
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