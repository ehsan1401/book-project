import GenreDate from "../db/Json/genres.json";
import Books from "../db/Json/books.json";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'

const GenrePage = () => {
  const { id } = useParams();
  const intID = parseInt(id);
  return (
    <div className="GenrePage">
      {GenreDate.map((gen) =>
        intID === gen.genreId
          ? (
            
            <div className="sm:flex grid gap-3 p-5">
              <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  w-full gap-5 p-10 bg-gray-100 rounded-lg">
                {
                            Books.map((book) =>
                            book.genre.map((gb) =>
                              gb === gen.genre ? (
                                <div className="gb-container flex w-full">
                                  <Link to={"/book/" + book.id}>
                                      <div className="popular-card h-auto w-auto relative rounded-sm">
                                        <div className="absolute w-full h-full bg-slate-800 opacity-0 text-white font-semibold text-sm hover:opacity-100 transition duration-500 cursor-pointer rounded-lg px-3 py-5 overflow-y-scroll">
                                          <h1 className="title py-1 font-bold">
                                            {book.name}
                                          </h1>
                                          <h1 className="author font-normal">
                                            {book.author}
                                          </h1>
              
                                          <p className="p-2 font-light">{book.info}</p>
                                        </div>
                                          <img
                                          src={book.imageURl}
                                          alt="book"
                                          className="md:w-96 w-full md:h-80 h-auto rounded-lg"
                                          />
                                    </div>
                                  </Link>
                                </div>
                              ) : (
                                ""
                              )
                            )
                          )
                }
              </div>
              <div className="bg-gray-200 md:w-1/5 w-full p-5 border-2 border-dashed
              border-black rounded-lg ">
                <h1 className="font-bold mb-5">{gen.genre}</h1>
                <p>{gen.genreInfo}</p>
              </div>
            </div>
          ):""
          
      )}
    </div>
    
  );
};

export default GenrePage;