import BookShow from "./BookShow";

const BookList = ({books, onDelete, onEdit}) => {
    const mapBooks = books.map((book) => {
        return <BookShow key={book.id} singleBook={book} onEdit={onEdit} onRemove={onDelete}/>
    })

    return <div className="book-list">{mapBooks}</div>
}

export default BookList;