import React, {useState} from 'react';



const Quote = ({quotes, index, nextQuote, previousQuote})=> {
    const [saveQuote, setSaveQuote] = useState([])

    const newSaveQuote = () => {
        saveQuote.push(quotes[index])
        let uniqueQuote = [...new Set(saveQuote)];
        setSaveQuote(uniqueQuote)
        
    }
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
                    <button onClick={newSaveQuote}>Save Quote</button>
                    {console.log(saveQuote)}
                </div>
            </div>
    )
}

export default Quote