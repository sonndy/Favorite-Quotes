import React, {useState} from 'react';


const Quote = ({quotes, index, nextQuote, previousQuote})=> {
    // const [text, author] = quotes[index]
    return(
        
        <div className='main'>
            <p>{quotes[index].text}</p>
            <div className='buttons'>
                <button onClick={()=> {
                    nextQuote(index);
                }}>Next</button>
                <button onClick={()=> {
                    previousQuote(index)
                }}>Previous</button>
            </div>
        </div>
    )
}

export default Quote