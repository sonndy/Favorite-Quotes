import React, {useEffect, useState} from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Quote = ({quotes, index, nextQuote, previousQuote})=> {
    
    const [author, setAuthor] = useState(false)
    const [saveQuotes, setSaveQuotes] = useState([])
   
    const addToSave = () => {
        
        saveQuotes.push(quotes[index])
        let uniq = [...new Set(saveQuotes)];
        setSaveQuotes(uniq);
    }

    useEffect (() => {
         if(quotes[index].author === null){
            setAuthor(false)
            
        } else {
            setAuthor(true)
        }
    
    }, [])

    return(
        <div>
        <div className='save'>
                 <button className='save-btn' onClick={addToSave}>Save</button>
                 {console.log(saveQuotes)}
         </div>
         <div className='myQuotes'>
                 <Link className='link' to={"/favorite"}><button className='my-quotes'>Favorites Quotes</button></Link>
         </div>
        <div className='main'>
        
         <div className='container'>
             <div className='button'>
                 <GrPrevious onClick={()=> {
                 previousQuote(index)
             }}/>
             </div>
             <div className='content'>
               <p>{quotes[index].text}</p>
               {quotes[index].author !== null && <p className='author'>- {quotes[index].author}</p>}
               {quotes[index].author === null && <p className='author'>- Unknown</p>}
             </div>
             <div className='button'>
                <GrNext onClick={()=> {
                 nextQuote(index);
             }}/>
             </div>
        
         </div>
             
         </div>
        </div>
    )
}

export default Quote

