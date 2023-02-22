import { useState } from "react";

const BookCreate = ({onCreate}) => {
    const [intVal, updatedVal] = useState("");

    const changeValue = (e) => {
        const val = e.target.value;
        updatedVal(val)
    }

    const send = (e) => {
        e.preventDefault()
        onCreate(intVal)
    }

    return (
        <div className="book-create">
            <h3>Book Create</h3>
            <form onSubmit={send}>
                <label>Title: </label>
                <input className="input" onChange={changeValue} value={intVal} type="text" placeholder="enter title here"/>
                <button className="button" type="submit">Create !</button>
            </form>
        </div>
    )
}

export default BookCreate;