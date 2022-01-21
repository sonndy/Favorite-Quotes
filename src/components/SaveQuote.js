import React from "react";
import { Link } from "react-router-dom";




const SaveQuote = ({saveQuote}) => {
    
    return (
        <div>
            <h1>Sonndy is the best</h1>
            <section className="myqoutes">
             {saveQuote.map((quote) =>(
                 <p key={quote.author}>{quote.text}</p>
             ))}
            </section>
            <Link to="/"><button>Home</button></Link>
        </div>
    )
}


export default SaveQuote