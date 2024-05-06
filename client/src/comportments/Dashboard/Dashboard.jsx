import Icons from "@reacticons/ionicons"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import  secureLocalStorage  from  "react-secure-storage"

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
      {id: 1, name: "Dashboard", link: "#", icon: <Icons name="home" size="large"></Icons>, btnValue: "Books"},
      {id: 2, name: "Journals", link: "#", icon: <Icons name="document-text" size="large"></Icons>, btnValue: "Journals"},
      {id: 3, name: "Magazine ", link: "#", icon: <Icons name="newspaper" size="large"></Icons>, btnValue: "Magazine"},
      {id: 4, name: "Articles", link: "#", icon: <Icons name="book" size="large"></Icons>, btnValue: "Articles"},
      {id: 5, name: "Thesis", link: "#", icon: <Icons name="book" size="large"></Icons>, btnValue: "Thesis"},
      {id: 6, name: "Borrowed Books", link: "#", icon: <Icons name="book" size="large"></Icons>, btnValue: "Borrowed Books"},
      {id: 7, name: "Users", link: "#", icon: <Icons name="people" size="large"></Icons>, btnValue: "Users"},
      {id: 8, name: "Profile", link: "#", icon: <Icons name="person" size="large"></Icons>, btnValue: "Profile"}, 
      {id: 9, name: "All Books", link: "#", icon: <Icons name="book" size="large"></Icons>, btnValue: "AllBooks"},               
  ]
  const navBar = [
    {name: "Notifications", link: "#", desc: "notifications", icon: <Icons name="notifications"></Icons>},
    {name: "Logout", desc: "logout", icon: <Icons name="power"></Icons>},        
]

  const headlelogout = () => {
      localStorage.clear()
      navigate('/')
      window.location.reload()
  }
  return (
    <div className="bg-purple-200 py-2 h-auto w-full">
    <div className="flex">
        <div className={`text-white duration-500 relative border-r-4 border-white-300 shadow-md my-1 mx-2 rounded-2xl bg-purple-400 h-auto pl-4 py-4 ${sideOpen ? "w-96" : "w-20" }`}>
            <div className="flex">
                <div className="text-white pt-1" onClick={() => SetsideOpen(!sideOpen)}>{sideOpen ? <Icons size="large" name="close"></Icons> : <Icons size="large" name="menu"></Icons>}</div>
                {/* <div className={`text-2xl pb-4 text-[#3B71CA] font-bold ${!sideOpen && 'scale-0'}`}>SuperAdmin</div>                     */}
            </div>
            <div className="">
                {sideOpen ? <div className="mx-8 px-8">

                    <img src="https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?t=st=1714988150~exp=1714991750~hmac=e1d2db921ee318bd0e8ffd7b7bd6a5021809718f5199a0e4044919a05cba8821&w=740" className="h-40 w-auto rounded-full"/>
                </div> : <div></div>}
            </div>
            <div className={`pl-2 text-xl text-white duration-500 hover:text-purple-700 cursor-pointer `}>
            <p className="ml-[-20px] text-center mt-8" >
            {sideOpen ? <div className="px-8">
                    {EmailUser}
                </div> : <div></div>}
            </p>
                    {sideOpen ? <div className="pl-2 pt-2">
                        {
                            (() => {
                                if(RoleUser === "SuperAdmin"){
                                    return (
                                        <p className="ml-[-20px] text-center text-sm mb-8" >SuperAdmin</p>
                                    )                            
                                }
                                else if(RoleUser === "user"){
                                    return (                                               
                                        <p className="ml-[-20px] text-center text-sm mb-8">UserDashboard</p>
                                    )    
                                }
                            })()
                        }
                        
                    </div> : <div className=""></div> }
            </div>
            <hr className="mt-2 mr-4 border-b-1 border-white"/>
            <div className="">
                {
                    allUserSide.map((sidem) => {
                       if(RoleUser === "SuperAdmin"){
                            return (
                                <Link to={sidem.link}>
                                    <div onClick={() => HeadleButtonClick(sidem.btnValue)} className="flex py-2 text-white duration-500 hover:ml-2 ">                        
                                        <p>{sidem.icon}</p>
                                        <p className={`whitespace-nowrap pt-2 pl-2 ${!sideOpen && 'scale-0'}`}>{sidem.name}</p>                        
                                    </div>
                                </Link>
                            )
                        }
                        if(RoleUser === "user"){
                            if(sidem.id === 8 ){
                                return (
                                    <Link to={sidem.link}>
                                        <div onClick={() => HeadleButtonClick(sidem.btnValue)} className="flex py-2 text-white duration-500 hover:text-purple-500">                        
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
                <div className="py-4 rounded-2xl bg-white my-1 px-4 w-full mr-2 shadow-xl">
                    
                    <div className="flex justify-between">
                        <p className="">LMS</p>
                        <div className="flex ">
                            {
                                navBar.map((nav) => {
                                    if(nav.desc === "logout"){
                                        return (
                                            <div onClick={headlelogout} className="px-2 text-red-500 flex cursor-pointer">
                                                <p>{nav.name}</p>
                                                <p className="pl-2 pt-[2px]">{nav.icon}</p>                                               
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>                      
                </div>
            </div>
        
    </div>
</div>
  )
}

export default Dashboard