import BookList from "./components/BookList"
import BookCreate from "./components/BookCreate"
import { useEffect } from "react"
import useBookContext from "./components/hooks/useBookContext"

const App  = () => {

    const {fetch} = useBookContext()
    
    useEffect(() => {
        fetch()
    }, [fetch])

    return (
        <div className="app">
            <h1>Reading List:</h1>
            <BookCreate />
            <BookList/>
        </div>
    )
}

export default App