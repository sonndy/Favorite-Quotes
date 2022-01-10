import React, {useEffect, useState} from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';


const Quote = ({quotes, index, nextQuote, previousQuote})=> {
    
    const [author, setAuthor] = useState(false)

   

    useEffect (() => {
         if(quotes[index].author === null){
            setAuthor(false)
            
        } else {
            setAuthor(true)
        }
    
    }, [])

    return(
        
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
                  {quotes[index].author === null && <p className='author'>No Author</p>}
                </div>
                <div className='button'>
                   <GrNext onClick={()=> {
                    nextQuote(index);
                }}/> 
                </div>
                
            </div>
        </div>
    )
}

export default Quote


{/* <div className='main'>
            <p>{quotes[index].text}</p>
            <div className='buttons'>
                <button >Next</button>
                <button >Previous</button>
            </div>
        </div> */}