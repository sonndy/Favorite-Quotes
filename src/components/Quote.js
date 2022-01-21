import React, {useState} from 'react';
import { Link } from 'react-router-dom';



const Quote = ({quotes, index, nextQuote, previousQuote, saveQuote, setSaveQuote})=> {

    const newSaveQuote = () => {
        saveQuote.push(quotes[index])
        let uniqueQuote = [...new Set(saveQuote)];
        setSaveQuote(uniqueQuote)
        
    }
    return(

            <div className='main'>
                <div className='name-author'>
                    <p>{quotes[index].text}</p> 
                    <p>{quotes[index].author}</p> 
                </div>
                
                <div className='buttons'>
                    <button onClick={()=> {
                        nextQuote(index);
                    }}>Next</button>
                    <button onClick={()=> {
                        previousQuote(index)
                    }}>Previous</button>
                    <button onClick={newSaveQuote}>Save Quote</button>
                    {console.log(saveQuote)}
                    <Link to="/savequotes"><button>My Save quotes</button></Link>
                </div>
            </div>
    )
}

export default Quote