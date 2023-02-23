import BookShow from "./BookShow";
import useBookContext from "./hooks/useBookContext";


const BookList = () => {
    const {init} = useBookContext()
    console.log(init)
    const mapBooks = init.map((book) => {
        return <BookShow key={book.id} singleBook={book}/>
    })

    return(
        <div>
            <div className="book-list">{mapBooks}</div>
        </div>
    ) 
}

export default BookList;