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
          {
            (() => {
              if(isUpdateData !== null){
                return (
                  <div className=""></div>
                )
              }
              else{
                return (
                  <div className=""></div>
                )
              }
            })()
          }
          <div className="">

          </div>
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