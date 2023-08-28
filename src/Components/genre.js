import { Link } from 'react-router-dom';
import GenreData from '../db/Json/genres.json';


const GenrePage = () => {
    return ( 
        <div className="genre bg-gray-50">
            <h1 className='text-left font-bold text-4xl ml-10 pt-5 text-gray-800'>Genres</h1>
            <div className="genre-container p-5 h-full grid grid-flow-row lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                {
                    GenreData.map((gen)=>{
                        return(
                            <div className="genre-item relative h-auto bg-gray-200 m-5 text-left p-5 rounded-md" key={gen.genreId}>
                                <h1 className='pl-3 text-gray-700 font-semibold font-serif text-xl mb-3'>{gen.genre}</h1>
                                <p className='w-full bg-orange-600 h-1'></p>
                                <p className='h-auto pl-2'>{gen.genreInfo}</p><br />
                                <Link to={"/genre/"+ gen.genreId} className=' font-semibold font-mono p-2 rounded-lg bg-orange-400 hover:bg-orange-600 transition duration-300'>Show more</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default GenrePage;