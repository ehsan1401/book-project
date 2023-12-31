import { useState } from "react";
import {Link} from 'react-router-dom'
import UserDashboadrd from '../Components/dashboard';

const NavigationBar = () => {
    const [login,setLogin] = useState(false);
    return ( 
        <div className="navigationbar">
            <div className="content bg-blue-900 text-white md:hidden">      
                <ul className="grid text-left p-2 gap-5 ml-2 list-none" id="dropDown">
                <Link to={"/"}><li className="w-14 h-14 mx-3"><img src="images/logo.png" alt="logo"/></li></Link>
                <h1 className="absolute pl-36 right-5 top-4 font-bold text-3xl text-gray-100">Wealthy Library</h1>
                    <ul id="nav-md" className="hidden">
                            <a href="#search-for-books" className="scroll-smoot p-3 font-bold hover:text-blue-500 transition duration-200"><li> Search </li></a>
                            <Link to={"/All-books"} className="p-3 font-bold hover:text-blue-500 transition duration-200"><li> All Books </li></Link>
                            <Link to={"/"} className="p-3 font-bold hover:text-blue-500 transition duration-200"><li> Home </li></Link>
                            <Link to={"/Login"} className="p-3 font-bold hover:text-blue-500 transition duration-200"><li> Account </li></Link>
                    </ul>
                </ul>

            </div>
            <div className="content bg-blue-900 text-white hidden md:block">
                { login && <Link to={'/dashboard'} className="float-right bg-blue-700 font-bold px-4 py-2 mx-5 my-4 rounded-md hover:bg-blue-100 hover:text-black transition duration-300" title='welcome to your account'>User</Link>}

                { !login && <Link to={'/SignIn'} className="float-right bg-blue-700 font-bold px-4 py-2 mx-2 my-4 rounded-md hover:bg-blue-100 hover:text-black transition duration-300" title="Sign in to read more" >Sign in</Link>}
                { !login && <Link to={'/Login'} className="float-right bg-blue-700 font-bold px-4 py-2 mx-2 my-4 rounded-md hover:bg-blue-100 hover:text-black transition duration-300" title="Sign in to read more" >Log in</Link>}
                {/* search-for-books */}
                <ul className="flex p-2 gap-5 box-border ml-10 ">
                    <Link to={"/"}><li className="w-14 h-14 mx-3"><img src="images/logo.png" alt="logo"/></li></Link>
                    <a href="#search-for-books" className="scroll-smoot p-3 font-bold hover:text-blue-500 transition duration-200"><li> Search </li></a>
                    <Link to={"/All-books"} className="p-3 font-bold hover:text-blue-500 transition duration-200"><li> All Books </li></Link>
                    <Link to={"/"} className="p-3 font-bold hover:text-blue-500 transition duration-200"><li> Home </li></Link>
                    {/* <a href="#" className="p-3 font-bold hover:text-blue-500 transition duration-200" onClick={()=>setLogin(!login)}><li> change </li></a> */}
                </ul>
            </div>
        </div>
     );
}
 
export default NavigationBar;