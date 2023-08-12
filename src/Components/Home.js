import {Link} from 'react-router-dom'

const HomePage = () => {
    return ( 
        <div className="homepage h-full">
            <div className="main-container h-full">
                <div className="banner bg-blend-multiply bg-gray-500 bg-cover w-full" style={{backgroundImage:"url(./images/Banner-wallpeaper.jpg)" }}>
                    <h1 className='text-white flex justify-center p-52 text-6xl font-extrabold '>Wellcome To Wealthy  Library</h1>
                </div>

                <div className="genre bg-gray-200 px-24 py-5 text-left">
                    <h1 className='pt-3 text-3xl font-semibold'>Geners</h1>
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
                        <h2 className='text-left font-bold text-2xl'>Most popular this week</h2>
                        <Link to={"*"} className='absolute right-0 pr-3 top-4 hover:underline font-bold'>See more</Link>
                    <div className=" grid grid-flow-col w-full h-auto mb-5 gap-5 pt-5">
                    
                    
                    <div className="popular-card h-50 w-auto relative rounded-sm">
                        <div className='absolute w-full h-full bg-slate-800 opacity-0 text-white font-semibold text-sm hover:opacity-100 transition duration-500 cursor-pointer rounded-lg px-3 py-5 '>
                                    <h1 className='title py-1 font-bold'>Animal Farm</h1>
                                    <h1 className='author font-normal'>George Orwell</h1>

                                    <p className='p-2 font-light'>A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality. Thus the stage is set for one of the most telling satiric fables ever penned –a razor-edged fairy tale for grown-ups that records the evolution from revolution against tyranny to a totalitarianism just as terrible.</p>
                            </div>
                            <img src="./images/Books-image/Animal-Farm/Animal-Farm.jpg" alt="book" className="w-auto h-full rounded-lg"/>
                        </div>                        
                        
                        
                        <div className="popular-card h-50 w-auto relative rounded-sm">
                            <div className='absolute w-full h-full bg-slate-800 opacity-0 text-white font-semibold text-sm hover:opacity-100 transition duration-500 cursor-pointer rounded-lg px-3 py-5 '>
                                    <h1 className='title py-1 font-bold'>Pride and Prejudice</h1>
                                    <h1 className='author font-normal'>Jane Austen</h1>

                                    <p className='p-2 font-light'>Pride and Prejudice is an 1813 novel of manners by Jane Austen. The novel follows the character development of Elizabeth Bennet, the protagonist of the book, who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.</p>
                            </div>
                            <img src="./images/Books-image/Pride-and-Prejudice/Pride-and-Prejudice.jpg" alt="book" className="w-auto h-full rounded-lg"/>
                        </div>                        
                        
                        
                        <div className="popular-card h-50 w-auto relative rounded-sm hidden md:grid">
                            <div className='absolute w-full h-full bg-slate-800 opacity-0 text-white font-semibold text-sm hover:opacity-100 transition duration-500 cursor-pointer rounded-lg px-3 py-5 '>
                                    <h1 className='title py-1 font-bold'>The Book Thief</h1>
                                    <h1 className='author font-normal'>Markus Zusak</h1>

                                    <p className='p-2 font-light'>The Book Thief is a historical fiction novel by the Australian author Markus Zusak, set in Nazi Germany during World War II.The novel follows the adventures of a young girl, Liesel Meminger. Narrated by Death, the novel presents the lives and viewpoints of the many victims of the ongoing war. Themes throughout the story include death, literature, and love.</p>
                            </div>
                            <img src="./images/Books-image/The-Book-Thief/The-Book-Thief.jpg" alt="book" className="w-auto h-full rounded-lg"/>
                        </div>                        
                        
                        
                        <div className="popular-card h-50 w-auto relative rounded-sm hidden md:grid">
                            <div className='absolute w-full h-full bg-slate-800 opacity-0 text-white font-semibold text-sm hover:opacity-100 transition duration-500 cursor-pointer rounded-lg px-3 py-5 '>
                                    <h1 className='title py-1 font-bold'>The Fault in Our Stars</h1>
                                    <h1 className='author font-normal'>John Green</h1>

                                    <p className='p-2 font-light'>Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel's story is about to be completely rewritten.</p>
                            </div>
                            <img src="./images/Books-image/The-Fault-in-Our-Stars/The-Fault-in-Our-Stars.jpg" alt="book" className="w-auto h-full rounded-lg"/>
                        </div>                        
                        
                        
                        <div className="popular-card h-50 w-auto relative rounded-sm hidden sm:grid">
                            <div className='absolute w-full h-full bg-slate-800 opacity-0 text-white font-semibold text-sm hover:opacity-100 transition duration-500 cursor-pointer rounded-lg px-3 py-5 '>
                                    <h1 className='title py-1 font-bold'>The Hunger Games</h1>
                                    <h1 className='author font-normal'>Suzanne Collins</h1>

                                    <p className='p-2 font-light'>In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.</p>
                            </div>
                            <img src="./images/Books-image/The-Hunger-Games/The-Hunger-Games.jpg" alt="book" className="w-auto h-full rounded-lg"/>
                        </div>                        
                        
                        
                        <div className="popular-card h-50 w-auto relative rounded-sm hidden sm:grid">
                            <div className='absolute w-full h-full bg-slate-800 opacity-0 text-white font-semibold text-sm hover:opacity-100 transition duration-500 cursor-pointer rounded-lg px-3 py-5 '>
                                    <h1 className='title py-1 font-bold'>To Kill a Mockingbird</h1>
                                    <h1 className='author font-normal'>Harper Lee</h1>

                                    <p className='p-2 font-light'>To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and won the Pulitzer Prize in 1961. It is a story of a childhood in a Southern town and the crisis of conscience that rocked it</p>
                            </div>
                            <img src="./images/Books-image/To-Kill-a-Mockingbird/To-Kill-a-Mockingbird.jpg" alt="book" className="w-auto h-full rounded-lg"/>
                        </div>
                            

                    </div>
                </div>
            </div>


        </div>
     );
}
 
export default HomePage;