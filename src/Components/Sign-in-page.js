import { useRef, useState } from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import users from '../db/Json/users.json';


const SignIn = () => {

    
    const navigate = useNavigate();
    const [error , setError] = useState("");

    const handleSubmit= (e)=>{  
        e.preventDefault();
        const data = new FormData(e.target);
        const data_info = Object.fromEntries(data.entries());
        let pass = true;
        if(data_info.Password === data_info.repassword){
            
            users.map((user)=>{

                if(user.email === data_info.email){
                    pass = false;
                }

            })

            if(pass == false){
                setError("This email Already used!");
            }else{
                navigate("/Login");
                // add information to database
            }

            
            
        }else{
            setError("your password and repeate password must be same!");
        }

        
      }


    return ( 
        
        <div className="SignIn bg-cover bg-black" style={{backgroundImage:"url(./images/background-sign-in-page.jpg)" }}>
            <div className="w-full h-screen md:px-44 px-5 py-16">
                <div className="content  w-full h-full flex" style={{boxShadow: '-3px 2px 20px black'}}>
                    <div className="form-sign-in hidden md:flex w-1/2 h-full relative bg-black bg-opacity-10 ">
                        <div className=" h-44 w-full absolute bottom-0 text-white ">
                            <h1 className="text-2xl font-medium drop-shadow-2xl">Already have an account?</h1>
                            <p className='font-light'>Login to your account</p>
                            <Link to={"/Login"} className='underline font-bold hover:text-gray-700'><span>&#x2190;</span>Log in</Link>
                            <div className="links text-center">
                                <ul className='flex gap-5 justify-center mt-5 font-mono'>
                                    <Link to={"/"} className='hover:underline'><li>Home</li></Link>
                                    <Link to={"/aboutUs"} className='hover:underline'><li>About us</li></Link>
                                    <Link className='hover:underline'><li>Need Help?</li></Link>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="sign-in-text w-full md:w-1/2 bg-white h-full md:p-32 p-5">
                        <div className='w-full h-full'>
                            <h1 className='text-3xl font-bold'>Sign in</h1>
                            <form className=' mt-5 w-full p-5' onSubmit={handleSubmit}>

                                <input type="email" placeholder='Email' name='email' required  className='my-2 p-2 focus:outline-none  shadow-md w-full'/><br />

                                <input type="password" placeholder='Password' name='Password' required className='my-2 p-2 focus:outline-none  shadow-md w-full'/><br />

                                <input type="password" placeholder='Repeate Password' name='repassword' required  className='my-2 p-2 focus:outline-none w-full shadow-md '/><br />

                                <input type="submit" value={"Sign in"} className='my-2 p-2 focus:outline-none shadow-md w-full bg-purple-900 text-white font-semibold hover:bg-indigo-600 transition duration-500 rounded-2xl '/> <br />

                            </form>
                            <div className="error text-red-700 font-light " id="repeate-error"><p>{error}</p></div>
                            
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
     );
}
 
export default SignIn;