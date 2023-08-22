import authors from '../db/Json/authors.json';
import {Link} from 'react-router-dom';

const AllAuthors = () => {
    return ( 
        <div className="all-authors bg-gray-100">
            <h1 className='text-5xl font-bold text-left pl-16 pt-10'>Authors</h1>
            <div className=' grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 p-10 gap-5'>
                {
                    authors.map((aut)=>{
                        return(
                            <Link to={"/author/" + aut.authorId}>
                                <div className="autor bg-white border-black border-dashed border-2 h-auto w-full rounded-lg my-2 overflow-hidden transition-all duration-500 hover:shadow-[inset_0_-2px_30px_rgba(0,0,0,0.3)] hover:scale-110 font-bold text-gray-700 text-2xl p-6 flex">
                                    <img src={aut.imageURL} alt={aut.name} className='h-full w-1/2 rounded-full' />
                                    <h1 className='flex mx-16 items-center'>{aut.name}</h1>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default AllAuthors;