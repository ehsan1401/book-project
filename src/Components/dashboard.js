import { Link, useParams } from 'react-router-dom';
import users from '../db/Json/users.json';
import books from '../db/Json/books.json';
import Authors from '../db/Json/authors.json';
import Message from '../db/Json/UserMessages.json';

import { useState } from 'react';

const UserDashboadrd = () => {
    const { userID } = useParams();
    const[bookfavorite,setBookfavorite] = useState(false);
    const[authorfavorite,setAuthorfavorite] = useState(false);
    const[changes,setChanges] = useState(false);
    const[messages,setMessages] = useState(false);



    

    return ( 
        <div className="dashboadrd w-full h-auto bg-gray-200">
            {users.map((user)=>{
                if(userID == user.userID){
                    return(
                        <div className="user  w-full lg:h-screen h-auto grid lg:flex p-5 gap-5">
                            <div className="profile w-full lg:w-1/5 border-dashed border-black border-2 p-3 bg-white rounded-lg shadow-2xl">
                                <div className="image sm:mx-64 md:mx-10 xl:m-0 mx-40 rounded-full relative overflow-hidden">
                                    <form className=' absolute w-full h-full bg-white opacity-0 hover:opacity-100 hover:bg-opacity-70 transition duration-500'>
                                        <label htmlFor="edite" className='grid items-center pt-5'>
                                            <img src="../images/edite-image.png" alt="edite image" className=' w-1/2 h-full block m-auto'  />
                                            <div>
                                                <p className='block font-semibold '>edite your image</p>
                                            </div>
                                            <input type="file" className='w-full h-full hidden' accept="jpg , png" id='edite' name='edite' />
                                        </label>
                                    </form>
                                    <img src={user.userImageAddres} alt="profile" className='h-auto w-full' />
                                </div>
                                <div className="information h-auto w-full my-5 font-mono text-gray-700"><h1>{user.email}</h1></div>
                                <div className="bootons grid w-full">
                                    <button className='p-3  bg-blue-700 text-white font-semibold hover:bg-blue-800 rounded-t-lg' 
                                    onClick={()=>{
                                    setBookfavorite(true); 
                                    setAuthorfavorite(false); 
                                    setChanges(false); 
                                    setMessages(false)
                                    }}>Favorite Books</button>
                                    <button className='p-3 bg-blue-700 text-white font-semibold hover:bg-blue-800' 
                                    onClick={()=>{
                                    setBookfavorite(false); 
                                    setAuthorfavorite(true); 
                                    setChanges(false); 
                                    setMessages(false)
                                    }}>Favorite Authors</button>
                                    <button className='p-3 bg-blue-700 text-white font-semibold hover:bg-blue-800' 
                                    onClick={()=>{
                                    setBookfavorite(false);
                                    setAuthorfavorite(false); 
                                    setChanges(true); 
                                    setMessages(false)
                                    }}>Some Changes</button>
                                    <button className='p-3 bg-blue-700 text-white font-semibold hover:bg-blue-800 rounded-b-lg' 
                                    onClick={()=>{
                                    setBookfavorite(false);
                                    setAuthorfavorite(false);
                                    setChanges(false);
                                    setMessages(true)
                                    }}>Message</button>

                                </div>
                            </div>

                            <div className="main-content-dashboard lg:w-4/5 w-full border-solid border-black border-2 bg-white rounded-lg shadow-2xl box-border relative overflow-scroll p-10">
                                
                                {bookfavorite && <div className="bookfavorite">
                                    <h1 className='font-bold text-2xl text-left pl-10 pb-10'>Favorite Books</h1>
                                    <div className=' h-full rounded-lg grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                                    {user.IDbookmarkBooks.map((bookmark)=>
                                        books.map((book)=>{
                                            if(bookmark == book.id){
                                                return(<div key={book.id} className=' relative '>
                                                    <Link to={"/book/" + book.id}>
                                                    <div className=" flex flex-row pb-6 " >
                                                            <div className='inline-block w-full'>
                                                                <div className='absolute w-full h-96 bg-slate-800 opacity-0 text-white font-semibold text-sm hover:opacity-100 transition duration-500 cursor-pointer rounded-lg px-3 py-5 overflow-y-scroll'>
                                                                <h1 className="title py-1 font-bold">
                                                                    {book.name}
                                                                    </h1>
                                                                    <h1 className="author font-normal">
                                                                    {book.author}
                                                                    </h1>

                                                                    <p className="p-2 font-light">{book.info}</p>
                                                                </div>
                                                                <img src={book.imageURl} alt="" className='h-96 w-full rounded-lg ' />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>)
                                            }
                                        })
                                    )}
                                    </div>
                                </div>}
                                {authorfavorite && 
                                    <div className="authorfavorite  w-full h-full rounded-lg ">
                                        <h1 className='font-bold text-2xl text-left pl-10 pb-10'>Favorite Authors</h1>
                                        <div className='grid grid-flow-row lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3'>
                                            {
                                                user.IDauthorBookmark.map((autId)=>
                                                    Authors.map((aut)=>{
                                                        if(aut.authorId === autId){
                                                            return(
                                                            <Link to={"/author/" + aut.name}>
                                                                <div className="autor bg-white border-black border-dashed border-2 h-auto w-full rounded-lg my-2 overflow-hidden transition-all duration-500 hover:shadow-[inset_0_-2px_30px_rgba(0,0,0,0.3)] font-bold text-gray-700 text-2xl p-6 flex">
                                                                    <img src={aut.imageURL} alt={aut.name} className='h-full w-1/3 rounded-full' />
                                                                    <h1 className='flex px-10 items-center'>{aut.name}</h1>
                                                                </div>
                                                            </Link>
                                                            );
                                                        }
                                                    })
                                                )
                                            }
                                        </div>
                                </div>}
                                {changes && <div className="some-ghanges  w-full h-full rounded-lg "><h1 className='font-bold text-2xl text-left pl-10 pb-10'>Some Changes</h1></div>}
                                {messages && <div className="some-ghanges  w-full h-full rounded-lg ">
                                    <h1 className='font-bold text-2xl text-left pl-10 pb-10'>Messages</h1>
                                    <div className='message-container h-full px-20'>
                                        {
                                            Message.map((mes)=>{
                                                
                                                if(mes.userID === user.userID){
                                                    return(
                                                        <Link to={"/message/" + mes.messageId}>
                                                            <div className='border-2 border-solid flex m-8 border-black rounded-lg overflow-hidden hover:shadow-2xl' key={mes.messageId}>
                                                                <div className='bg-yellow-300 p-5 rounded-tr-full rounded-ee-full inline-block w-20'>
                                                                    <img src="../images/message.png" alt="message-icon" className='w-full h-full' />
                                                                </div>
                                                                <p className='flex justify-center items-center ml-10 font-bold text-xl'>{mes.messageTitle}</p>
                                                                <p className="flex justify-center items-center ml-20 font-semibold text-xl">Sender: <span className='font-light m-3'>{mes.sender}</span></p>


                                                            </div>
                                                        </Link>
                                                    )
                                                }

                                                
                                            }
                                            )}
                                    </div>
                                    
                                </div>}

                                

                            </div>

                            
                        </div>
                    )
                }
            })}    
        </div>
     );
}
 
export default UserDashboadrd;
