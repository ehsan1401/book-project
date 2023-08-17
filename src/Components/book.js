import { useEffect, useState } from 'react';
import data from '../db/Json/books.json';
import visit from'../db/Json/visitpage.json'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const BookPgage = () => {
    
    const { id } = useParams();
    const [counter , setCounter] = useState(0);
    useEffect(()=>setCounter(counter + 1 ),[]);
    // counter add to database
    
    return ( 
        <div className="bookpage p-16 bg-gray-200">
            {data.map((item)=>{

                if(id == item.id){
                    return(
                        <div key={item.id}>
                                <div className="info-book h-auto w-full rounded-xl md:flex block shadow-2xl bg-white ">
                                    <div className="image md:w-1/3 w-full p-24 ">
                                        <img src={item.imageURl} alt="image" className=' h-auto w-full  rounded-2xl hover:shadow-2xl transition duration-500 ' />
                                        <p className='p-5 font-light text-lg'>Written by : <span className='hover:text-red-600 transition duration-400 cursor-pointer '>{item.author}</span></p>
                                    </div>
                                    <div className="content-book md:w-2/3 w-full p-5 h-auto shadow-lg ">
                                        <h1 className='text-3xl font-bold h-auto md:h-1/6   flex items-center justify-center'>{item.name}</h1>
                                        <div className="content-details w-full h-auto md:h-4/6  md:flex block ">
                                            <div className="content-line3 w-full md:w-1/2 h-full  text-left space-y-4 p-5  ">
                                                <p className='font-bold text-xl'>Title: <span className='font-medium text-base text-gray-800'>{item.name}</span></p>
                                                <p className='font-bold text-xl'>Publish date: <span className='font-medium text-base text-gray-800'>{item.publishdate}</span></p>
                                                <p className='font-bold text-xl'>age rating: <span className='font-medium text-base text-gray-800'>{item.age}</span></p>
                                                <p className='font-bold text-xl'>author: <span className='font-medium text-base text-gray-800'>{item.author}</span></p>
                                                <p className='font-bold text-xl'>pages: <span className='font-medium text-base text-gray-800'>{item.pages}</span></p>
                                                <p className='font-bold text-xl' >Languages: <span className='font-medium text-base text-gray-800'><ul className='pl-2 font-light '>{item.language.map((lan)=>{return(<li>-{lan}</li>)})}</ul></span></p>
                                                <p className='font-bold text-xl'>age rating: <span className='font-medium text-base text-gray-800'>{item.age}</span></p>

                                            </div>
                                            
                                            <div className="content-line1 w-full md:w-1/2 h-auto grid grid-flow-row p-5  text-left ">

                                                <div className="text">
                                                    <p className='font-bold text-xl'> book summary: 
                                                        <span className='font-light pl-3 text-gray-800'>{item.info}</span>
                                                    </p>
                                                </div>
                                                <div className="visit-side md:p-0  m-5 ">
                                                    {
                                                    visit.map((vis)=>{
                                                        if(id == vis.id){
                                                            return(
                                                                    <div className="visit" key={vis.id}>
                                                                        <p className='font-bold text-xl'>visited: <span className='font-medium text-base text-gray-800'>{vis.visit} people</span></p>
                                                                    </div>
                                                                );
                                                            }
                                                        })
                                                    }
                                                </div>
                                                
                                                <div className=' flex'>
                                                    <div className='w-1/3 '></div>
                                                    <div className="price border-black border-dashed border-2 w-2/3 h-32 text-center p-3 relative  ">
                                                        <h1 className='font-sans text-2xl h-auto  '>Price: <span className='font-semibold text-lime-600'>{item.price} <span>{item.priceValue}</span></span></h1>
                                                        <Link to={"*"} className='flex justify-center items-center mx-10 my-5 h-auto bg-red-600 hover:bg-red-800 text-white font-semibold p-2 rounded'>Read Book</Link>
                                                    </div>
                                                    
                                                </div>

                                            </div>
                                            
                                        </div>
                                        <div className="another-content block md:w-1/2 w-full md:h-1/6 h-auto text-left "><h1>Labels:</h1>
                                        <p>{item.labels.map((label)=>{return(<Link to={"*"} className='p-1 hover:text-blue-600'>{label}</Link>)})}</p></div>

                                    </div>

                                    
                                </div>
                        </div>
                    );
                }

            })}




        </div>
     );
}
 
export default BookPgage;