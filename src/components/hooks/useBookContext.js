// custom hook 

import { useContext } from "react";
import ContextCom from "../BookContext";

const useBookContext = () => {
    return useContext(ContextCom)
}

export default useBookContext