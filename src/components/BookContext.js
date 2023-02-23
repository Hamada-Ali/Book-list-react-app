// context system 
import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import axios from "axios";


    const ContextCom = createContext();

    const Provider = ({children}) => {


        const [init, update] = useState([])

        const fetch = async () => {
            const theData = await axios.get("http://localhost:3001/books")
             update(theData.data)
    }

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
    

        const valuesToShare = {
            init,
            deletedBooks,
            create,
            editTitle,
            fetch
        }


        return( 
        <ContextCom.Provider value={valuesToShare}>
            {children}
        </ContextCom.Provider>
        )
    }

export { Provider }

export default ContextCom
