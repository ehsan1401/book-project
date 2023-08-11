import {Link} from 'react-router-dom'
const Footer = () => {
    return ( 
        <div className="footer text-center bg-gray-900 text-white box-border w-full">
            <ul className="icons w-60 h-auto flex m-auto gap-2 pt-8">
                <a href="" className="w-52 rounded-full">
                    <li><img src="images\icons\facebook.jpg" alt="faceBook" className=" rounded-full p-1" /></li>
                </a>
                <a href="" className="w-52">
                    <li ><img src="images\icons\twitter.jpg" alt="Twitter" className=" rounded-full p-1"/></li>
                </a>
                <a href="" className="w-52">
                    <li><img src="images\icons\instagram.jpg" alt="Instagram"  className=" rounded-full p-1" /></li>
                </a>
                <a href="" className="w-52 ">
                    <li className=""><img src="images\icons\youtube.png" alt="Youtube"  className=" rounded-full p-1" /></li>
                </a>
                <a href="" className="w-52">
                    <li><img src="images\icons\telegram.jpg" alt="Telegram"  className=" rounded-full p-1" /></li>
                </a>
            </ul>
            <ul className="quick-access h-auto md:flex justify-center gap-8 w-full px-10 text-gray-300 my-3">
                <Link to={"/aboutUs"}  className="p-1 hover:text-gray-400" ><li>About</li></Link>
                
                <a href="#" className="p-1 hover:text-gray-400">
                    <li>Need Help?</li>
                </a>                
                <a href="#" className="p-1 hover:text-gray-400">
                    <li>Content Guide</li>
                </a>                
                <a href="#" className=" p-1 hover:text-gray-400">
                    <li>My Store</li>
                </a>                
                <a href="#" className="p-1 hover:text-gray-400">
                    <li>Privacy</li>
                </a>                
                <a href="#" className="p-1 hover:text-gray-400">
                    <li>Terms of Use</li>
                </a>                
                <a href="#" className="p-1 hover:text-gray-400">
                    <li>Advance</li>
                </a>                
                <a href="#" className="p-1 hover:text-gray-400">
                    <li>Jobs</li>
                </a>
            </ul>
            <ul className="pb-5">
                <p>©2023 EhsanJangjo</p>
            </ul>

        </div>
     );
}
 
export default Footer;