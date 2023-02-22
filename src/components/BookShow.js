import { useState } from "react"
import BookEdit from "./BookEdit";

const BookShow = ({singleBook, onRemove, onEdit}) => {

    const [editStatus, updateEditStatus] = useState(false);

    let content = <h3>{singleBook.title}</h3>

    const onClickEdit = () => {
        updateEditStatus(!editStatus)
        console.log(editStatus)
    }



    const onEditSubmit = () => {
        updateEditStatus(false)
    }

    if(editStatus === true) {
        content = <BookEdit book={singleBook} onEdit={onEdit} onSubmit={onEditSubmit}/>
    }

    const onClickDelete = () => {
        console.log(singleBook.id)
        onRemove(singleBook.id)
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