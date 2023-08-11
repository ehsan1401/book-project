import {Link} from 'react-router-dom'

const HomePage = () => {
    return ( 
        <div className="homepage h-full">
            <div className="main-container h-full">
                <div className="banner bg-blend-multiply bg-gray-500 bg-cover w-full" style={{backgroundImage:"url(./images/Banner-wallpeaper.jpg)" }}>
                    <h1 className='text-white flex justify-center p-52 text-6xl font-extrabold '>Wellcome To Wealthy  Library</h1>
                </div>

                <div className="genre bg-gray-200 px-24 py-5 text-left">
                    <h1 className='pt-3 text-3xl font-semibold'>Ganers</h1>
                    <Link to={"*"} className='float-right p-3 my-3 font-medium hover:underline' >See more</Link>
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
                            <Link to={"/aboutUs"} className='float-right p-3 hover:underline hover:text-blue-900'>Learn more</Link>
                        </div>

                    </div>
                    <div className="image md:w-1/3">
                        <img src="./images/book-main.png" alt="book" className='' />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default HomePage;