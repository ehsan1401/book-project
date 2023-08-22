import All from '../db/Json/books.json';
import { Link } from 'react-router-dom';
import data from '../db/Json/books.json';
const AllBooks = () => {
    return ( 
        <div className="all-books grid lg:grid-cols-5 sm:grid-cols-2  md:grid-cols-3 w-full h-auto gap-5 px-32 py-8">
            {
                data.map((item)=>{
                    return(
                        <Link to={"/book/" + item.id}>
                        <div className="box1  rounded-lg relative h-full overflow-scroll hover:shadow-2xl">
                            <img src={item.imageURl} alt={item.name} className='h-full rounded-lg ' />
                            <div className='absolute  p-10'>
                                <h1 className='font-semibold text-lg'>{item.name}</h1>
                                <Link to={"/"} className='font-light mb-5 hover:text-red-600 transition duration-300'>{item.author}</Link>
                                <p className='font-mono'>{item.info}</p>
                            </div>
                        </div>
                        </Link>
                    );
                })
            }


        </div>
     );
}
 
export default AllBooks;





{/* <div className="box1 bg-lime-400">
<img src="../images/Books-image/Animal-Farm/Animal-Farm.jpg" alt="1" />
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus est minima hic, voluptates suscipit, cum, provident vel qui autem perspiciatis tenetur assumenda! Labore facere at iure consectetur laborum voluptatum quasi!</div> */}