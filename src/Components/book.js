import data from '../db/Json/books.json';
import { useParams } from 'react-router-dom';


const BookPgage = () => {
    
    const { id } = useParams();
    
    return ( 
        <div className="bookpage">
            {data.map((item)=>{

                if(id == item.id){
                    return(
                        <div key={item.id}>
                            <h1>{item.name}</h1>
                            <p>param - {id}</p>
                            
                        </div>
                    );
                }

            })}
            <p>{window.location.href}</p>
        </div>
     );
}
 
export default BookPgage;