import { useState } from "react";
import {Link} from 'react-router-dom'

const NavigationBar = () => {
    const [login,setLogin] = useState(false);
    return ( 
        <div className="navigationbar">
            <div className="content bg-blue-950 text-white">
                { login && <button className="float-right bg-blue-700 font-bold px-4 py-2 mx-5 my-4 rounded-md hover:bg-blue-100 hover:text-black transition duration-300">User</button>}

                { !login && <button className="float-right bg-blue-700 font-bold px-4 py-2 mx-5 my-4 rounded-md hover:bg-blue-100 hover:text-black transition duration-300">Sign in</button>}

                <ul className="flex p-2 gap-5 box-border ml-10 ">
                    <a href="#"><li className="w-14 h-14 mx-3"><img src="images/logo.png" alt="logo"/></li></a>
                    <a href="#" className="p-3 font-bold hover:text-blue-500 transition duration-200"><li> contact us </li></a>
                    <Link to={"/aboutUs"} className="p-3 font-bold hover:text-blue-500 transition duration-200"><li> aboute us </li></Link>
                    <Link to={"/"} className="p-3 font-bold hover:text-blue-500 transition duration-200"><li> home </li></Link>
                    {/* <a href="#" className="p-3 font-bold hover:text-blue-500 transition duration-200" onClick={()=>setLogin(!login)}><li> change </li></a> */}
                </ul>
            </div>
        </div>
     );
}
 
export default NavigationBar;