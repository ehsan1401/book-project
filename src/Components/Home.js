import {Link} from 'react-router-dom'

const HomePage = () => {
    return ( 
        <div className="homepage h-full">
            <div className="main-container h-full">
                <div className="banner bg-blend-multiply bg-gray-500 bg-cover w-full" style={{backgroundImage:"url(./images/Banner-wallpeaper.jpg)" }}>
                    <h1 className='text-white flex justify-center p-52 text-6xl font-extrabold '>Wellcome To Our Library</h1>
                </div>
                <div className='w-full h-auto flex'>
                    <div className="text-content text-left p-10">
                        <h4>dadl;akd;kal;sd;asldkla;dkl;a</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum recusandae laboriosam nisi perferendis inventore neque illo beatae. Architecto iure delectus nobis, vitae quisquam ad inventore ducimus! Quibusdam perferendis laboriosam minus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero distinctio quo optio harum blanditiis voluptatem at? In delectus saepe soluta, cum enim est quas animi molestiae tenetur voluptatibus dignissimos nostrum?</p>
                    </div>
                    <div className="image w-1/2 ">
                        <img src="./images/book-main.png" alt="book" className='' />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default HomePage;