import data from '../db/Json/books.json';
import visit from '../db/Json/visitpage.json';
import { Link } from 'react-router-dom';


const pop = () => {
    const sorted = visit.sort((a, b) => (a.visit < b.visit) ? 1 : -1);
    console.log(sorted);
    return ( 
        <div className="mainpop relative">
            <h1 className='block text-left text-2xl font-bold px-32 py-10'>most popular books</h1>
                    <div className="pop grid gap-5 px-32 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 py-10">
                        {sorted.map((sort_item) =>
                            data.map(
                                (item) =>
                                sort_item.id === item.id ? (
                                    <div key={item.id}>
                                    <Link to={"/book/" + item.id}>
                                        <div className="popular-card h-auto w-auto relative rounded-sm">
                                        <div className="absolute w-full h-full bg-slate-800 opacity-0 text-white font-semibold text-sm hover:opacity-100 transition duration-500 cursor-pointer rounded-lg px-3 py-5 overflow-y-scroll">
                                            {console.log(item.name)}
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
              )
            )}
        </div>
        <Link to={"/"} className='hover:underline hover:text-blue-600 font-bold block text-right mr-32 my-16'>Back to Home</Link>
        </div>
     );
}
 
export default pop;