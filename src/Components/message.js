import { useParams } from "react-router-dom";
import Massage from '../db/Json/UserMessages.json';

const Message = () => {
    const {id} = useParams();
    return ( 
        <div className="min-h-screen p-10 flex justify-center items-center">
            {
                Massage.map(
                    (mes)=>{
                        if(id == mes.messageId){
                            return(
                                <div key={mes.messageId} className="bg-gray-200 border-dashed border-gray-800 border-4 rounded-2xl">
                                    <h1 className="text-left font-bold text-3xl px-16 pt-10">{mes.messageTitle}</h1>
                                    <h2 className="text-left font-light ml-20 mt-3 text-xl">Written by: <span className="">{mes.sender}</span></h2>
                                    <p className="px-12 pb-10 pt-3">{mes.messageText}</p>
                                    <button className='delete  bg-red-500 rounded-full float-right hover:bg-red-700 hover:scale-110 mb-5 mr-5'>
                                        <span class="material-symbols-outlined text-white m-5">
                                            delete
                                        </span>
                                    </button>
                                </div>
                            )
                        }
                    }
                )
            }
        </div>
     );
}
 
export default Message;