import { useState } from "react"
import BookCreate from './components/BookCreate'
import BookList from "./components/BookList"

const App  = () => {
    const [init, update] = useState([])

    const deletedBooks = (id) => {
        const deleteFilter = init.filter((book) => {
            return book.id !== id
        })
        update(deleteFilter)
    }

    const create = (title) => {
        const newBook = [...init, {title, id:Math.floor(Math.random() * 1000)}]
        update(newBook)
        console.log(init.length, newBook)
    }

    const editTitle = (id, newTitle) => {
        const allBooks = init.map((book) => {
            if(book.id === id) {
                return {...book, title:newTitle}
            }
            return book
        })
        update(allBooks)
    }

    return (
        <div className="app">
            <h1>Reading List:</h1>
            <BookCreate onCreate={create}/>
            <BookList books={init}  onDelete={deletedBooks} onEdit={editTitle}/>
        </div>
    )
}

export default App