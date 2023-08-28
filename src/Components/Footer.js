import {Link} from 'react-router-dom'
const Footer = () => {
    return ( 
        <div className="footer text-center bg-blue-900 text-white box-border w-full">
            <ul className="icons w-60 h-auto flex m-auto gap-2 pt-8">
                <a href="https://www.facebook.com/" className="w-52 rounded-full">
                    <li><img src="images\icons\facebook.jpg" alt="faceBook" className=" rounded-xl p-1" /></li>
                </a>
                <a href="https://twitter.com/" className="w-52">
                    <li ><img src="images\icons\twitter.jpg" alt="Twitter" className=" rounded-xl p-1"/></li>
                </a>
                <a href="https://www.instagram.com" className="w-52">
                    <li><img src="images\icons\instagram.jpg" alt="Instagram"  className=" rounded-xl p-1" /></li>
                </a>
                <a href="https://www.youtube.com/" className="w-52 ">
                    <li className=""><img src="images\icons\youtube.png" alt="Youtube"  className=" rounded-xl p-1" /></li>
                </a>
                <a href="https://telegram.org" className="w-52">
                    <li><img src="images\icons\telegram.jpg" alt="Telegram"  className=" rounded-xl p-1" /></li>
                </a>
            </ul>
            <ul className="quick-access h-auto md:flex justify-center gap-8 w-full px-10 text-gray-300 my-3">
                <Link to={"/"}  className="p-1 hover:text-gray-400" ><li>Home</li></Link>
                
                <Link to={"/All-books"} className="p-1 hover:text-gray-400">
                    <li>All Books</li>
                </Link>                
                <Link to={"/popular"} className="p-1 hover:text-gray-400">
                    <li>Popular Books</li>
                </Link>                
                <Link to={"/allauthor"} className=" p-1 hover:text-gray-400">
                    <li>Authors</li>
                </Link>                
                <Link to={"/genres"} className="p-1 hover:text-gray-400">
                    <li>Genres</li>
                </Link>                
                <Link to={"/Login"} className="p-1 hover:text-gray-400">
                    <li>Account</li>
                </Link>
                <Link to={""} className="p-1 hover:text-gray-400">
                    <li>Terms of Use</li>
                </Link> 
                <Link to={"/aboutUs"} className="p-1 hover:text-gray-400">
                    <li>About Us</li>
                </Link> 
            </ul>
            <ul className="pb-5">
                <p>©2023 EhsanJangjo</p>
            </ul>

        </div>
     );
}
 
export default Footer;