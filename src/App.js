import { useState } from "react"
import BookCreate from './components/BookCreate'
import BookList from "./components/BookList"
import axios from "axios";
import { useEffect } from "react";

const App  = () => {

    const [init, update] = useState([])

    const deletedBooks = async (id) => {
        const deleteRequest = await axios.delete(`http://localhost:3001/books/${id}`)
        const deleteFilter = init.filter((book) => {
            return book.id !== id
        })
        update(deleteFilter)
    }


    const create = async (title) => {
        const response = await axios.post("http://localhost:3001/books", {
            title
        })
        const newBook = [...init, response.data]
        update(newBook)
    }

    const editTitle = async (id, newTitle) => {
        const updateTitle = await axios.put((`http://localhost:3001/books/${id}`), {
            title: newTitle
        })
        const fullData = init.map((book) => {
            if(id === book.id) {
                return {...book, ...updateTitle.data}
            }
            return book;
        })
        update(fullData)

    }

    const fetch = async () => {
            const theData = await axios.get("http://localhost:3001/books")
             update(theData.data)
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <div className="app">
            <h1>Reading List:</h1>
            <BookCreate onCreate={create}/>
            <BookList books={init}  onDelete={deletedBooks} onEdit={editTitle}/>
        </div>
    )
}

export default App