import Icons from "@reacticons/ionicons"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from "react-countup"

const MyData = () => {
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

    const headleBack = () => {
        window.location.reload()
    }

    const myData = [
        {id: 1, name: "My Partners", value: <CountUp end={20} />, icon: "perople", btnvalue: "myPartners"},
        {id: 2, name: "My Datings", value: <CountUp end={20} />, icon: "perople", btnvalue: "myDatings"},
        {id: 3, name: "My Stories", value: <CountUp end={20} />, icon: "perople", btnvalue: "myStories"},
        {id: 4, name: "My Posts", value: <CountUp end={20} />, icon: "perople", btnvalue: "myPosts"},
        {id: 5, name: "My Reporteds", value: <CountUp end={20} />, icon: "perople", btnvalue: "myReporteds"},
        
    ]

    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className="">
                <div>
                    <button onClick={headleBack} className="bg-pink-500 text-white py-4 px-8 rounded duration-500 hover:ml-2">Back to Dashboard</button>
                </div>

                {/* my data */}
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

export default MyData