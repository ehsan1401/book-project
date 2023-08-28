import {Link} from 'react-router-dom';
import BookPgage from './book';
import data from '../db/Json/books.json';
import visit from '../db/Json/visitpage.json';
import '../App.css';
import Autors from '../db/Json/authors.json';


const HomePage = () => {

   const sorted = visit.sort((a, b) => (a.visit < b.visit) ? 1 : -1)
    return ( 
        <div className="homepage h-full">
            <div className="main-container h-full">
                <div className="banner bg-blend-multiply bg-gray-500 bg-cover w-full" style={{backgroundImage:"url(./images/Banner-wallpeaper.jpg)" }}>
                    <h1 className='text-white flex justify-center p-52 text-6xl font-extrabold'><span className='underline'> Wellcome To Wealthy  Library </span> </h1>
                </div>

                <div className="genre bg-gray-200 px-24 py-5 text-left">
                    <h1 className='pt-3 text-3xl font-semibold'>Genres</h1>
                    <Link to={"/genres"} className='float-right p-3 my-3 font-medium hover:underline' >See more</Link>
                    <div className="genre-items grid grid-flow-col w-full h-auto mb-5 gap-5">


                        <div className="cart h-50 w-auto relative rounded-sm">
                            {/* <h1 className=' text-center h-50'>Fantasy</h1> */}
                            <p className='absolute w-full h-full flex justify-center items-center bg-slate-800 bg-opacity-80 text-white font-semibold text-xl hover:opacity-0 transition duration-500 cursor-pointer rounded-lg '>Fantasy</p>
                            <img src="./images/Book-genres/Fantasy.jpg" alt="Fantasy" className="w-auto h-full rounded-lg"/>
                        </div>
                        <div className="cart h-50 w-auto relative rounded-sm hidden sm:flex">
                            {/* <h1 className=' text-center h-50'>Fantasy</h1> */}
                            <p className='absolute w-full h-full flex justify-center items-center bg-slate-800 bg-opacity-80 text-white font-semibold text-xl hover:opacity-0 transition duration-500 cursor-pointer rounded-lg '>Science Fiction</p>
                            <img src="./images/Book-genres/Science-Fiction.jpg" alt="Science Fiction" className="w-auto h-full rounded-lg"/>
                        </div>                        
                        <div className="cart h-50 w-auto relative rounded-sm ">
                            {/* <h1 className=' text-center h-50'>Fantasy</h1> */}
                            <p className='absolute w-full h-full flex justify-center items-center bg-slate-800 bg-opacity-80 text-white font-semibold text-xl hover:opacity-0 transition duration-500 cursor-pointer rounded-lg '>Dystopian </p>
                            <img src="./images/Book-genres/Dystopian.jpg" alt="Dystopian" className="w-auto h-full rounded-lg"/>
                        </div>                        
                        <div className="cart h-50 w-auto relative rounded-sm hidden sm:flex">
                            {/* <h1 className=' text-center h-50'>Fantasy</h1> */}
                            <p className='absolute w-full h-full flex justify-center items-center bg-slate-800 bg-opacity-80 text-white font-semibold text-xl hover:opacity-0 transition duration-500 cursor-pointer rounded-lg '>Adventure </p>
                            <img src="./images/Book-genres/Adventure.png" alt="Adventure" className="w-auto h-full rounded-lg"/>
                        </div>                        
                        <div className="cart h-50 w-auto relative rounded-sm hidden md:flex">
                            {/* <h1 className=' text-center h-50'>Fantasy</h1> */}
                            <p className='absolute w-full h-full flex justify-center items-center bg-slate-800 bg-opacity-80 text-white font-semibold text-xl hover:opacity-0 transition duration-500 cursor-pointer rounded-lg '>Romance </p>
                            <img src="./images/Book-genres/Romance.png" alt="Romance" className="w-auto h-full rounded-lg"/>
                        </div>                        
                        <div className="cart h-50 w-auto relative rounded-sm hidden lg:flex">
                            {/* <h1 className=' text-center h-50'>Fantasy</h1> */}
                            <p className='absolute w-full h-full flex justify-center items-center bg-slate-800 bg-opacity-80 text-white font-semibold text-xl hover:opacity-0 transition duration-500 cursor-pointer rounded-lg '>Horror </p>
                            <img src="./images/Book-genres/Horror.jpg" alt="Horror" className="w-auto h-full rounded-lg"/>
                        </div>                        
                        <div className="cart h-50 w-auto relative rounded-sm hidden lg:flex">
                            {/* <h1 className=' text-center h-50'>Fantasy</h1> */}
                            <p className='absolute w-full h-full flex justify-center items-center bg-slate-800 bg-opacity-80 text-white font-semibold text-xl hover:opacity-0 transition duration-500 cursor-pointer rounded-lg '>Thriller </p>
                            <img src="./images/Book-genres/Thriller.jpg" alt="Thriller" className="w-auto h-full rounded-lg"/>
                        </div>

                    </div>

                </div>
                <div className="wave">
                    <img src="./images/wave.png" alt="wave" className='w-full' />
                </div>
                <div className='w-full h-auto md:flex'>
                    <div className="text-content text-left p-12 pl-20 md:w-2/3">
                        <h2 className='font-bold text-3xl mb-7'>Wealthy Library, a rich source of books</h2>
                        <div className="text-mai-page text-xl">
                            <p className='my-5'>Wealthy Library is a great source of books and written resources in the form of files that you can use online.</p>
                            <p className='my-5'>You can add desired books and articles and even translations of your books to the Wealthy Library without restrictions so that others can use them.</p>
                            <p className='my-5'>For more information, you can visit the About Us page and learn how to use the site and upload your books.</p>
                            <Link to={"/aboutUs"} className='float-right p-3 hover:underline hover:text-blue-900  shadow-md'>Learn more</Link>
                        </div>

                    </div>
                    <div className="image md:w-1/3">
                        <img src="./images/book-main.png" alt="book" className='' />
                    </div>
                </div>
            </div>

            <div className="search h-auto bg-gray-200 md:flex m-auto text-center" id='search-for-books'>

                <div className="search-image md:w-1/2 pl-20 h-auto">
                    <img src="./images/Search-vector1.png" alt="search" className='' />
                </div>
                
                <div className="search-content md:w-1/2  md:p-32 p-10">
                    <div className=' w-full h-full'>
                        <h2 className='text-3xl font-bold pt-10 text-center'>Looking for something specific?</h2>
                        <div className="form  flex justify-center my-20 h-full">
                            <form className='search-box w-full h-10  rounded-3xl shadow-lg'>
                                <input type="text" placeholder='Let`s go!' className='w-3/4  h-full px-10 rounded-l-3xl focus:outline-none'/>
                                <button className='w-1/4 h-full rounded-r-3xl bg-slate-800 text-white'>Search</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

            <div className='h-auto w-full p-12'>
                <div className='bg-white relative'>
                        <h2 className='text-left font-bold text-2xl'>Most popular books</h2>
                        <Link to={"/popular"} className='absolute right-0 pr-3 top-4 hover:underline font-bold'>See more</Link>
                    <div className=" grid md:grid-flow-col grid-flow-row w-full h-full mb-5 gap-5 pt-5">   
                        {sorted.slice(0, 6).map((sort_item) =>
                            data.map(
                                (item) =>
                                sort_item.id === item.id ? (
                                    <div key={item.id}>
                                    <Link to={"/book/" + item.id}>
                                        <div className="popular-card h-auto w-auto relative rounded-sm">
                                        <div className="absolute w-full h-full bg-slate-800 opacity-0 text-white font-semibold text-sm hover:opacity-100 transition duration-500 cursor-pointer rounded-lg px-3 py-5 overflow-y-scroll">
                                            <h1 className="title py-1 font-bold">
                                            {item.name}
                                            </h1>
                                            <h1 className="author font-normal">
                                            {item.author}
                                            </h1>

                                            <p className="p-2 font-light">{item.info}</p>
                                        </div>
                                        <img
                                            src={item.imageURl}
                                            alt="book"
                                            className="md:w-96 w-full md:h-80 h-auto rounded-lg"
                                        />
                                        </div>
                                    </Link>
                                    </div>
                                ) : (
                                    ""
                                )
                // tip1 - image address format:
                // ./images/Books-image/To-Kill-a-Mockingbird/To-Kill-a-Mockingbird.jpg
              )
            )}

                    
                        
                    
                            

                    </div>
                </div>
            </div>

            <div className="authors w-full h-auto bg-gray-200 relative">
                <h1 className='block text-left pl-14 pt-10 font-bold text-2xl flex-none'>Famous writers</h1>
                <Link to={"/allauthor"} className='mr-10   text-base hover:underline absolute right-0'>see more</Link>
                <div className='flex flex-col mt-2 md:flex-col lg:flex-row flex-wrap p-10 gap-5'>
                {
                    Autors.slice(0, 3).map((aut)=>{
                        return(
                            <Link to={"/author/" + aut.name} className='flex flex-1 hover:shadow-2xl transition duration-200 '>
                                <div className="autor bg-white h-auto border-2 border-black border-dashed flex flex-1 flex-row p-5 gap-3 rounded-2xl" key={aut.authorId}>
                                    <div className="autor-image h-auto w-1/2 flex flex-col items-center justify-center">
                                        <img src={aut.imageURL} alt={aut.name} className='rounded-full h-40 w-40 my-5 shadow-2xl' />
                                        <h1 className='text-lg font-serif'>{aut.name}</h1>
                                    </div>
                                    <div className="author-info h-full w-1/2 flex items-center">
                                        <p className='font-light'>{aut.shortInfo}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
                </div>
            </div>


        </div>
     );
}
 
export default HomePage;