import {Link} from 'react-router-dom'
const NotFounded = () => {
    return ( 
        <div className="NotFounded flex">
            {/* <h2>Sorry We can Find your Page.</h2>*/}
            <div className="Eror w-1/4 "></div>
            <div className="Eror w-2/4 h-auto mt-10">
                <img src="./images/404.png" alt="Error 404" className='w-full' />
                <h2 className='px-10 font-extrabold text-6xl text-red-500'> Sorry</h2>
                <p className='p-3 font-light '>We cannot find the page you are looking for.</p>
                <Link to={"/"} className='mb-10 p-1 bg-red-400 block m-auto rounded-2xl w-32 hover:bg-red-900 hover:text-white'>Back Home</Link> 
            </div>
            <div className="Eror w-1/4 "></div>


        </div>
     );
}
 
export default NotFounded;