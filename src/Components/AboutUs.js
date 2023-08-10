import {Link} from 'react-router-dom'
const AboutUS = () => {
    return ( 
        <div className="aboutUs">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita consectetur odit reiciendis iure adipisci tempore id eum necessitatibus eveniet temporibus? Fugiat architecto nam, ducimus corporis quo quis quibusdam delectus non!</p>
            <Link to={"/"}>
                Back Home
            </Link>
        </div>
     );
}
 
export default AboutUS;