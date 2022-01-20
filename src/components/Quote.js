import React, {useState} from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import SaveQuote from './SaveQuote';

const Quote = ({quotes, index, nextQuote, previousQuote})=> {
    const [saveQuote, setSaveQuote] = useState([])

    const newSaveQuote = () => {
        saveQuote.push(quotes[index])
        let uniqueQuote = [...new Set(saveQuote)];
        setSaveQuote(uniqueQuote)
        
    }
    return(
        
        <Router>
            <Routes>
                <Route path="/">
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
                </Route>
            </Routes>
        </Router>
    )
}

export default Quote