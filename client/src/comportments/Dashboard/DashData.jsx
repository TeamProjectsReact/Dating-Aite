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
    {name: "Reports", icon: "", value: <CountUp end={20} />, btnValue: ""},
    {name: "Posts", icon: "", value: <CountUp end={20} />, btnValue: ""},
    {name: "Womens", icon: "", value: <CountUp end={20} />, btnValue: ""},
    {name: "Mens", icon: "", value: <CountUp end={20} />, btnValue: ""},
    {name: "Stories", icon: "", value: <CountUp end={20} />, btnValue: ""},
    {name: "Fake Accounts", icon: "", value: <CountUp end={20} />, btnValue: ""},
    {name: "Reported Accounts", icon: "", value: <CountUp end={20} />, btnValue: ""},    
  ]

    if(RoleUser !== null && EmailUser !== null){
      return (
        <div>DashData</div>
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