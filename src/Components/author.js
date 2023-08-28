import { Link, useParams } from "react-router-dom";
import autors from '../db/Json/authors.json';
import Books from '../db/Json/books.json';

const Author = () => {
    const {name} = useParams();
    return ( 
        <div className="autors-container w-full h-auto">
            {autors.map((aut)=>{
                if(aut.name === name){
                    return(
                        <div className="autor w-full min-h-screen lg:w-full md:w-full xl:flex sm:grid">
                            {/* <p>{aut.name}</p> */}
                            <div className="autor-details text-left p-5 xl:w-9/12 w-full border-dashed border-2 border-gray-400 m-2 bg-gray-50">
                                <h1 className="font-bold text-3xl ml-5 mb-10">{aut.name} <span className="font-light text-xl">({aut.birthday} - {aut.died})</span></h1>
                                <div className="aut-info grid sm:flex h-auto ">
                                    <img src={aut.imageURL} alt={aut.name} className="rounded-2xl h-72 sm:m-0  m-auto shadow-lg" />
                                    <div className="info-aut my-5 sm:mx-10 font-thin">
                                        <p>{aut.fullInfo}</p><br />

                                        <p className=""><span className="font-semibold mr-2">Books:</span><span className="font-light">{aut.Books.map(item=>{return(item+",")})}</span></p>
                                        <p className="font-semibold mr-2 my-3"> Source: <a  href={aut.infoSorce} className="font-light hover:underline hover:text-blue-500">{aut.infoSorce}</a></p>
                                        <p><img src={aut.signatureURL} alt="" /></p>
                                    </div>
                                </div>


                            
                            </div>
                            <div className="autor-books md:w-full xl:w-3/12 p-5 overflow-scroll border-dashed border-2 border-gray-400 m-2 bg-gray-50">
                                <h1 className="p-3 font-bold text-left">Some Work from this Author</h1>
                                {
                                    Books.map(
                                        (book)=>{
                                        if(book.author === aut.name){
                                            return(
                                                <Link to={"/book/" + book.id}>
                                                    <div className="book flex justify-center items-center border-dashed m-3 bg-white border-2 border-black p-2 hover:shadow-2xl transition duration-500">
                                                        <img src={book.imageURl} alt={book.name} className="w-32 " />
                                                        <div className="w-2/3">
                                                            <h2 className="font-bold text-gray-800 m-3">{book.name}</h2>
                                                            <p  className="font-light text-gray-600 hover:text-red-500 transition duration-500">{book.author}</p>
                                                        </div>
                                                    </div>  
                                                </Link>
                                                )
                                        };
                                    })
                                }
                            </div>




                        </div>
                    )
                }
            })}
        </div>
     );
}
 
export default Author;