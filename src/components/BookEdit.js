import { useState } from "react";
import useBookContext from "./hooks/useBookContext";

const BookEdit = ({book,  onSubmit}) => {

    const [initVal, updateVal] = useState(book.title)
    const {editTitle} = useBookContext()

    const changeInputVal = (e) => {
        updateVal(e.target.value)
    }

    const sumbitRequest = (e) => {
        e.preventDefault()
        editTitle(book.id,initVal)
        onSubmit()
    }

    return (
        <div>
            <form className="book-edit" onSubmit={sumbitRequest}>
                <label>edit title:</label>
                <input value={initVal} type="text" className="input" onChange={changeInputVal}/>
                <button type="submit" className="button is-primary"> save</button>
            </form>
        </div>
    );
}

export default BookEdit;