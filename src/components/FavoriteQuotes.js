import React from "react";
import { Link } from 'react-router-dom';


const FavoriteQuotes = () => {
    return (
        <main>
            <h1>This are my FavoriteQuotes</h1>
            <Link className="link" to={"/"}><button>goback</button></Link>
        </main>
    )
}

export default FavoriteQuotes