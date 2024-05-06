import Icons from "@reacticons/ionicons"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import  secureLocalStorage  from  "react-secure-storage"
import DashData from "./DashData"

const Dashboard = () => {
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
  const allUserSide = [
      {id: 1, name: "Dashboard", link: "#", icon: <Icons name="home" size="large"></Icons>, btnValue: 0},
      {id: 2, name: "Notifications", link: "#", icon: <Icons name="notifications" size="large"></Icons>, btnValue: "Notifications"},
      {id: 3, name: "Users", link: "#", icon: <Icons name="people-circle" size="large"></Icons>, btnValue: "Users"},
      {id: 3, name: "Users", link: "#", icon: <Icons name="people-circle" size="large"></Icons>, btnValue: "Users"},
      {id: 3, name: "Users", link: "#", icon: <Icons name="people-circle" size="large"></Icons>, btnValue: "Users"},            
      {id: 4, name: "My Network", link: "#", icon: <Icons name="people" size="large"></Icons>, btnValue: "MyNetwork"},
      {id: 5, name: "Partners", link: "#", icon: <Icons name="people" size="large"></Icons>, btnValue: "Partners"},
      {id: 6, name: "Posts", link: "#", icon: <Icons name="document" size="large"></Icons>, btnValue: "Posts"},
      {id: 7, name: "My Datings", link: "#", icon: <Icons name="business" size="large"></Icons>, btnValue: "MyDatings"},
      {id: 8, name: "My Story", link: "#", icon: <Icons name="book" size="large"></Icons>, btnValue: "MyStory"},
      {id: 9, name: "My Posts", link: "#", icon: <Icons name="document" size="large"></Icons>, btnValue: "MyPosts"},
      {id: 10, name: "Profile", link: "#", icon: <Icons name="person" size="large"></Icons>, btnValue: "Profile"},
      
  ]

  const headlelogout = () => {
      localStorage.clear()
      navigate('/')
      window.location.reload()
  }

  const styles = {
    boxShadow: '2px 0 2px #DEDEDE',
  }
  return (
    <div className="bg-[#f4ebfe] h-auto w-full">
    <div className="flex">
        <div style={styles} className={`my-4 mx-4 rounded-xl pl-[-40px]duration-500 relative border-r-2 border-blue-200 bg-purple-300 duration-500 h-auto pl-4 py-4 ${sideOpen ? "w-72" : "w-20" }`}>
            <div className="flex">
                <div className="text-white pt-1" onClick={() => SetsideOpen(!sideOpen)}>{sideOpen ? <Icons size="large" name="close"></Icons> : <Icons size="large" name="menu"></Icons>}</div>
                {/* <div className={`text-2xl pb-4 text-[#3B71CA] font-bold ${!sideOpen && 'scale-0'}`}>SuperAdmin</div>                     */}
            </div>
            <div className="">
                {sideOpen ? <div>
                    <h1 className="text-center my-4 font-semibold text-2xl love-title">Dating App</h1>
                    <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" className="px-8 ml-4"/>
                    <p className="text-center mt-4">{EmailUser}</p>
                </div> : <div></div>}
            </div>
            <div className={`pl-2 text-xl text-white duration-500 hover:text-white cursor-pointer`}>
            
                    {sideOpen ? <div className="pt-2">
                        {
                            (() => {
                                if(RoleUser === "SuperAdmin"){
                                    return (
                                        <p className="text-center text-sm" >SuperAdmin</p>
                                    )                            
                                }
                                else if(RoleUser === "user"){
                                    return (                                               
                                        <p className="text-center text-sm" >UserDashboard</p>
                                    )    
                                }
                            })()
                        }
                        
                    </div> : <Icons name="speedometer" ></Icons> }
            </div>
            <hr className="mt-2 mr-4 border-b-1 border-blue-300"/>
            <div className="">
                {
                    allUserSide.map((sidem) => {
                       if(RoleUser === "SuperAdmin"){
                            return (
                                <Link to={sidem.link}>
                                    <div onClick={() => HeadleButtonClick(sidem.btnValue)} className={`flex py-4 text-white duration-500 hover:text-purple-700 hover:ml-3  ${sideOpen ? "px-6" : "px-1" }`}>                        
                                        <p>{sidem.icon}</p>
                                        <p className={`whitespace-nowrap pt-2 pl-2 ${!sideOpen && 'scale-0'}`}>{sidem.name}</p>                        
                                    </div>
                                </Link>
                            )
                        }
                        if(RoleUser === "user"){
                            if(sidem.id !== 3 ){
                                return (
                                    <Link to={sidem.link}>
                                        <div onClick={() => HeadleButtonClick(sidem.btnValue)} className={`flex py-4 text-white duration-500 hover:text-purple-700  ${sideOpen ? "px-6" : "px-1" }`}>                        
                                            <p>{sidem.icon}</p>
                                            <p className={`whitespace-nowrap pt-2 pl-2 ${!sideOpen && 'scale-0'}`}>{sidem.name}</p>                        
                                        </div>
                                    </Link>
                                )
                            }
                        }
                    })
                }
            </div>

        </div>
        <div className="w-full mr-2">
                {/* nav bar start */}
                <div className="py-8 rounded-2xl my-1 px-4 w-full mr-2 ">
                  <div className="flex justify-between">
                    <div className="text-2xl text-purple-500 love-title lg:visible invisible">
                      Dating App
                    </div>
                    <div className="mr-8">
                      <button onClick={headlelogout} className="bg-purple-600 py-4 px-8 rounded text-white duration-500 hover:mr-2">Logout</button>
                    </div>
                  </div>
                </div>
            {/*------------- content goes here  */}

                {
                  (() => {
                    if(buttonValue === 0){
                      return (
                        <DashData />
                      )
                    }
                  })()
                }

            {/*------------- content goes here End */}

            <div className="rounded-xl w-full bg-purple-300 py-8 mr-[-20px] text-center">
                &copy; The Dating App || Developed and Designed by JehanKandy
            </div>   
          </div>   
  
    </div>
</div>
  )
}

export default Dashboard