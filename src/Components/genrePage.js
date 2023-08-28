import GenreDate from "../db/Json/genres.json";
import Books from "../db/Json/books.json";
import { useParams } from "react-router-dom";

const GenrePage = () => {
  const { id } = useParams();
  const intID = parseInt(id);
  return (
    <div className="GenrePage">
      {GenreDate.map((gen) =>
        intID === gen.genreId
          ? Books.map((book) =>
              book.genre.map((gb) =>
                gb === gen.genre ? (
                  <div className="gb">
                    <p>{book.name}</p>
                    <img src={book.imageURl} alt={book.name} />
                  </div>
                ) : (
                  ""
                )
              )
            )
          : ""
      )}
    </div>
  );
};

export default GenrePage;