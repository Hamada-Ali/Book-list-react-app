import { useState } from "react"
import useBookContext from "./hooks/useBookContext";
import BookEdit from "./BookEdit";


const BookShow = ({singleBook}) => {

    const [editStatus, updateEditStatus] = useState(false);
    const { deletedBooks } = useBookContext()

    let content = <h3>{singleBook.title}</h3>

    const onClickEdit = () => {
        updateEditStatus(!editStatus)
        console.log(editStatus)
    }




    const onEditSubmit = () => {
        updateEditStatus(false)
    }

    if(editStatus === true) {
        content = <BookEdit book={singleBook} onSubmit={onEditSubmit}/>
    }

    const onClickDelete = () => {
        console.log(singleBook.id)
        deletedBooks(singleBook.id)
    }
    return (
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${singleBook.id}/300/200`} alt="random-image"/>
            <div>
            {content}
            </div>
            <div className="actions">
                <button className="edit" onClick={onClickEdit} >edit</button>
                <button className="delete" onClick={onClickDelete}>Delete</button>

            </div>
        </div>
    )
}

export default BookShow;