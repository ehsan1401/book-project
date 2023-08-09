const Footer = () => {
    return ( 
        <div className="footer text-center bg-gray-900 text-white box-border">
            <p>This is footer</p>
            <ul className="icons w-60 h-auto flex m-auto gap-3">
                <a href="" className="w-52 rounded-full">
                    <li><img src="images\icons\facebook.png" alt="faceBook" /></li>
                </a>
                <a href="" className="w-52">
                    <li ><img src="images\icons\twitter.png" alt="Twitter"/></li>
                </a>
                <a href="" className="w-52">
                    <li><img src="images\icons\instagram.png" alt="Instagram" /></li>
                </a>
                <a href="" className="w-52 rounded-full">
                    <li><img src="images\icons\youtube.png" alt="Youtube" /></li>
                </a>
                <a href="" className="w-52">
                    <li><img src="images\icons\telegram.png" alt="Telegram" /></li>
                </a>
            </ul>
        </div>
     );
}
 
export default Footer;