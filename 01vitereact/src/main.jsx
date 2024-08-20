import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>custom App</h1>
    </div>
  )
}

const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)
const anotherUser="chai aur react"


const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Visit Google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <MyApp />
    reactElement

    // <App/>
  
)
