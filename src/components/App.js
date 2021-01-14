import React from 'react'
import NavBar from './NavBar'
import ItemListContainer from './ItemListContainer'

const App = () =>{
    return (
        <div>
            <NavBar />
            <ItemListContainer greeting = {'LA TIENDA ONLINE'} />
        </div>
    )
}

export default App;