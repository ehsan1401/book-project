import { useEffect, useState } from 'react';
import data from '../db/Json/books.json';
import { useParams } from 'react-router-dom';


const BookPgage = () => {
    
    const { id } = useParams();
    const [counter , setCounter] = useState(0);
    useEffect(()=>setCounter(counter + 1 ),[]);
    
    return ( 
        <div className="bookpage p-16 bg-gray-200">
            {data.map((item)=>{

                if(id == item.id){
                    return(
                        <div key={item.id}>
                            {/* <h1>{item.name}</h1>
                            <p>param - {id}</p> */}
                                <div className="info-book h-full w-full rounded-xl flex shadow-2xl bg-white ">
                                    
                                    <div className="content-book w-2/3 p-5 pt-16">
                                        <h1 className='text-3xl font-bold'>{item.name}</h1>
                                        <div>
                                            visited: <span>{counter}</span>
                                        </div>
                                    </div>
                                    <div className="image w-1/3 p-24 ">
                                        <img src={item.imageURl} alt="image" className=' h-auto w-full  rounded-2xl ' />
                                        <p className='p-5 font-light text-lg'>Written by : <span className='hover:text-red-600 transition duration-500 cursor-pointer '>{item.author}</span></p>
                                    </div>
                                    
                                </div>
                                <p className='block!'>page id: {item.id}</p>
                            
                        </div>
                    );
                }

            })}
            <p>{window.location.href}</p>




        </div>
     );
}
 
export default BookPgage;