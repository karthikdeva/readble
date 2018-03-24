import React from "react"
import * as FontAwesome from 'react-icons/lib/fa'

const AppHeader = () => {
    return (
        <header
            className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
            <a className="navbar-brand mr-0 mr-md-2" href="/">
                <FontAwesome.FaComments size={40}/>Readable</a>
        </header>
    )

}

export default AppHeader;