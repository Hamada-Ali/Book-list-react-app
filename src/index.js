import './index.css'
import React from 'react'
import  ReactDOM  from 'react-dom/client'
import App from './App'
import {Provider} from './components/BookContext'

const element = document.querySelector('#root')
const root = ReactDOM.createRoot(element)

root.render(
        <Provider value={5}>
            <App />
        </Provider>
)