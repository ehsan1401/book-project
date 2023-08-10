import {Link} from 'react-router-dom'
const NotFounded = () => {
    return ( 
        <div className="NotFounded">
            <h2>Sorry We can Find your Page.</h2>
            <Link to={"/"}>Back Home</Link>
        </div>
     );
}
 
export default NotFounded;