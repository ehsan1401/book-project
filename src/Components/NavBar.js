import { useState } from "react";
import {Link} from 'react-router-dom'

const NavigationBar = () => {
    const [login,setLogin] = useState(true);
    return ( 
        <div className="navigationbar">
            <div className="content bg-blue-950 text-white">
                { login && <button className="float-right bg-blue-700 font-bold px-4 py-2 mx-5 my-4 rounded-md hover:bg-blue-100 hover:text-black transition duration-300" title='welcome to your account'>User</button>}

                { !login && <button className="float-right bg-blue-700 font-bold px-4 py-2 mx-5 my-4 rounded-md hover:bg-blue-100 hover:text-black transition duration-300" title="Sign in to read more" >Sign in</button>}

                <ul className="flex p-2 gap-5 box-border ml-10 ">
                    <a href="#"><li className="w-14 h-14 mx-3"><img src="images/logo.png" alt="logo"/></li></a>
                    <a href="#" className="p-3 font-bold hover:text-blue-500 transition duration-200"><li> Contact Us </li></a>
                    <Link to={"/aboutUs"} className="p-3 font-bold hover:text-blue-500 transition duration-200"><li> Aboute Us </li></Link>
                    <Link to={"/"} className="p-3 font-bold hover:text-blue-500 transition duration-200"><li> Home </li></Link>
                    {/* <a href="#" className="p-3 font-bold hover:text-blue-500 transition duration-200" onClick={()=>setLogin(!login)}><li> change </li></a> */}
                </ul>
            </div>
        </div>
     );
}
 
export default NavigationBar;