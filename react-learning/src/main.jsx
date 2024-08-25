import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Learn from './Learn.jsx'

function MyApp(){
    return (
        <h1>Custom APP!</h1>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click here to visit google'
// }

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click me to visit google'
)

const anotherElement = (
    <a href="https://googlr.com" target='_blank'>Visit Google</a>
)

createRoot(document.getElementById('root')).render(  
    reactElement
)
